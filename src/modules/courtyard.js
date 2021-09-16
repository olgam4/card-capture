class Courtyard {
  first
  second
  third
  fourth

  display() {
    return {
      first: this.first,
      second: this.second,
      third: this.third,
      fourth: this.fourth
    }
  }

  removeAt(position) {
    this[position] = undefined
  }

  placeFirst(first) {
    this.first = first
  }

  placeSecond(second) {
    this.second = second
  }

  placeThird(third) {
    this.third = third
  }

  placeFourth(fourth) {
    this.fourth = fourth
  }
}

export default Courtyard
