
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Seccion from './components/secciones/seccion'
import Seccion1 from './components/secciones/Seccion1'

function App() {
  return (
    <body class="pt-20">
      <Navbar />
      <Seccion1 />
      <Seccion />
    </body>
  )

}

export default App
