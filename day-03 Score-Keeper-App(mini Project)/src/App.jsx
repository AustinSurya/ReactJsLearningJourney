import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    
  let score = 0;
  let wickets = 0;

  function addscore(num) {
   score += num;
  }
  
   function addwicket() {

  if(wickets<10){
    wickets +=1;
  }
  
  }

  return (
    <>
      <h1>Score-Keeper-App</h1>
      <h2>Score : {score}/{wickets}</h2>

      <div>
         <button onClick={(num) => addscore(1)} >1</button>
        <button onClick={(num) => addscore(2)} >2</button>
        <button onClick={(num) => addscore(3)} >3</button>
        <button onClick={(num) => addscore(4)} >4</button>
        <button onClick={(num) => addscore(5)} >5</button>
        <button onClick={(num) => addscore(6)} >6</button>
        <button onClick={(num) => addscore(wicket)} >wicket</button>
      </div>
      

    </>
  )
}

export default App
