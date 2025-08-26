import { useState } from 'react'
import Hero from './Components/Hero.tsx'
import Info from './Components/Info.tsx'
import Projects from './Components/Projects.tsx'
import './index.css'
import Contact from "./Components/Contact.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Hero />
        <Info />
        <Projects />
        <Contact />
    </>
  )
}

export default App
