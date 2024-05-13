import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Indic from './components/Indic'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <Indic />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>


    </div>
  )
}

export default App
