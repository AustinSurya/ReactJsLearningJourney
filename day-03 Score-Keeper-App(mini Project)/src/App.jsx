import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    
  let score = 0;
  let wickets = 0;

  return (
    <>
      <h1>Score-Keeper-App</h1>
      <h2>Score : {score}/{wickets}</h2>

      <div>
         <button>1</button>
         <button>2</button>
         <button>3</button>
         <button>4</button>
         <button>5</button>
         <button>6</button>
         <button>WIcket</button>
      </div>
      

    </>
  )
}

export default App
