import './App.css'
import { Header } from './components/Header'
import React from 'react'
import { Profile } from './components/Profile'
import { Introduce } from './components/Introduce'
import { Skills } from './components/Skills'
import { DarkModeToggle } from './components/DarkModeToggle'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <DarkModeToggle />
      <Header />
      <Introduce />
      <Skills />
      <Profile />
      <Projects />
    </>
  )
}

export default App
