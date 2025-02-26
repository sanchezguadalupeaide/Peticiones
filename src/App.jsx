import { useState } from 'react'
import './App.css'
import { Peticiones } from './Componentes/Peticiones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Peticiones />
    </>
  )
}

export default App
