class Player {
  _hand = []
  _discard = []

  drawFrom(deck, times = 1) {
    for(let i = 0; i < times; i++) {
      this._hand = [...this._hand, deck.draw()]
    }
  }

  calculateHandSize() {
    return this._hand.length
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
    spentCards.forEach(spentCard => {
      this._discard = [...this._discard, spentCard]
      this._hand = this._hand.filter(card => spentCard.isTheSameAs(card) === false)
    })

  }

}

export default Player
