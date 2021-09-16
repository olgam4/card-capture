import Player from "../player.js"
import Deck from "../deck.js"

describe("Player", () => {
  let cut
  let deck

  beforeEach(() => {
    cut = new Player()
  })

  describe("when they draw a card", () => {
    it("adds the card to their hand", () => {
      const initialHandSize = cut.calculateHandSize()

      cut.draw()

      const finalHandSize = initialHandSize + 1
      expect(cut.calculateHandSize()).toBe(finalHandSize)
    })
  })
})
