import React from 'react'
import Video from '../components/home/Video'
import Tophometext from '../components/home/Tophometext'
import Bottomhometext from '../components/home/Bottomhometext'
import RealTimeClock from '../components/home/RealTimeClock'

const Home = () => {
  return (
    <div className='min-h-screen w-full relative overflow-x-hidden'>
      {/* Background Video - Fixed to stay in background during scroll */}
      <div className='fixed inset-0 z-0'>
        <Video />
      </div>
  <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {/* Main Content Overlay */}
      <div className='relative min-h-screen w-full flex flex-col justify-between py-12 px-6 md:px-12 z-10'>
        <Tophometext />

        {/* Dynamic Info Section */}
        <div className='w-full flex justify-center md:justify-end my-12 md:my-17'>
          <div className='max-w-[80%] md:max-w-md  text-white/80 font-[fontnormal] text-center md:text-right'>
            <p className='text-[10px] md:text-xs lg:text-sm leading-[7vw] md:leading-6 uppercase tracking-wider font-semibold opacity-90'>
              Shop Likes ` defines a new era of curated fashion. We blend timeless silhouettes with modern intention, creating a seamless transition between comfort and high-end design for the rhythm of daily life.
            </p>
          </div>
        </div>

        <div className='flex justify-between items-end w-full mt-16 md:mt-0 pb-6 md:pb-0'>
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
