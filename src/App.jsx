
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import AboutMe from './components/secciones/AboutMe'
import Home from './components/secciones/Home'
import Skills from './components/secciones/Skills'

function App() {
  return (
    <body class="pt-20">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills/>
    </body>
  )

}

export default App
