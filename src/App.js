import React from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Game from './components/game.js'

function App() {
  return (
    <div>
      <Game />
      <ToastContainer />
    </div>
  );
}

export default App
