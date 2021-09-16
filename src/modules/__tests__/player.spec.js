import Player from "../player.js"
import Deck from "../deck.js"

describe("Player", () => {
  let cut
  let deck

  beforeEach(() => {
    cut = new Player()
    deck = new Deck()
  })

  describe("when they draw a card", () => {
    it("adds the card to their hand", () => {
      const initialHandSize = cut.calculateHandSize()

      cut.drawFrom(deck)

      const finalHandSize = initialHandSize + 1
      expect(cut.calculateHandSize()).toBe(finalHandSize)
    })
  })
})
