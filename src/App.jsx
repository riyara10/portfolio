import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
         <Route path='*' element={<Pnf/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
