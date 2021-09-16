import Suit from './suit.js'
import Value from './value.js'
import Card from './card.js'

class Deck {
  _cards = []

  static CardCaptureDungeon = this._setupCardCaptureDungeon()
  static CardCaptureDeck = this._setupCardCaptureDeck()

  constructor(cards = null) {
    if(cards === null) {
      const hearts = Card.createCards(Suit.Hearts)
      const spades = Card.createCards(Suit.Spades)
      const clubs = Card.createCards(Suit.Clubs)
      const diamonds = Card.createCards(Suit.Diamonds)
      const jokers = [Card.Joker, Card.Joker]

      this._cards = [
        ...hearts,
        ...spades,
        ...clubs,
        ...diamonds,
        ...jokers
      ]

      this.shuffle()
    }
    else {
      this._cards = [...cards]
    }
  }

  shuffle() {
    for (let i = this._cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
    }
  }

  calculateCurrentSize() {
    return this._cards.length
  }

  draw() {
    return this._cards.pop()
  }

  peek(amount) {
    return this._cards[0].display()
  }

  putAtTheBottom(card) {
    this._cards.unshift(card)
  }

  static _setupCardCaptureDungeon() {
    const cards = []
    const suits = [Suit.Hearts, Suit.Diamonds, Suit.Spades, Suit.Clubs]
    suits.forEach(suit => {
      cards.push(new Card(suit, Value.Five))
      cards.push(new Card(suit, Value.Six))
      cards.push(new Card(suit, Value.Seven))
      cards.push(new Card(suit, Value.Eight))
      cards.push(new Card(suit, Value.Nine))
      cards.push(new Card(suit, Value.Ten))
      cards.push(new Card(suit, Value.Jack))
      cards.push(new Card(suit, Value.Queen))
      cards.push(new Card(suit, Value.King))
      cards.push(new Card(suit, Value.Ace))
    })
    return new Deck(cards)
  }

  static _setupCardCaptureDeck() {
    const cards = []
    const suits = [Suit.Hearts, Suit.Diamonds, Suit.Spades, Suit.Clubs]
    suits.forEach(suit => {
      cards.push(new Card(suit, Value.Two))
      cards.push(new Card(suit, Value.Three))
      cards.push(new Card(suit, Value.Four))
    })
    cards.push(Card.JokerA)
    cards.push(Card.JokerB)
    const cardCaptureDeck = new Deck(cards)
    cardCaptureDeck.shuffle()
    return cardCaptureDeck
  }
}

export default Deck
