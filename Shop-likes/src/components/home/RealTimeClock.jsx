import React, { useState, useEffect } from 'react'

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).toUpperCase()
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  return (
    <div className='flex flex-col text-sm md:text-base font-[fontnormal] text-white/70'>
      <div className='tracking-widest font-mono'>{formatDate(time)}</div>
      <div className='font-bold text-2xl text-white font-serif'>{formatTime(time)}</div>
    </div>
  )
}

export default RealTimeClock
