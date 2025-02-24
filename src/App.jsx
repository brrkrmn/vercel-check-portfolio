import './App.css'
import { Header } from './components/Header'
import React from 'react'
import { Profile } from './components/Profile'
import { Introduce } from './components/Introduce'

function App() {

  return (
    <>
      <Header />
      <Introduce />
      <Profile />
    </>
  )
}

export default App
