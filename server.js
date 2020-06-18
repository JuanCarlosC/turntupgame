'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path')
const kingsCupCards = require('./cards/kingscup');

const PORT = process.env.PORT || 3000;
const INDEX = '/player.html';

const games = {}

const newGame = {
  id: '',
  roomCode: '',
  kingsLeft: 4,
  players: [],
  shitTalking: [],
  started: false,
  selectedCard: null,
  view: '',
  selectedPlayerId: '',
  lastUpdated: null,
  cards: [...kingsCupCards.shuffledKingsCupCards()]
}

var publicPath = path.join(__dirname, 'public');

const server = express()
  .use(express.static(__dirname + '/public'))
  .get('/', function (req, res) { res.sendfile(publicPath + '/player.html') })
  .get('/game', function (req, res) { res.sendfile(publicPath + '/game.html') })
  .get('/app.css', function (req, res) { res.sendfile(publicPath + '/app.css') })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

const updateGameInfo = (roomCode, data) => {
  let currentGame = games[roomCode]

  if (!currentGame) return

  Object.keys(data).forEach(key => {
    currentGame[key] = data[key]
  })

  currentGame['lastUpdated'] = Date.now()

  io.sockets.in(roomCode).emit('gameInfo', currentGame);
}

const emitToRoom = (roomCode, msg, data) => {
  io.sockets.in(roomCode).emit(msg, data);
}

const emitGameEndedToPlayers = (roomCode) => {
  delete games[roomCode]
  io.sockets.in(roomCode).emit('gameEnded')
}

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));

  socket.on('entergame', (data) => {
    // console.log('games →', games)
    // console.log('games[data.roomCode] →', games[data.roomCode])

    if (!games[data.roomCode]) {
      io.emit('wrongRoomCode', data)
    } else {
      socket.join(data.roomCode)

      let newPlayers = [...games[data.roomCode].players]
      let playerAlreadyInGame = newPlayers.find(p => p.id !== data.id)
      const updatedGameData = {}

      if (playerAlreadyInGame) {
        newPlayers.push(data)
        updateGameInfo['players'] = newPlayers
      }

      if (games[data.roomCode].players.length === 0) updatedGameData.selectedPlayerId = data.id
      updateGameInfo(data.roomCode, updatedGameData)

    }
    console.log('enter-game data', data)
    console.log('=================================================')
  })

  socket.on('newGame', (data) => {
    let newGameCopy = {...newGame, ...data}
    games[newGameCopy.roomCode] = newGameCopy

    socket.join(newGameCopy.roomCode)
    io.sockets.in(newGameCopy.roomCode).emit('gameInfo', newGameCopy);
    console.log('newGame data', data)
    console.log('games →', games)
    console.log('=================================================')
  })

  socket.on('startGame', (gameInfo) => {
    const updatedGameData = {}
    updatedGameData.started = true

    updateGameInfo(gameInfo.roomCode, updatedGameData)
  }),

  socket.on('cardSelected', (gameInfo) => {
    const updatedGameData = {}
    updatedGameData.selectedCard = gameInfo.selectedCard
    updatedGameData.cards = gameInfo.cards

    if (gameInfo.selectedCard.icon.toUpperCase().includes('K')) {
      updatedGameData.kingsLeft = gameInfo.kingsLeft - 1
    }

    if (updatedGameData.kingsLeft === 0) {
      emitToRoom(gameInfo.roomCode, 'lastKingDrawn', null)
    }

    updateGameInfo(gameInfo.roomCode, updatedGameData)
  })

  socket.on('finishedTurn', (gameInfo) => {
    const updatedGameData = {}
    updatedGameData.selectedPlayerId = gameInfo.selectedPlayerId
    updatedGameData.players = gameInfo.players
    updatedGameData.selectedCard = gameInfo.selectedCard
    updatedGameData.cards = gameInfo.cards

    updateGameInfo(gameInfo.roomCode, updatedGameData)
  })

  socket.on('updatedPlayersInfo', (gameInfo) => {
    const updatedGameData = {}
    updatedGameData.players = gameInfo.players

    updateGameInfo(gameInfo.roomCode, updatedGameData)
  })

  socket.on('playerShitTalked', (gameInfo) => {
    console.log('→ playerShitTalked')
    console.log(' playerShitTalked gameInfo.shitTalking →', gameInfo.shitTalking)
    console.log('=================================================')
    const updatedGameData = {}
    updatedGameData.shitTalking = gameInfo.shitTalking

    updateGameInfo(gameInfo.roomCode, updatedGameData)
  })

  socket.on('updateShitTalkingList', (gameInfo) => {
    const updatedGameData = {}
    updatedGameData.shitTalking = gameInfo.shitTalking

    updateGameInfo(gameInfo.roomCode, updatedGameData)
  })

  socket.on('kickOutUser', (gameInfo) => {
    console.log('→ kickOutUser')
    const updatedGameData = {}
    updatedGameData.players = gameInfo.players
    console.log('games[gameInfo.roomCode].selectedPlayerId →', games[gameInfo.roomCode].selectedPlayerId)
    console.log('gameInfo.kickedOutUser.id →', gameInfo.kickedOutUser.id)
    console.log('games[gameInfo.roomCode].selectedPlayerId === gameInfo.kickedOutUser.id →', games[gameInfo.roomCode].selectedPlayerId === gameInfo.kickedOutUser.id)

    if (games[gameInfo.roomCode].selectedPlayerId === gameInfo.kickedOutUser.id) {
      updatedGameData.selectedPlayerId = updatedGameData.players[0].id
      updatedGameData.selectedCard = null
    }
    console.log('updatedGameData →', updatedGameData)
    console.log('gameInfo.roomCode →', gameInfo.roomCode)
    console.log('gameInfo.kickedOutUser →', gameInfo.kickedOutUser)
    console.log('=================================================')

    updateGameInfo(gameInfo.roomCode, updatedGameData)
    emitToRoom(gameInfo.roomCode, 'userKickedOut', gameInfo.kickedOutUser)
  })

  socket.on('endGame', (gameInfo) => {
    emitGameEndedToPlayers(gameInfo.roomCode)
  })
});

setTimeout(() => {
  // loop through games and check if any have been inactive for 20mins
  console.log('→ loop through games and check if any have been inactive for 20mins')
}, 1000 * 60 * 5)