import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Temp from './Temp'
import Friend from './Friend'

function App() {
  function handelClick(){
    alert('le haluya')
  }
  const handelClick2 = () =>{
    alert('mar haba')
  }
  const handelClick4 = (number) =>{
    alert(number+4)
  }

  return (
    <>
      <Friend></Friend>
      <Temp></Temp>
      <h1>React</h1>
      <button onClick={handelClick}>1st</button>
      <button onClick={handelClick2}>second</button>
      <button onClick={ () => alert('le chokka')}>third</button>
      <button onClick={() => handelClick4(1) }>forth</button>
     
    </>
  )
}

export default App
