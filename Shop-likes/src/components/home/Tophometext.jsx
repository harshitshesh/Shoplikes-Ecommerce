import React from 'react'
import Video from './Video'

const Tophometext = () => {
  return (
    <div className='font-[fonthero] text-white pt-24 md:pt-14 text-center px-4'>
      <div className='text-[14vw] md:text-[8vw] uppercase leading-none md:leading-[6vw] flex justify-center items-center'>
        Comfort` Wear
      </div>
      <div className='text-[14vw] md:text-[8vw] uppercase leading-none md:leading-[6vw] flex justify-center items-center flex-wrap'>
        `Meet`s 
        <div className='h-[12vw] md:h-[7vw] w-[20vw] md:w-auto rounded-full overflow-hidden mx-4 my-2 md:mt-3'>
          <video className='h-full w-full object-cover' playsInline autoPlay loop muted src='/video/herovid.mp4' />
        </div>
        Design
      </div>
      
      <div className='text-[14vw] md:text-[8vw] uppercase leading-none md:leading-[6vw] flex justify-center items-center mt-4 md:mt-0'>
        More Style`s
      </div>
    </div>
  )
}

export default Tophometext
