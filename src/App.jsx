import './App.css'
import NavBar from './assets/Component/NavBar'
import About from './assets/pages/About'
import Home from './assets/pages/Home'
import Contact from './assets/pages/Contact'
import { Routes ,Route } from 'react-router-dom'


function App() {
  
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
