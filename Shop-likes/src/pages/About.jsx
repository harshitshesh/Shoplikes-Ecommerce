import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/comon/Footer'
import Video from '../components/home/Video'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef(null)

  const cardsData = [
    {
      img: "img2",
      subtitle: "Our Approach",
      title: "Timeless Style",
      desc: "Inspired by modern trends while staying true to classic fashion values. We design clothing that feels natural, comfortable, and easy to wear .Our goal is to deliver style that fits seamlessly into daily life."
    },
    {
      img: "menwomanmodle",
      subtitle: "Our Mission",
      title: "Smart Shopping",
      desc: "Our mission is to provide fashion that fits both style and budget . We focus on delivering products that people can trust and enjoy daily . Every item reflects our commitment to quality and customer satisfaction."
    },
    {
      img: "shirt",
      subtitle: "Our Purpose",
      title: "Real Value",
      desc: " Our mission is to provide fashion that fits both style and budget . We focus on delivering products that people can trust and enjoy daily ."
    },
    {
      img: "img7",
      subtitle: "Our Quality",
      title: "Premium Standards",
      desc: "We ensure every product meets high standards of quality and durability. Each item is tested to provide comfort, reliability, and long lasting use . Our focus remains on delivering products that truly add value daily."
    },
    {
      img: "img9",
      subtitle: "Our Promise",
      title: "Easy Experience",
      desc: "We make your shopping journey simple, smooth, and completely hassle free. From browsing to delivery, every step is designed for your convenience. "
    }
  ]

  useGSAP(() => {
    const panels = gsap.utils.toArray('.gsap-panel')

    panels.forEach((panel, i) => {
      // Pin current panel so next panel scrolls *OVER* it because of pinSpacing: false
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
       
       
        id: `pin-${i}`
      })

      const inner = panel.querySelector('.panel-inner')
      
      // If there is a NEXT panel, scale this current panel DOWN as the next panel scrolls UP
      if (i < panels.length - 1) {
        gsap.to(inner, {
          scale: 0.85,
          opacity: 0,
          borderRadius: "2rem",
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: panels[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        })
      }
      
      // If there is a PREVIOUS panel, scale this current panel UP as it scrolls IN
      if (i > 0) {
        gsap.from(inner, {
          scale: 0.9,
          borderRadius: "2rem",
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        })
      }

      // Text Entrance Animation (Fades Up gracefully as the panel comes into view)
      const content = panel.querySelector('.panel-content')
      if (content) {
        gsap.fromTo(content,
          { y: 60, opacity: 0 },
          {
            y: 0, 
            opacity: 1, 
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: panel,
              start: "top 70%", // wait until panel is mostly in view
              end: "top 20%",
              scrub: true
            }
          }
        )
      }
    })

    ScrollTrigger.refresh()
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='about-main-container bg-[#0a0a0a] overflow-x-hidden min-h-screen'>
      
      {/* Hero Header panel */}
      <div className="gsap-panel h-screen w-full relative z-10 bg-black pt-40 px-6 md:px-20">
        <div className="panel-inner w-full h-full relative flex flex-col items-center justify-center text-center overflow-hidden">
          <h1 className='font-[fonthero] text-white text-[18vw] md:text-[12vw] uppercase leading-none tracking-tighter'>
            The Essence
          </h1>
          <p className='text-sm md:text-xl uppercase tracking-[0.4em] text-white/70 mt-4 md:mt-8 max-w-2xl'>
           Passion for simple fashion . Focused on quality essentials .
          </p>
        </div>
      </div>

      {/* Structured Overlapping Panels */}
      {cardsData.map((data, index) => (
        <div 
          key={index} 
          className="gsap-panel h-[100vh] md:h-screen w-full relative flex items-center justify-center bg-transparent"
          style={{ zIndex: index + 20 }} // Increasing Z-index ensures the next panel inherently spans OVER the previous
        >
          {/* Inner container handles the GSAP Scaling Effect smoothly */}
          <div className="panel-inner absolute inset-0 w-full h-full bg-black overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Background Image validated from your public folder */}
            <img 
              className="panel-img w-full h-full object-top object-cover opacity-80"
              src={`../img/${data.img}.jpg`} 
              alt={data.title}
            />
            
            {/* Dark Overlay for Text Pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

            {/* Premium Typographic Content */}
            <div className="panel-content absolute inset-0 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32 text-left pointer-events-none">
              <span className="text-[#c0e067] font-mono text-xs md:text-sm tracking-[0.3em] uppercase block mb-4 drop-shadow-md">
                {data.subtitle}
              </span>
              <h2 className="text-white font-[fonthero] text-5xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
                {data.title.split(' ')[0]} <br className="hidden md:block" />
                {data.title.split(' ').slice(1).join(' ')}
              </h2>
              <div className="w-[60px] h-[2px] bg-white/40 mb-6 drop-shadow-md"></div>
              <p className="text-white/80 text-base md:text-2xl font-[fontnormal] leading-relaxed max-w-2xl drop-shadow-lg">
                {data.desc}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Big Format Statement Section gracefully concludes the stack */}
      <div className="gsap-panel h-screen w-full relative bg-black flex items-center justify-center px-6" style={{ zIndex: 100 }}>
        <div className="panel-inner w-full xl:max-w-6xl h-[62vh] md:h-[70vh] rounded-[3rem] md:rounded-[5rem] overflow-hidden relative shadow-2xl border border-white/10 group">
          {/* <img 
            className="w-full h-full  object-fit object-contain grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-105" 
            src="../img/womantop.jpg" 
            alt="Brand Statement" 
          /> */}
           <video 
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-none grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-105' 
        playsInline 
        autoPlay 
        loop 
        muted 
        preload="auto"
        src='/video/herovid.mp4' 
      />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-24 pointer-events-none">
            <span className='text-[#c0e067] font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4'>The Final Statement</span>
            <h2 className="text-white font-[fonthero] text-5xl md:text-[6vw] uppercase leading-[0.9] mb-8 max-w-4xl tracking-tighter">
              Bold Intention <br/> Minimal Execution
            </h2>
            <div className='flex flex-col md:flex-row gap-10 items-end justify-between'>
              <p className="text-white/70 max-w-md text-sm md:text-xl font-[fontnormal] leading-relaxed uppercase tracking-widest">
                Confidence begins with what you choose to wear.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[200] bg-[#0a0a0a]">
        <Footer />
      </div>

    </div>
  )
}

export default About
