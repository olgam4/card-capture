class Graveyard {
  _deadCards = []

  bury(cards) {
    this._deadCards = [...this._deadCards, ...cards]
  }

  calculateSize() {
    return this._deadCards.length
  }
}

export default Graveyard
