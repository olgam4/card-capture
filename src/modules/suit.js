class Suit {
  static Diamonds = new Suit('Diamonds')
  static Hearts = new Suit('Hearts')
  static Spades = new Suit('Spades')
  static Clubs = new Suit('Clubs')
  static Joker = new Suit('Joker')

  constructor(name) {
    this.name = name
  }

  toString() {
    return `${this.name}`
  }
}

export default Suit
