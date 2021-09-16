import Cards from '../cards.js'
import Card from '../card.js'
import Suit from '../suit.js'
import Value from '../value.js'

const CARDS_WITH_TWELVE_VALUE = [
  new Card(Suit.Hearts, Value.Two),
  new Card(Suit.Hearts, Value.Two),
  new Card(Suit.Hearts, Value.Two),
  new Card(Suit.Hearts, Value.Two),
  Card.Joker,
  Card.Joker
]

const CARDS_WITH_FOUR_VALUE = [
  new Card(Suit.Hearts, Value.Two),
  new Card(Suit.Hearts, Value.Two)
]

const CARD_WITH_JACK_VALUE = new Card(Suit.Clubs, Value.Jack)

const HEARTS = [
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Three)
]

const HEARTS_AND_CLUB = [
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Clubs, Value.Three),
  new Card(Suit.Hearts, Value.Three)
]

const HEART = new Card(Suit.Hearts, Value.Four)

const CARDS_WITH_BEST_VALUE_JACK_OF_DIAMONDS = [
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Hearts, Value.Five),
  new Card(Suit.Hearts, Value.Three),
  new Card(Suit.Diamonds, Value.Jack),
  new Card(Suit.Hearts, Value.Three)
]

describe('Cards', () => {
  describe('when finding highest valued card', () => {
    it('should find it', () => {
      const bestCard = Cards.findHighestValue(CARDS_WITH_BEST_VALUE_JACK_OF_DIAMONDS)

      const JackOfDiamonds = new Card(Suit.Diamonds, Value.Jack)
      expect(bestCard.isTheSameAs(JackOfDiamonds)).toBeTruthy()
    })
  })

  describe('when comparing', () => {
    describe('the suits', () => {
      describe('to find out if they are the same', () => {
        describe('when they are', () => {
          it('should say they are', () => {
            const comparaison = Cards.areTheSameSuitAs(HEARTS, HEART)

            expect(comparaison).toBeTruthy()
          })
        })

        describe('when they are not', () => {
          it('should not say they are', () => {
            const comparaison = Cards.areTheSameSuitAs(HEARTS_AND_CLUB, HEART)

            expect(comparaison).toBeFalsy()
          })
        })
      })
    })

    describe('the values', () => {
      describe('to find out if they are higher than another', () => {
        describe('when they are', () => {
          it('should say they are', () => {
            const comparaison = Cards.areHigherValueThan(CARDS_WITH_TWELVE_VALUE, CARD_WITH_JACK_VALUE)

            expect(comparaison).toBeTruthy()
          })
        })

        describe('when they are not', () => {
          it('should not say they are', () => {
            const comparaison = Cards.areHigherValueThan(CARDS_WITH_FOUR_VALUE, CARD_WITH_JACK_VALUE)

            expect(comparaison).toBeFalsy()
          })
        })
      })
    })
  })
})

