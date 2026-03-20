import React, { useRef, useContext, useEffect } from "react"
import {  Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/navigation/Navbar"
import Fullscreennav from "./components/navigation/Fullscreennav"
import GlobalBackButton from "./components/navigation/GlobalBackButton"
import { Navbarcontext } from "./context/Navcontext"
import LoginModal from "./components/comon/LoginModal"

function App() {
  const { 
    navopen, 
    isAnyModalOpen, 
    isLoginModalOpen, 
    setIsLoginModalOpen, 
    isLoginClosable 
  } = useContext(Navbarcontext)

  useEffect(() => {
    if (navopen || isAnyModalOpen || isLoginModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [navopen, isAnyModalOpen, isLoginModalOpen])

  return (
    <div className="bg-white min-h-screen">
      <GlobalBackButton />
      <Navbar />
      <Fullscreennav />
      
      <div className="pt-0"> {/* Unified container for all pages */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>

      {/* Global Login Modal - Always at the top of the render tree */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        isClosable={isLoginClosable}
      />
    </div>
  )
}

export default App
