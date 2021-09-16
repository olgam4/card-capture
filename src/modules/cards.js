class Cards {
  static areHigherValueThan(cards, otherCard) {
    let total = 0
    cards.forEach(card => {
      total += card._value.value
    })
    return total >= otherCard._value.value
  }

  static areTheSameSuitAs(cards, otherCard) {
    for(let k = 0; k < cards.length; k++) {
      if (cards[k].isTheSameSuitAs(otherCard) === false) return false
    }
    return true
  }
}

export default Cards
