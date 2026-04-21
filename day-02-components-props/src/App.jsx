import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const name = "Austin";
  let demo = true;

  const users = [
  { name: "Austin", age: 20 },
  { name: "Jane", age: 15 },
  { name: "JohnTerry", age: 20 },
  { name: "Vopshi", age: 15 }
];

  function sum( a , b){
    let add = a+b;
    return add;
  }

  const arr = [1,2,3,4]
 
  return (
    <>
      

      <table>
        <thead>
        <tr>
           <th>Name</th>
           <th>Age</th>
        </tr>
        </thead>
        <tbody>
          {users.map((Details)=>(
            <tr>
              <td>{Details.name}</td>
              <td>{Details.age}</td>
            </tr> 
            
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
