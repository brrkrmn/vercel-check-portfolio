import './App.css'
import { Header } from './components/Header'
import React from 'react'
import { Profile } from './components/Profile'
import { Introduce } from './components/Introduce'
import { Skills } from './components/Skills'
import { DarkModeToggle } from './components/DarkModeToggle'

function App() {

  return (
    <>
      <DarkModeToggle />
      <Header />
      <Introduce />
      <Skills />
      <Profile />
    </>
  )
}

export default App
