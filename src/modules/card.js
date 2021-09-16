import Suit from './suit.js'
import Value from './value.js'

class Card {
  _suit
  _value

  static Joker = new Card(Suit.Joker, Value.None)

  constructor(suit, value) {
    this._suit = suit
    this._value = value
  }

  static createCards(suit) {
    return [
      new Card(suit, Value.Ace),
      new Card(suit, Value.Two),
      new Card(suit, Value.Three),
      new Card(suit, Value.Four),
      new Card(suit, Value.Five),
      new Card(suit, Value.Six),
      new Card(suit, Value.Seven),
      new Card(suit, Value.Eight),
      new Card(suit, Value.Nine),
      new Card(suit, Value.Ten),
      new Card(suit, Value.Jack),
      new Card(suit, Value.Queen),
      new Card(suit, Value.King),
    ]
  }

  static fromDisplay(displayString) {
    const elements = displayString.split(' ')
    const value = new Value(parseInt(elements[0]))
    const suit = new Suit(elements[2])

    return new Card(suit, value)
  }

  display() {
    return `${this._value.toString()} of ${this._suit.toString()}`
  }

  isHigherThanOrEqualTo(otherCard) {
    return this._value.value >= otherCard._value.value
  }

  isTheSameValueAs(otherCard) {
    return this._value.value === otherCard._value.value
  }

  isTheSameSuitAs(otherCard) {
    return this._suit.name === otherCard._suit.name
  }

  isTheSameAs(otherCard) {
    return this.isTheSameSuitAs(otherCard) && this.isTheSameValueAs(otherCard)
  }
}

export default Card
