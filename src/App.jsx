import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import AboutMe from './components/secciones/AboutMe'
import Home from './components/secciones/Home'
import Proyectos from './components/secciones/Proyectos'
import Skills from './components/secciones/Skills'

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Proyectos />
    </div>
  )
}

export default App