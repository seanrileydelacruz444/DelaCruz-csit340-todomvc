import { useState } from 'react'
import Todo from './components/Todo'
import Info from './components/Info'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
        <Todo />
        <Info name="Sean Riley T. Dela Cruz" />
      </div>
    </>
  )
}

export default App
