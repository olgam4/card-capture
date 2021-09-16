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

  isFull() {
    if(this.first === undefined) return false
    if(this.second === undefined) return false
    if(this.third === undefined) return false
    if(this.fourth === undefined) return false
    return true
  }

  advance(card) {
    if(this.isFull()) return
    if(this.fourth === undefined && this.third !== undefined) {
      this.placeFourth(this.third.copy())
      this.removeAt('third')
    }
    if(this.third === undefined && this.second !== undefined) {
      this.placeThird(this.second.copy())
      this.removeAt('second')
    }
    if(this.second === undefined && this.first !== undefined) {
      this.placeSecond(this.first.copy())
      this.removeAt('first')
    }
    if(this.first === undefined) {
      this.placeFirst(card)
    }
  }
}

export default Courtyard
