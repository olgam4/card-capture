import Card from './card.js'

class Graveyard {
  _deadCards = []

  bury(cards) {
    this._deadCards = [...this._deadCards, ...cards]
    this._deadCards.forEach(dead => {
      if(dead.isHigherThanOrEqualTo(Card.Jack)) throw new Error('You lose')
    })
  }

  calculateSize() {
    return this._deadCards.length
  }
}

export default Graveyard
