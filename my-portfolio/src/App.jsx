import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hogwarts from './pages/Hogwarts'
import Houses from './pages/Houses'
import Experience from './pages/Experience'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='md:max-w-full font-Merriweather font-bold bg-[#F1E9D2]'>
      <Hogwarts/>
      <Houses/>
      <Experience />
      </div>
      
    </>
  )
}

export default App
