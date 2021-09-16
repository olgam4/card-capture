import React, { useCallback, useState } from 'react'

 import { toast } from 'react-toastify'

import './game.css'

import GameModule from '../modules/game.js'

const initialGameState = {
  game: GameModule.CardCapture
}

const initialChoicesState = {
  choices: new Set()
}

const Game = () => {
  const [state, updateState] = useState(initialGameState)
  const [captured, updateCaptured] = useState()
  const [{ choices }, updateChoices] = useState(initialChoicesState)

  const draw = useCallback(() => {
    state.game.letPlayerDrawFromDeck()
    updateState({ game: state.game })
  }, [state])

  const fill = useCallback(() => {
    state.game.fillPlayersHand()
    updateState({ game: state.game })
  }, [state])

  const discard = useCallback(() => {
    state.game.letPlayerDiscard(Array.from(choices.values()))
    updateState({ game: state.game })
    updateChoices({ choices: new Set() })
  }, [choices, state])

  const suffer = useCallback(() => {
    try {
      state.game.letPlayerSuffer(Array.from(choices.values()))
      updateChoices({ choices: new Set() })
    } catch(error) {
      toast.warn(error.message)
    }
    updateState({ game: state.game })
  }, [choices, state])

  const capture = useCallback(() => {
    try {
      state.game.letPlayerAttackWith(Array.from(choices.values()), captured)
      updateChoices({ choices: new Set() })
    } catch(error) {
      toast.warn('You can\'t capture this one...')
    }
    updateState({ game : state.game })
  }, [captured, choices, state])

  const sacrifice = useCallback(() => {
    try {
      state.game.letPlayerSacrifice(Array.from(choices.values()), captured)
      updateChoices({ choices: new Set() })
    } catch(error) {
      toast.warn(error.message)
    }
    updateState({ game : state.game })
  }, [captured, choices, state])

  const advance = useCallback(() => {
    state.game.advanceDungeon()
    updateState({ game : state.game })
  }, [state])

  const displayDeckSize = useCallback(() => {
    return state.game.displayDeckSize()
  }, [state])

  const displayHand = useCallback(() => {
    return state.game.displayPlayerHand()
  }, [state])

  const displayDiscard = useCallback(() => {
    return state.game.displayDiscard()
  }, [state])

  const displayCourtyard = useCallback(() => {
    return Object.values(state.game.displayCourtyard())
  }, [state])

  const displayGraveyard = useCallback(() => {
    return state.game.displayGraveyard()
  }, [state])

  const places = ['first', 'second', 'third', 'fourth']

  const onCapturedChanged = useCallback((e) => {
    updateCaptured(e.target.value)
  }, [])

  const onChoiceChange = useCallback((e) => {
    const cardDisplayValue = e.target.value
    const isChecked = e.target.checked
    
    if(isChecked) choices.add(cardDisplayValue)
    else choices.delete(cardDisplayValue)

    updateChoices({ choices })
  }, [choices])

  return (
    <div className='game'>
      <div>
        <h2>Hand</h2>
        <button onClick={draw}>
          Draw
        </button>
        <button onClick={fill}>
          Fill
        </button>
        <button onClick={discard}>
          Discard
        </button>
        <p>Deck: {displayDeckSize()}</p>
        {displayHand().map((card, i) => {
          const key = `h-${card.display()}-${i}`
          return (
            <div key={key}>
              <input 
                onChange={onChoiceChange}
                value={card.display()}
                type='checkbox'
              />{card.display()}
            </div>
          )
        })}
      </div>
      <div>
        <h2>Discard</h2>
        {displayDiscard().map((card, i) => {
          return (
            <div key={`d${i}`}>
              {card.display()}
            </div>
          )
        })}
      </div>
      <div>
        <h2>Courtyard</h2>
        <button onClick={capture}>
          Capture
        </button>
        <button onClick={advance}>
          Advance
        </button>
        <button onClick={sacrifice}>
          Sacrifice
        </button>
        <button onClick={suffer}>
          Suffer
        </button>
        <div onChange={onCapturedChanged}>
          {displayCourtyard().map((card, i) => {
            const key = card === undefined ?
              `c-undefined-${i}` :
              `c-${card.display()}-${i}`
            const cd = card === undefined ?
              (<div key={key}v>none</div>) :
              (
                <div key={key}>
                  <input
                    name='captured'
                    value={places[i]}
                    type='radio'
                  />{card.display()}
                </div>
              )
            return cd
           })}
        </div>
      </div>
      <div>
        <h2>Graveyard</h2>
        <p>{displayGraveyard()}</p>
      </div>
    </div>
  )
}

export default Game
