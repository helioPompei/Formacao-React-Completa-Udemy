// CSS 
import './App.css'
// CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// IMPORT PAGES
import Home from './pages/Home'
import About from './pages/About'
// COMPONENTS 
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">

    <h1> React Router !</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
