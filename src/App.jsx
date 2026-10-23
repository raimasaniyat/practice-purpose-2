
import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const [num, setNum] = useState (0)
  const changeNumber = () => {
      setNum (num+1)
  }

  const [minus, setMinus] = useState (0)
  const descendingOrder =() => {
      setMinus (minus-1)
  }
  return (
    <>
      <div className='horizontal'>
        <h1>Positive{num}</h1>
        <button onClick={changeNumber}>add following number</button>
        <Home minus={minus}></Home>
        <button onClick={descendingOrder}>minus following number</button>
      </div>
    </>
  )
}

export default App
