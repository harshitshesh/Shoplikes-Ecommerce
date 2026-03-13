
import React, { useRef } from "react"
import {  Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/navigation/Navbar"
import Fullscreennav from "./components/navigation/Fullscreennav"
import GlobalBackButton from "./components/navigation/GlobalBackButton"

function App() {
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
    </div>
  )
}

export default App
