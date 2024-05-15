import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Indic from './components/Indic'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'


function App() {

  const lesRoutes = [
    {path: "/", element: Home},
    {path: "/about", element: About},
  ]

  return (
    <div className='h-screen bg-zinc-50'>
      <Indic />
      <NavBar />
      <Routes>
        {lesRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element/>} />
        ))}
      </Routes>


    </div>
  )
}

export default App
