import React from 'react'
import Video from '../components/home/Video'
import Tophometext from '../components/home/Tophometext'
import Bottomhometext from '../components/home/Bottomhometext'
import RealTimeClock from '../components/home/RealTimeClock'

const Home = () => {
  return (
    <div className='h-screen w-full relative overflow-hidden'>
      {/* Background Video */}
      <Video />

      {/* Main Content Overlay */}
      <div className='h-full w-full relative flex flex-col justify-between py-10 px-6 md:px-12 z-10'>
        <Tophometext />

        {/* Dynamic Info Section */}
        <div className='flex justify-end items-end w-full m-6 px-4'>
          {/* Right: Info Paragraph */}
          <div className='max-w-md text-white/80  font-[fontnormal] text-right'>
            <p className='text-[22px] font-bold md:text-sm leading-relaxed uppercase tracking-widest'>
              Shop Likes ` defines a new era of curated fashion. We blend timeless silhouettes with modern intention, creating a seamless transition between comfort and high-end design for the rhythm of daily life.
            </p>
          </div>
        </div>

        <div className='flex justify-between items-end w-full'>
          <div className='hidden md:block scale-75 origin-left'>
            <RealTimeClock />
          </div>
          <Bottomhometext />
        </div>
      </div>
    </div>
  )
}

export default Home
