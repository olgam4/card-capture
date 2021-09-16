import Card from './card.js'

class Cards {
  static areHigherValueThan(cards, otherCard) {
    let total = 0
    const cardsWithoutJokers = Cards._replaceJokers(cards)
    cardsWithoutJokers.forEach(card => {
      total += card._value.value
    })
    return total >= otherCard._value.value
  }

  static areTheSameSuitAs(cards, otherCard) {
    for(let k = 0; k < cards.length; k++) {
      if (Cards._isNotTheSameSuitAsTheOtherCardButNotAJoker(cards[k], otherCard)) return false
    }
    return true
  }

  static _isNotTheSameSuitAsTheOtherCardButNotAJoker(card, otherCard) {
    if(card.isTheSameSuitAs(Card.Joker)) return false
    return !card.isTheSameSuitAs(otherCard)
  }


  static _replaceJokers(cards) {
    let cardsWithoutJokers = [...cards]

    const firstJokerIndex = cardsWithoutJokers.findIndex(card => {
      return card.isTheSameAs(Card.JokerA)
    })
    if(firstJokerIndex >= 0) {
      cardsWithoutJokers.splice(firstJokerIndex, 1)
      const bestCard = Cards.findHighestValue(cardsWithoutJokers)
      cardsWithoutJokers = [...cardsWithoutJokers, bestCard]
    }

    const secondJokerIndex = cardsWithoutJokers.findIndex(card => {
      return card.isTheSameAs(Card.JokerB)
    })
    if(secondJokerIndex >= 0) {
      cardsWithoutJokers.splice(secondJokerIndex, 1)
      const bestCard = Cards.findHighestValue(cardsWithoutJokers)
      cardsWithoutJokers = [...cardsWithoutJokers, bestCard]
    }

    return cardsWithoutJokers
  }

  static findHighestValue(cards) {
    let currentBest = undefined
    for(let m = 0; m < cards.length; m++) {
      if(m === 0) currentBest = cards[0]
      else {
        const card = cards[m]
        if(card.isHigherThanOrEqualTo(currentBest)) currentBest = card
      }
    }
    return currentBest
  }
}

export default Cards
