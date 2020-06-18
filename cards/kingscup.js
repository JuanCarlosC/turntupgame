const suites = ['❤️', '♠️', '♦️', '♣️']

const cards = [
  {
      icon: 'A',
      label: 'Ace',
      title: 'Avalanche',
      gif: 'https://media.giphy.com/media/wvcYBbxG8XNW8/200.gif',
      gifBackup: 'https://media2.giphy.com/media/11B4s2L7u3hFlu/200.webp?cid=ecf05e479f8018c709b5068240807c70dfde32012280be4c&rid=200.webp',
      description: 'To perform a waterfall, each player starts drinking their beverage at the same time as the person to their left. No player can stop drinking until the player before them stops.'
  },
  {
      icon: '2',
      label: 'Two',
      title: 'You',
      gif: 'https://media.giphy.com/media/3o72FfX8EBGz5cCQmI/giphy.gif',
      gifBackup: 'https://media3.giphy.com/media/KylMzku5T57A4/200.webp?cid=ecf05e47916ff5593b9f4b82f50a24241edff79bd484bff7&rid=200.webp',
      description: 'Pick a player to drink 1 sip.'
  },
  {
      icon: '3',
      label: 'Three',
      title: 'Me',
      gif: 'https://media.giphy.com/media/10aIbqnbAbjX9e/giphy.gif',
      gifBackup: 'https://media2.giphy.com/media/YRoI2cjeJEnJrNWtT1/200.webp?cid=ecf05e471ed4f1c747fc95b6892c64b86ed0961432e51b29&rid=200.webp',
      description: 'If you pick this card, you have to drink 1 sip!'
  },
  {
      icon: '4',
      label: 'Four',
      title: 'Whores',
      gif: 'https://media0.giphy.com/media/tdVTGEqda6Yw0/source.gif',
      gifBackup: 'https://media3.giphy.com/media/avbpWzEvlcexW/200.webp?cid=ecf05e470cc7a7bcedd42d067a3e16f11f02ce22778b9ae8&rid=200.webp',
      description: 'All girls must drink.'
  },
  {
      icon: '5',
      label: 'Five',
      title: 'Never Have I ever',
      gif: 'https://media.giphy.com/media/98lpt6iVXjihy/giphy.gif',
      gifBackup: 'https://media3.giphy.com/media/od0xSwiJO6oMM/giphy.webp?cid=ecf05e47b11c13567c6bc0225b2da5b11e6f30c0c4c48b0d&rid=giphy.webp',
      description: 'Raise 5 all five fingers. Says a simple statement about what you have never done before starting with "Never have I ever". Anyone who at some point in their life has done the action that you said, must put a finger down. First player who has all fingers down must drink'
  },
  {
      icon: '6',
      label: 'Six',
      title: 'Dicks',
      gif: 'https://i.imgur.com/J4S8enf.gif',
      gifBackup: 'https://media0.giphy.com/media/3oKIPoUXCurS6C8tBS/100.webp?cid=ecf05e47c797b01e74d8516b7ae84088e85265ac1ca31aac&rid=100.webp',
      description: 'All guys must drink.'
  },
  {
      icon: '7',
      label: 'Seven',
      title: 'Heaven',
      gif: 'https://thumbs.gfycat.com/BlondVacantAnemone-small.gif',
      gifBackup: 'https://media3.giphy.com/media/12PinNQSg68l0c/giphy.webp?cid=ecf05e476931c5a2e3812f6c14538eb6ccd1dbaeaa0c8645&rid=giphy.webp',
      description: 'The person with this card may raise their hand at any time during the game and the last person to do so has to drink.'
  },
  {
      icon: '8',
      label: 'Eight',
      title: 'Mate',
      gif: 'https://media1.tenor.com/images/64bbca072c3c6ba0ce3dcf08bfebeee7/tenor.gif?itemid=7208412',
      gifBackup: 'https://media2.giphy.com/media/l2QEdZMha3XrvypMY/200.webp?cid=ecf05e470c453a551fa25feab951ba1f8566c3a631690e13&rid=200.webp',
      description: 'Pick a player. This player is now your drining mate. Everytime you have to drink, this person also takes a drink and vice versa.'
  },
  {
      icon: '9',
      label: 'Nine',
      title: 'Rhyme',
      gif: 'https://media3.giphy.com/media/Aff4ryYiacUO4/giphy.gif',
      gifBackup: 'https://media2.giphy.com/media/gtakVlnStZUbe/200.webp?cid=ecf05e47dd41d32a7c93999cd4ea82708cf3306ed98de0a3&rid=200.webp',
      description: 'You say a word, and the person to your right has to say a word that rhymes. This continues around the table until someone cannot think of a word or take too long to come up with a rhyme. This person must drink. The same word may not be used twice.'
  },
  {
      icon: '10',
      label: 'Ten',
      title: 'Categories',
      gif: 'https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif',
      gifBackup: 'https://media2.giphy.com/media/gwlfHc7d2xyhy/200.webp?cid=ecf05e47a27eb1d09f3075136473833b72e016dbc569d7a3&rid=200.webp',
      description: 'You come up with a category of things, and the person to your right must come up with something that falls within that category. This goes on around the table until someone can’t come up with anything. This person must drink.'
  },
  {
      icon: 'J',
      label: 'Jack',
      title: 'Rule Mater',
      gif: 'https://media.giphy.com/media/hrA9GZ1c1m9XRrIu47/giphy.gif',
      gifBackup: 'https://media2.giphy.com/media/PkQiquy8m5s8h2NxuU/200.webp?cid=ecf05e4747a365ac839848b0f76419d1d72028fefe1990dc&rid=200.webp',
      description: 'You can come up with a new rule for the game or remove one. If a player breaks the rules, he must drink!'
  },
  {
      icon: 'Q',
      label: 'Queen',
      title: 'Question master',
      gif: 'https://media0.giphy.com/media/7SB7CLGQz3Zio/source.gif',
      gifBackup: 'https://media0.giphy.com/media/UWgYZLSaR0FSYVUhga/200.webp?cid=ecf05e47633ee15822971faae67283b91d73ed26508d3eb4&rid=200.webp',
      description: 'You are now the question master. If you ask a player a question and they answer, they have to drink. If they ignore your question or answer the question with another question then they are safe.'
  },
  {
      icon: 'K',
      label: 'King',
      title: 'Kings Cup',
      gif: 'https://i.gifer.com/pZj.gif',
      gifBackup: 'https://media0.giphy.com/media/F0uvYzyr2a7Li/giphy.webp?cid=ecf05e47a009f0f26f7e3874bef2829cf172ca508d42a813&rid=giphy.webp',
      description: 'Chug the rest of your beverage. Who ever draws the last king has to drink the rest of their contents plus another full beverage'
  }
]

