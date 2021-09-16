class Value {
  static None = new Value(0)
  static Ace = new Value(14)
  static Two = new Value(2)
  static Three = new Value(3)
  static Four = new Value(4)
  static Five = new Value(5)
  static Six = new Value(6)
  static Seven = new Value(7)
  static Eight = new Value(8)
  static Nine = new Value(9)
  static Ten = new Value(10)
  static Jack = new Value(11)
  static Queen = new Value(12)
  static King = new Value(13)

  constructor(value) {
    this.value = value
  }

  toString() {
    return `${this.value}`
  }
}

export default Value
