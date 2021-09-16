import Player from './player.js'
import Deck from './deck.js'
import Graveyard from './graveyard.js'
import Courtyard from './courtyard.js'
import Cards from './cards.js'
import Card from './card.js'
import Value from './value.js'
import Suit from './suit.js'

class Game {
  static CardCapture = this._instantiateCardCapture()

  constructor() {
    this._player = new Player()
    this._dungeon = new Deck()
    this._courtyard = new Courtyard()
    this._graveyard = new Graveyard()
  }
  
  displayPlayerHand() {
    return this._player.displayHand()
  }

  displayDeckSize() {
    return this._player.calculateDeckSice()
  }
  
  displayDiscard() {
    return this._player.displayDiscard()
  }

  displayCourtyard() {
    return this._courtyard.display()
  }

  displayGraveyard() {
    return this._graveyard.calculateSize()
  }

  letPlayerSuffer(cardStrings) {
    if(cardStrings.length === 1) {
      const cards = cardStrings.map(Card.fromDisplay)
      const attacked = this._courtyard['fourth'].copy()

      this._player.suffer(this._graveyard, cards)
      this._graveyard.bury([attacked])
      this._courtyard.removeAt('fourth')
    } else {
      throw new Error('You must suffer one card')
    }
  }

  letPlayerSacrifice(cardStrings, position) {
    if(cardStrings.length === 2) {
      const cards = cardStrings.map(Card.fromDisplay)
      const attacked = this._courtyard[position].copy()

      this._player.sacrifice(this._graveyard, cards)
      this._dungeon.putAtTheBottom(attacked)
      this._courtyard.removeAt(position)
    } else {
      throw new Error('You must sacrifice two cards')
    }
  }

  fillPlayersHand() {
    while(this._player.calculateHandSize() < 4) {
      this._player.draw()
    }
  }

  letPlayerDrawFromDeck(times = 1) {
    this._player.draw(times)
  }

  letPlayerDiscard(cardStrings) {
    const cards = cardStrings.map(Card.fromDisplay)
    this._player.discard(cards)
  }

  letPlayerAttackWith(cardStrings, position) {
    const cards = cardStrings.map(Card.fromDisplay)
    const attacked = this._courtyard[position]

    if(Cards.areHigherValueThan(cards, attacked) && Cards.areTheSameSuitAs(cards, attacked)) {
      this._player.buyFrom(
        attacked,
        position,
        this._courtyard,
        cards)
    } else {
      throw new Error('You cannot buy this scrub')
    }
  }

  setupCardCapture() {
    this._setupDungeon()
    this._setupCourtyard()
    this.letPlayerDrawFromDeck(4)
  }

  _setupDungeon() {
    this._dungeon = Deck.CardCaptureDungeon
    this._dungeon.shuffle()
  }

  _setupCourtyard() {
    const first = this._dungeon.draw()
    const second = this._dungeon.draw()
    const third = this._dungeon.draw()
    const fourth = this._dungeon.draw()

    this._courtyard.placeFirst(first)
    this._courtyard.placeSecond(second)
    this._courtyard.placeThird(third)
    this._courtyard.placeFourth(fourth)

    this._checkForMaximumInCourtyard()

    while(this._courtyard.isFull() === false) {
      this.advanceDungeon()
    }
  }

  advanceDungeon() {
    this._courtyard.advance(this._dungeon.draw())
  }

  _checkForMaximumInCourtyard() {
    const maximum = new Card(Suit.Hearts, Value.Jack)

    const first = this._courtyard.first.copy()
    const second = this._courtyard.second.copy()
    const third = this._courtyard.third.copy()
    const fourth = this._courtyard.fourth.copy()

    if(first.isHigherThanOrEqualTo(maximum)) {
      this._dungeon.putAtTheBottom(first)
      this._courtyard.removeAt('first')
    }

    if(second.isHigherThanOrEqualTo(maximum)) {
      this._dungeon.putAtTheBottom(second)
      this._courtyard.removeAt('second')
    }

    if(third.isHigherThanOrEqualTo(maximum)) {
      this._dungeon.putAtTheBottom(third)
      this._courtyard.removeAt('third')
    }

    if(fourth.isHigherThanOrEqualTo(maximum)) {
      this._dungeon.putAtTheBottom(fourth)
      this._courtyard.removeAt('fourth')
    }
  }

  static _instantiateCardCapture() {
    const game = new Game()
    game.setupCardCapture()
    return game
  }
}

export default Game
