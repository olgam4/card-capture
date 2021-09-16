import React, { useCallback, useState } from 'react'

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
  const [attacked, updateAttacked] = useState('first')
  const [{ choices }, updateChoices] = useState(initialChoicesState)

  const draw = useCallback(() => {
    state.game.letPlayerDrawFromDeck()
    updateState({ game : state.game })
  }, [state])

  const capture = useCallback(() => {
    try {
      state.game.letPlayerAttackWith(Array.from(choices.values()), attacked)
      updateState({ game : state.game })
    } catch(error) {
    }
  }, [attacked, choices, state])

  const displayHand = useCallback(() => {
    return state.game.displayPlayerHand()
  }, [state])

  const displayDiscard = useCallback(() => {
    return state.game.displayDiscard()
  }, [state])

  const displayCourtyard = useCallback(() => {
    return Object.values(state.game.displayCourtyard())
  }, [state])

  const places = ['first', 'second', 'third', 'fourth']

  const onAttackedChange = useCallback((e) => {
    updateAttacked(e.target.value)
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
        {displayHand().map((card, i) => {
          return (
            <div key={`h${i}`}>
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
        <div onChange={onAttackedChange}>
          {displayCourtyard().map((card, i) => {
            const checked = i === 0
            const cd = card === undefined ?
              (<div key={`c${i}`}v>none</div>) :
              (
                <div key={`c${i}`}>
                  <input
                    name='attacked'
                    value={places[i]}
                    type='radio'
                    defaultChecked={checked}
                  />{card.display()}
                </div>
              )
            return cd
           })}
        </div>
      </div>
      <div>
        <h2>Graveyard</h2>
      </div>
    </div>
  )
}

export default Game
