import React from 'react'
import Footer from '../components/comon/Footer'

const Contact = () => {
  return (
    <div className='bg-white min-h-screen pt-40 md:pt-48'>
      <div className='px-6 md:px-20 max-w-7xl mx-auto'>
        <h1 className='font-[fonthero]  text-[15vw] md:text-[10vw] uppercase leading-none mb-12 flex flex-col'>
          <span>Let's</span>
          <span className='ml-[15vw] md:ml-[10vw]'>Connect`</span>
        </h1>

        <div className='flex flex-col md:flex-row gap-20 py-20 border-t border-neutral-100'>
          {/* Contact Methods */}
          <div className='flex-1 space-y-12'>
            <div>
              <h3 className='text-sm uppercase tracking-widest text-neutral-400 mb-4'>Email Us</h3>
              <a href="mailto:hello@shoplikes.com" className='text-2xl md:text-5xl font-[fontnormal] hover:text-[#c0e067] transition-colors'>
                hello@shoplikes.com
              </a>
            </div>

            <div>
              <h3 className='text-sm uppercase tracking-widest text-neutral-400 mb-4'>Visit Us</h3>
              <p className='text-xl md:text-3xl font-[fontnormal] leading-relaxed'>
                123 Design Street, <br />
                Fashion District, <br />
                Mumbai, India
              </p>
            </div>
          </div>

          {/* Socials & Large Text */}
          <div className='flex-1 flex flex-col justify-between'>
            <div className='space-y-6'>
              <h3 className='text-sm uppercase tracking-widest text-neutral-400'>Follow the Story</h3>
              <div className='flex flex-col gap-2 text-xl md:text-3xl font-[fontnormal]'>
                <a href="#" className='hover:pl-4 transition-all hover:text-[#c0e067]'>Instagram</a>
                <a href="#" className='hover:pl-4 transition-all hover:text-[#c0e067]'>Twitter</a>
                <a href="#" className='hover:pl-4 transition-all hover:text-[#c0e067]'>LinkedIn</a>
              </div>
            </div>

            <p className='mt-20 text-neutral-400 italic text-lg'>
              "Quality is not an act, it is a habit."
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact
