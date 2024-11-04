import { useState } from 'react'

import Game from './components/Game.jsx'
import './App.css';

function App() {


  return (
    <>
    <div className="main-heading" >
      <header>
        <h1 > Noughts and Crosses </h1>
      </header>
    </div>

      <div> 
        <Game />
      </div>
    </>
  )
}

export default App
