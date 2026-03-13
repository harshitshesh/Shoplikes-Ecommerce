import React from 'react'

const Video = () => {
  return (
    <div className='h-screen w-full fixed top-0 left-0 z-auto bg-black'>
      <video 
        className='h-full w-full object-none opacity-60' 
        playsInline 
        autoPlay 
        loop 
        muted 
        preload="auto"
        src='/video/herovid.mp4' 
      />
    </div>
  )
}

export default Video
