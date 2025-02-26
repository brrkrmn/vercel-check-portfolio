import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Introduce } from './components/Introduce'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
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
