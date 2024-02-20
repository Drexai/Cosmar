import { useState } from 'react'
import './App.css'
import { HomeComponent } from './components/homeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponent/>
    </>
  )
}

export default App
