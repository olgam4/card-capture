import Game from '../game.js'
import Player from '../player.js'
import Deck from '../deck.js'
jest.mock('../player.js')
jest.mock('../deck.js')

const clearMocks = () => {
  Player.mockClear()
  Deck.mockClear()
}

describe('Game', () => {
  let cut
  let playerMock

  beforeEach(() => {
    clearMocks()

    cut = new Game()
    playerMock = Player.mock.instances[0]
  })

  describe('when making player draw from deck', () => {
    it('should make the player draw from the deck', () => {
      cut.letPlayerDrawFromDeck()

      expect(playerMock.draw).toHaveBeenCalledWith(expect.any(Number))
    })
  })

  describe('when making the player attack', () => {
    describe('and the attack is succesful', () => {})

    describe('and the attack is not succesful', () => {})
  })
})
