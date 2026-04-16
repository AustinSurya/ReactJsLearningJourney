import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name = "Austin";

  return (
    <>
      <h1>Hello {name} 👋</h1>
      <p>I started learning React using Vite</p>
      <p>This is Day 1 🚀</p>
    </>
  );
}

export default App;