import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-neutral-900 text-white py-20 px-10 rounded-t-[4rem] mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
        {/* Brand Section */}
        <div className='md:col-span-2'>
          <h2 className='text-6xl font-[fonthero] mb-6'>Shop Likes`</h2>
          <p className='text-neutral-400 text-xl max-w-md leading-relaxed'>
            We create modern essentials for people who value style, comfort, and intention. Our goal is to deliver experiences that feel effortless.
          </p>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-4 text-xl'>
          <h3 className='text-neutral-500 uppercase text-sm tracking-widest mb-4'>Navigation</h3>
          <Link to="/" className='hover:text-[#c0e067] transition-colors'>Home</Link>
          <Link to="/products" className='hover:text-[#c0e067] transition-colors'>Products</Link>
          <Link to="/about" className='hover:text-[#c0e067] transition-colors'>About</Link>
        </div>

        {/* Socials */}
        <div className='flex flex-col gap-4 text-xl'>
          <h3 className='text-neutral-500 uppercase text-sm tracking-widest mb-4'>Social</h3>
          <a href="#" className='hover:text-[#c0e067] transition-colors'>Instagram</a>
          <a href="#" className='hover:text-[#c0e067] transition-colors'>Twitter</a>
          <a href="#" className='hover:text-[#c0e067] transition-colors'>LinkedIn</a>
        </div>
      </div>

      <div className='border-t border-neutral-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500'>
        <p>© 2026 Shop Likes. All rights reserved.</p>
        <div className='flex gap-10'>
          <a href="#" className='hover:text-white'>Privacy Policy</a>
          <a href="#" className='hover:text-white'>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
