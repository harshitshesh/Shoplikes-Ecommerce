import React from 'react'

const Video = () => {
  return (
    <div className='bg-transparent h-screen w-full absolute top-0 left-0 z-0 overflow-hidden'>
      <video 
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-none' 
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
