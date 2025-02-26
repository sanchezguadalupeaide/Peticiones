import { useState } from 'react'
import './App.css'
import { Peticiones } from './Componentes/Peticiones'
import { Condicion } from './Componentes/Condicion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Condicion edad={18}/>
    </>
  )
}

export default App
