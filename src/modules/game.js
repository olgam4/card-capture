import Player from './player.js'
import Deck from './deck.js'
import Graveyard from './graveyard.js'
import Courtyard from './courtyard.js'
import Cards from './cards.js'
import Card from './card.js'

class Game {
  static CardCapture = this._instantiateCardCapture()

  constructor() {
    this._player = new Player()
    this._deck = new Deck()
    this._dungeon = new Deck()
    this._courtyard = new Courtyard()
    this._graveyard = new Graveyard()
  }
  
  displayPlayerHand() {
    return this._player.displayHand()
  }
  
  displayDiscard() {
    return this._player.displayDiscard()
  }

  displayCourtyard() {
    return this._courtyard.display()
  }

  letPlayerDrawFromDeck(times = 1) {
    this._player.drawFrom(this._deck, times)
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
    this._setupDeck()
    this._setupCourtyard()
  }

  _setupDungeon() {
    this._dungeon = Deck.CardCaptureDungeon
    this._dungeon.shuffle()
  }

  _setupDeck() {
    this._deck = Deck.CardCaptureDeck
    this._deck.shuffle()
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
  }

  static _instantiateCardCapture() {
    const game = new Game()
    game.setupCardCapture()
    return game
  }
}

export default Game