let kingsCupCards = []
let cardPlacementInit = [
    {
      "x": 129,
      "y": "88.5661",
      "rotate": "24"
    },
    {
      "x": "170.742",
      "y": 257,
      "rotate": "170"
    },
    {
      "x": "246.83",
      "y": 76,
      "rotate": "42"
    },
    {
      "x": "246.83",
      "y": 11,
      "rotate": "45"
    },
    {
      "x": "69.9766",
      "y": 138,
      "rotate": "21"
    },
    {
      "x": "29.7461",
      "y": "119.772",
      "rotate": "89"
    },
    {
      "x": "279.242",
      "y": "28.5775",
      "rotate": "24"
    },
    {
      "x": "41.2969",
      "y": "130.344",
      "rotate": "138"
    },
    {
      "x": "294.957",
      "y": "121.371",
      "rotate": "42"
    },
    {
      "x": "170.742",
      "y": 161,
      "rotate": "174"
    },
    {
      "x": "175.922",
      "y": "21.206",
      "rotate": "185"
    },
    {
      "x": "269.246",
      "y": "68.7151",
      "rotate": "50"
    },
    {
      "x": "246.83",
      "y": 148,
      "rotate": "44"
    },
    {
      "x": "261.926",
      "y": "121.612",
      "rotate": "86"
    },
    {
      "x": "59.793",
      "y": "237.292",
      "rotate": "86"
    },
    {
      "x": "75.1718",
      "y": "74.5586",
      "rotate": "139"
    },
    {
      "x": 48,
      "y": "175.116",
      "rotate": "86"
    },
    {
      "x": "276.059",
      "y": "256.328",
      "rotate": "146"
    },
    {
      "x": "227.613",
      "y": "57.0002",
      "rotate": "49"
    },
    {
      "x": "275.035",
      "y": 166,
      "rotate": "139"
    },
    {
      "x": "246.83",
      "y": 133,
      "rotate": "46"
    },
    {
      "x": "257.459",
      "y": 30,
      "rotate": "135"
    },
    {
      "x": "246.83",
      "y": 163,
      "rotate": "45"
    },
    {
      "x": "40.875",
      "y": "72.0625",
      "rotate": "142"
    },
    {
      "x": "257.459",
      "y": 139,
      "rotate": "136"
    },
    {
      "x": "287.916",
      "y": 54,
      "rotate": "99"
    },
    {
      "x": "136.769",
      "y": "18.6914",
      "rotate": "145"
    },
    {
      "x": "211.203",
      "y": 212,
      "rotate": "177"
    },
    {
      "x": "297",
      "y": 232,
      "rotate": "69"
    },
    {
      "x": "170.742",
      "y": 214,
      "rotate": "172"
    },
    {
      "x": "257.459",
      "y": 134,
      "rotate": "142"
    },
    {
      "x": "297",
      "y": 20,
      "rotate": "68"
    },
    {
      "x": 247,
      "y": "154.968",
      "rotate": "87"
    },
    {
      "x": "287.916",
      "y": 183,
      "rotate": "105"
    },
    {
      "x": "296.316",
      "y": "171.714",
      "rotate": "89"
    },
    {
      "x": "287.916",
      "y": 179,
      "rotate": "99"
    },
    {
      "x": "297",
      "y": 146,
      "rotate": "71"
    },
    {
      "x": 252,
      "y": "223.027",
      "rotate": "87"
    },
    {
      "x": "88.9841",
      "y": 24,
      "rotate": "183"
    },
    {
      "x": "246.83",
      "y": 151,
      "rotate": "45"
    },
    {
      "x": "239.66",
      "y": 207,
      "rotate": "139"
    },
    {
      "x": "297",
      "y": 18,
      "rotate": "70"
    },
    {
      "x": "287.916",
      "y": 212,
      "rotate": "103"
    },
    {
      "x": "246.83",
      "y": 140,
      "rotate": "46"
    },
    {
      "x": "153.961",
      "y": 24,
      "rotate": "178"
    },
    {
      "x": "223.641",
      "y": "28.8434",
      "rotate": "21"
    },
    {
      "x": "53.0547",
      "y": "259.684",
      "rotate": "43"
    },
    {
      "x": "170.742",
      "y": 163,
      "rotate": "178"
    },
    {
      "x": "257.459",
      "y": 228,
      "rotate": "137"
    },
    {
      "x": "246.83",
      "y": 215,
      "rotate": "44"
    },
    {
      "x": "49.2266",
      "y": "189.58",
      "rotate": "86"
    },
    {
      "x": "117.602",
      "y": "56.6211",
      "rotate": "144"
    }
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

suites.forEach(suite => {
  let cardsCopy = [...cards]
  let suiteDeck = []
  cardsCopy.forEach((card, index) => {
    let cardIndex = 0

    if (index >= 0 && index <= 10) cardIndex = index
    if (index > 10 &&index <= 20) cardIndex = index - 10

    // console.log('index →', index)
    // console.log('cardIndex →', cardIndex)
    // let initCardPlacement = {...cardPlacementInit[cardIndex] }
    // console.log('initCardPlacement →', initCardPlacement)
    // // 20
    // initCardPlacement.x = (initCardPlacement.x + randomIntFromInterval(1, 20))
    // // 30
    // initCardPlacement.y = (initCardPlacement.y + randomIntFromInterval(1, 30))
    // 10
    // initCardPlacement.rotate = (initCardPlacement.rotate + randomIntFromInterval(1, 10))

    suiteDeck.push({...card, icon: card.icon + suite})
  })
  kingsCupCards.push(...suiteDeck)
})

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const shuffledCards = () => { 
    let cardsShuffled = shuffle([...kingsCupCards]) 
    cardsShuffled = cardsShuffled.map((c, index) => {
        c.initCardPlacement = cardPlacementInit[index]
        return c
    })

    return cardsShuffled
}

exports.kingsCupCards = shuffledCards()
exports.shuffledKingsCupCards = shuffledCards