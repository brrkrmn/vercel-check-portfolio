import './App.css'
import { Header } from './components/Header'
import React from 'react'
import { Profile } from './components/Profile'
import { Introduce } from './components/Introduce'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {

  return (
    <>
      <LanguageProvider>
        <Header />
        <Introduce />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
