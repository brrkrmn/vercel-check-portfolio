import './App.css'
import { Header } from './components/Header'
import React from 'react'
import { Profile } from './components/Profile'
import { Introduce } from './components/Introduce'
import { Skills } from './components/Skills'

function App() {

  return (
    <>
      <Header />
      <Introduce />
      <Skills />
      <Profile />
    </>
  )
}

export default App
