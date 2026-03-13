import React, { useState } from 'react'
import Productscard from '../components/products/Productscard'
import Footer from '../components/comon/Footer'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className='bg-white min-h-screen'>
      {/* Search & Header Section */}
      <div className='pt-40 md:pt-48 px-6 md:px-10 pb-10 border-b border-neutral-100 flex flex-col md:flex-row justify-between items-end gap-10'>
        <div>
          <h2 className='font-[fontnormal] text-[10vw] uppercase font-bold leading-none tracking-tighter'>
            Our <br /> Products
          </h2>
          <p className='text-xl md:text-2xl text-neutral-500 mt-6 max-w-xl'>
            Explore our curated selection of premium essentials, designed for the modern lifestyle.
          </p>
        </div>

        {/* Search Bar */}
        <div className='w-full md:w-[35vw] relative group'>
          <input 
            type="text" 
            placeholder="Search products (e.g. shirt, blazer)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-neutral-100 border-none rounded-full px-8 py-5 text-xl outline-none focus:ring-4 focus:ring-[#c0e067]/30 transition-all font-[fontnormal]'
          />
          <div className='absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity'>
            🔍
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className='px-4 md:px-10'>
        <Productscard searchQuery={searchQuery} />
      </div>

      <Footer />
    </div>
  )
}

export default Products
