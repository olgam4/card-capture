import Deck from './deck.js'

class Player {
  _hand = []
  _discard = []
  _deck

  constructor() {
    this._deck = Deck.CardCaptureDeck
  }

  draw(times = 1) {
    for(let i = 0; i < times; i++) {
      if(this._deck.calculateCurrentSize() === 0) {
        this.shuffleDiscardIntoDeck()
      }
      this._hand = [...this._hand, this._deck.draw()]
    }
  }

  discard(cards) {
    cards.forEach(this._discardFn)
  }

  _discardFn = (discardedCard) => {
    this._discard = [...this._discard, discardedCard]
    const cardIndex = this._hand.findIndex(card => discardedCard.isTheSameAs(card))
    this._hand.splice(cardIndex, 1)
  }

  _destroyFn = (destroyedCard) => {
    const cardIndex = this._hand.findIndex(card => destroyedCard.isTheSameAs(card))
    this._hand.splice(cardIndex, 1)
  }

  shuffleDiscardIntoDeck() {
    this._discard.forEach(card => {
      this._deck.putAtTheBottom(card)
    })
    this._discard = []
    this._deck.shuffle()
  }

  calculateHandSize() {
    return this._hand.length
  }

  calculateDeckSice() {
    return this._deck.calculateCurrentSize()
  }

  displayHand() {
    return [...this._hand]
  }

  displayDiscard() {
    return [...this._discard]
  }

  buyFrom(card, position, place, spentCards) {
    place.removeAt(position)
    this._discard = [...this._discard, card]
    spentCards.forEach(this._discardFn)
  }

  sacrifice(graveyard, cards) {
    graveyard.bury(cards)
    cards.forEach(this._destroyFn)
  }

  suffer(graveyard, cards) {
    graveyard.bury(cards)
    cards.forEach(this._destroyFn)
  }
}

export default Player
