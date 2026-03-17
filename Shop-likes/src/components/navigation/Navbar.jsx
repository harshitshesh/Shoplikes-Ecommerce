import React, { useContext, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbarcontext } from '../../context/Navcontext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const { navopen, setnavopen } = useContext(Navbarcontext)
  const location = useLocation()
  const isHome = location.pathname === "/"
  return (
    <>
      <div className='absolute flex top-0 w-full items-start justify-between z-[150] p-6 pointer-events-none'>
        {/* Left side: Logo only */}
        <div className='flex flex-col gap-8 pointer-events-auto'>
          <Link to="/">
            <img
              className="h-20 md:h-32 w-auto object-contain p-0"
              src="../img/shoplikelogo.png"
              alt="Website Logo Shop likes"
            />
          </Link>
        </div>

        {/* Right side: Fixed Menu Button */}
        <div className='fixed right-6 top-6 pointer-events-auto'>
          <div
            onClick={() => setnavopen(true)}
            className='group bg-black h-16 w-16 md:h-20 md:w-56 relative rounded-2xl md:rounded-l-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500'
          >
            <div className='absolute inset-0 bg-[#c0e067] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out'></div>

            <div className='relative h-full px-4 md:px-12 flex flex-col justify-center items-center md:items-end gap-1.5'>
              <div className='w-8 md:w-18 h-1 bg-white group-hover:bg-black transition-colors'></div>
              <div className='w-5 md:w-10 h-1 bg-white group-hover:bg-black transition-colors'></div>
              <span className='hidden md:block text-white group-hover:text-black font-bold uppercase mt-1 tracking-widest text-xs transition-colors'>Menu</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
