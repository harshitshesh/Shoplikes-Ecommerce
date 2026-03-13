import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const GlobalBackButton = () => {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(false)
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  if (isHome) return null

  return (
    <Link
      to="/"
      style={{ zIndex: 1000000, position: 'fixed' }}
      className={`left-6 flex items-center justify-center transition-all duration-500 ease-in-out group text-black bg-white/95 backdrop-blur-md border border-neutral-200 hover:bg-black hover:text-white font-[fontnormal] shadow-xl overflow-hidden
        ${scrolled 
          ? 'top-6 w-14 h-14 rounded-full p-0 border-[#c0e067]/40 shadow-2xl' 
          : 'top-[120px] md:top-[150px] px-6 py-3 rounded-2xl w-fit'}`}
    >
      <span className={`text-2xl transition-transform duration-300 ${scrolled ? '' : 'mr-2'}`}>←</span>
      {!scrolled && <span className='whitespace-nowrap opacity-100 transition-opacity duration-300'>Back Home</span>}
    </Link>
  )
}

export default GlobalBackButton
