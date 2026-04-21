import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    
  let score = 0;
  let wickets = 0;
  let ballwiseresult =[];
  let hit =0;

  function addscore(num) {
   hit =num;
  
   ballwiseresult.push(num);
  }
  
   function addwicket() {

    hit = "W";
  if(wickets<10){
    
    ballwiseresult.push("W");
  }

  }

  function handlesubmit(event){
    event.preventDefault();

  }

  function addballwise(){

          <div>{ballwiseresult.map((ball, index)=>(
         <>
         {index % 6 === 0?<br/>:null}
        <span key ={index}>{ball === 0?<strong>.</strong>:ball}</span>&nbsp;&nbsp;&nbsp;
        </>))}
        </div>
  }
 
  function form(){
    <form>
      <input value={hit}/>
      <input  />
      <button onSubmit={handlesubmit}>SUBMIT</button>
    </form>
  } 
  function table(){
    <table></table>
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
        <button onClick={addwicket} >wicket</button>
      </div>
      g

    </>
  )
}

export default App
