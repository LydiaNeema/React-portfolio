import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Contacts from './components/Contacts'
import Projects from './components/Projects'



function App() {
  

  return (
    <>
    <div className="dark bg-black text-white">
      <NavBar/>
      <main className="pt-20">
        <Hero/>
        <About/>
        <Contacts/>
        <Projects/>
      </main>
      </div>
    </>
  )
}

export default App
