
import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState (0)

  const changeNumber = () => {
      setNum (num+1)
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={changeNumber}>change following number</button>
    </>
  )
}

export default App
