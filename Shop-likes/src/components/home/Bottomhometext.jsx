import React from 'react'
import { Link } from 'react-router-dom'

const Bottomhometext = () => {
  return (
    <div className='font-[fontnormal] flex items-center justify-center gap-4 text-white mb-6 md:mb-8'>
      <Link to="/products" className='text-[6vw] md:text-[3vw] border-2 md:border-4 hover:border-[#c0e067] hover:text-[#c0e067] leading-none border-white rounded-full px-8 py-3 md:px-12 md:py-4 uppercase transition-all'>
        Products
      </Link>
      <Link to="/about" className='text-[6vw] md:text-[3vw] border-2 md:border-4 hover:border-[#c0e067] hover:text-[#c0e067] leading-none border-white rounded-full px-8 py-3 md:px-12 md:py-4 uppercase transition-all'>
        About
      </Link>
    </div>
  )
}

export default Bottomhometext
