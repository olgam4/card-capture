import Deck from '../deck.js'
import Card from '../card.js'

const NORMAL_DECK_SIZE = 54

describe("Deck", () => {
  let cut

  beforeEach(() => {
    cut = new Deck()
  })

  describe("on instantiation", () => {
    it("contains 54 cards", () => {
      const deckSize = cut.calculateCurrentSize()

      expect(deckSize).toBe(NORMAL_DECK_SIZE)
    })
  })

  describe("when drawing", () => {
    it("should hand you some random card", () => {
      const someCard = cut.draw()

      expect(someCard).toEqual(expect.any(Card))
    })
  })

  describe("when peeking", () => {
    it("should peek the right amount of cards", () => {
      const content = cut.peek(1)

      expect(content).toContain(' of ')
    })
  })
})
