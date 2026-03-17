import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/comon/Footer'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef(null)

  const cardsData = [
    {
      img: "img2",
      subtitle: "01 — The Genesis",
      title: "Visionary Threads",
      desc: "Every collection begins with a blank canvas and a relentless pursuit of perfection. We source the finest materials to construct garments that speak volumes in their silence."
    },
    {
      img: "img4",
      subtitle: "02 — The Craft",
      title: "Artisan Mastery",
      desc: "Our silhouettes endure time. We blend traditional tailoring with avant-garde aesthetics to ensure every stitch holds a purposeful place in your wardrobe."
    },
    {
      img: "img6",
      subtitle: "03 — The Aesthetic",
      title: "Modern Solitude",
      desc: "Embracing minimalism isn't about having less; it's about making room for more of what matters. A curated aesthetic for the discerning individual."
    },
    {
      img: "img7",
      subtitle: "04 — The Ethics",
      title: "Sustainable Ethos",
      desc: "Luxury redefined through responsibility. We believe in fashion that leaves a lasting impression on you, without leaving a scar on our planet."
    },
    {
      img: "img9",
      subtitle: "05 — The Horizon",
      title: "Forward Motion",
      desc: "We don't just follow trends—we anticipate the future. Pushing boundaries and redefining the modern uniform for generations to come."
    }
  ]

  useGSAP(() => {
    const panels = gsap.utils.toArray('.gsap-panel')

    panels.forEach((panel, i) => {
      // Pin current panel so next panel scrolls *OVER* it because of pinSpacing: false
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true, 
        pinSpacing: false,
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
              end: "top 30%",
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
            Curated luxury for the modern visionary. Scroll to discover.
          </p>
        </div>
      </div>

      {/* Structured Overlapping Panels */}
      {cardsData.map((data, index) => (
        <div 
          key={index} 
          className="gsap-panel h-[100dvh] md:h-screen w-full relative flex items-center justify-center bg-transparent"
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
        <div className="panel-inner w-full xl:max-w-6xl h-[60vh] md:h-[70vh] rounded-[3rem] md:rounded-[5rem] overflow-hidden relative shadow-2xl border border-white/10 group">
          <img 
            className="w-full h-full object-cover grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-105" 
            src="../img/img3.jpg" 
            alt="Brand Statement" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-24 pointer-events-none">
            <span className='text-[#c0e067] font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4'>The Final Statement</span>
            <h2 className="text-white font-[fonthero] text-5xl md:text-[6vw] uppercase leading-[0.9] mb-8 max-w-4xl tracking-tighter">
              Bold Intention <br/> Minimal Execution
            </h2>
            <div className='flex flex-col md:flex-row gap-10 items-end justify-between'>
              <p className="text-white/70 max-w-md text-sm md:text-xl font-[fontnormal] leading-relaxed uppercase tracking-widest">
                Join the conversation. Elevate your presence today.
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
