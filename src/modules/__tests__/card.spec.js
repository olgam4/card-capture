import Card from '../card.js'
import Suit from '../suit.js'
import Value from '../value.js'

const SOME_SUIT = Suit.Hearts
const SOME_OTHER_SUIT = Suit.Clubs

const SOME_VALUE = Value.Five
const SOME_SMALLER_VALUE = Value.Two
const SOME_HIGHER_VALUE = Value.Seven

const SOME_DISPLAY = '5 of Hearts'

describe('Card', () => {
  let cut

  beforeEach(() => {
    cut = new Card(SOME_SUIT, SOME_VALUE)
  })

  describe('on display', () => {
    it('should show its representation', () => {
      const cardDisplay = cut.display()

      expect(cardDisplay).toEqual(SOME_DISPLAY)
    })
  })

  describe('when creating', () => {
    describe('from display', () => {
      it('should execute correctly', () => {
        const someCard = new Card(Suit.Hearts, Value.Jack)
        const someCardDisplay = someCard.display()

        const newCard = Card.fromDisplay(someCardDisplay)

        expect(newCard).toEqual(someCard)
      })
    })
  })

  describe('when comparing', () => {
    describe('for entity', () => {
      describe('if it is the same', () => {
        it('should say it is', () => {
          const someCard = new Card(SOME_SUIT, SOME_VALUE)

          const comparaison = cut.isTheSameAs(someCard)

          expect(comparaison).toBeTruthy()
        })
      })

      describe('if it is not the same', () => {
        it('should not say it is', () => {
          const someOtherCard = new Card(SOME_OTHER_SUIT, SOME_SMALLER_VALUE)

          const comparaison = cut.isTheSameAs(someOtherCard)

          expect(comparaison).toBeFalsy()
        })
      })
    })
    describe('for same suit', () => {
      it('should say it is when it is', () => {
        const someCardWithSameSuit = new Card(SOME_SUIT, SOME_SMALLER_VALUE)

        const comparaison = cut.isTheSameSuitAs(someCardWithSameSuit)

        expect(comparaison).toBeTruthy()
      })

      it('should say it is not when it is not', () => {
        const someCardWithAnotherSuit = new Card(SOME_OTHER_SUIT, SOME_VALUE)

        const comparaison = cut.isTheSameSuitAs(someCardWithAnotherSuit)

        expect(comparaison).toBeFalsy()
      })
    })

    describe('for higher value', () => {
      it('should say it is when it is higher', () => {
        const someCardWithLesserValue = new Card(SOME_SUIT, SOME_SMALLER_VALUE)

        const comparaison = cut.isHigherThanOrEqualTo(someCardWithLesserValue)

        expect(comparaison).toBeTruthy()
      })

      it('should say it is not when it is not higher', () => {
        const someCardWithHigherValue = new Card(SOME_SUIT, SOME_HIGHER_VALUE)

        const comparaison = cut.isHigherThanOrEqualTo(someCardWithHigherValue)

        expect(comparaison).toBeFalsy()
      })

      it('should say it is equal when it is', () => {
        const someCardWithSameValue = new Card(SOME_SUIT, SOME_VALUE)

        const comparaison = cut.isHigherThanOrEqualTo(someCardWithSameValue)

        expect(comparaison).toBeTruthy()
      })
    })
  })
})
