import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/comon/Footer'

const About = () => {
  const containerRef = useRef(null)
  const storyRef = useRef(null)
  const bigCardRef = useRef(null)

  const imgarr = [
    "img2", "img4", "img6", "img7", "img9", "img3"
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // 1. SIDE-BY-SIDE PINNING LOGIC
    const images = gsap.utils.toArray(".about-image")
    gsap.set(images, { opacity: 0 })
    gsap.set(images[0], { opacity: 1 })

    // PIN the image container while the right side scrolls
    ScrollTrigger.create({
      trigger: ".about-story-section",
      start: "top top",
      end: "bottom bottom",
      pin: ".sticky-img-container",
      pinSpacing: true, // Ensuring space is maintained for the side-scrolling effect
      scrub: 1,
      id: "master-pin"
    })

    // 2. STORY TIMELINE (for background and images)
    const storyCards = gsap.utils.toArray(".story-card")
    
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-story-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    })

    // Background transition to professional radial gradient & text color adjustment
    mainTL.to(containerRef.current, {
      background: "radial-gradient(circle at center, #1a1a2e 0%, #000000 100%)",
      duration: 1,
    }, 0)
    .to(".story-card h2, .story-card p", {
      color: "#f5f5f5",
      duration: 1,
    }, 0)
    .to(".about-main-container h1, .about-main-container p:not(.story-card p)", {
      color: "#ffffff",
      opacity: 0.1,
      duration: 1,
    }, 0)

    // Image swaps and text entrances
    storyCards.forEach((card, i) => {
      // Image swap
      if (i > 0 && i < images.length) {
        mainTL.to(images[i-1], { opacity: 0, duration: 0.5 }, i)
              .to(images[i], { opacity: 1, duration: 0.5 }, i)
      }

      // Individual text card animations
      gsap.fromTo(card.querySelector("div"), 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        }
      )
    })

    // 3. BIG CARD ENTRANCE
    gsap.fromTo(bigCardRef.current, 
      { y: 150, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".section-big-card",
          start: "top 85%",
          end: "top 30%",
          scrub: 1
        }
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='about-main-container bg-white overflow-x-hidden min-h-screen transition-all duration-1000 ease-in-out'>
      
      {/* Hero Header */}
      <div className="pt-40 px-6 md:px-20 mb-20 text-center">
        <h1 className='font-[fonthero] text-[18vw] md:text-[15vw] uppercase leading-none opacity-5 text-neutral-900 tracking-tighter'>Essence</h1>
        <p className='text-sm md:text-lg uppercase tracking-[0.5em] text-neutral-400 mt-[-2vw] ml-[2vw]'>The Soul of Curated Fashion</p>
      </div>

      {/* Main Story Section - Standard Side-by-Side Pinning */}
      <div className="about-story-section relative flex flex-col md:flex-row w-full h-fit px-6 md:px-20 overflow-visible gap-10">
        
        {/* LEFT: PINNED IMAGE SECTION */}
        <div className="sticky-img-container w-full md:w-1/2 h-[60vh] md:h-screen flex items-center justify-center z-10">
          <div className='h-[60vh] md:h-[75vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative bg-neutral-900 border border-white/5'>
            {imgarr.map((img, index) => (
              <img 
                key={index}
                className='about-image h-full w-full object-cover absolute top-0 left-0 will-change-opacity' 
                src={`../img/${img}.jpg`} 
                alt={`product ${index}`} 
              />
            ))}
            <div className='absolute inset-0 bg-black/10'></div>
          </div>
        </div>

        {/* RIGHT: SCROLLING CONTENT SECTION */}
        <div className="scrolling-content w-full md:w-1/2 relative z-20">
          
          <div className="story-card min-h-[100vh] flex items-center justify-start py-20">
            <div className="max-w-xl">
              <span className='text-[#c0e067] font-mono text-[10px] tracking-[0.4em] uppercase block mb-4'>01 — Philosophy</span>
              <h2 className='font-[fonthero] text-6xl md:text-8xl uppercase mb-6 leading-[0.8] text-neutral-900 tracking-tighter'>
                Modern <br /> Vision
              </h2>
              <p className='text-xl md:text-2xl text-neutral-700 leading-tight font-[fontnormal]'>
                At Shop Likes, we redefine the "Essential". Every piece is a dialogue between timeless architecture and contemporary ease.
              </p>
            </div>
          </div>

          <div className="story-card min-h-[100vh] flex items-center justify-start py-20">
            <div className="max-w-xl">
              <span className='text-[#c0e067] font-mono text-[10px] tracking-[0.4em] uppercase block mb-4'>02 — Quality</span>
              <h2 className='font-[fonthero] text-6xl md:text-8xl uppercase mb-6 leading-[0.8] text-neutral-900 tracking-tighter'>
                Pure <br /> Detail
              </h2>
              <p className='text-xl md:text-2xl text-neutral-700 leading-tight font-[fontnormal]'>
                High-end materials meet minimalist intention. We celebrate the grain, the texture, and the hidden detail.
              </p>
            </div>
          </div>

          <div className="story-card min-h-[100vh] flex items-center justify-start py-20">
            <div className="max-w-xl">
              <span className='text-[#c0e067] font-mono text-[10px] tracking-[0.4em] uppercase block mb-4'>03 — Lifestyle</span>
              <h2 className='font-[fonthero] text-6xl md:text-8xl uppercase mb-6 leading-[0.8] text-neutral-900 tracking-tighter'>
                Unspoken <br /> Comfort
              </h2>
              <p className='text-xl md:text-2xl text-neutral-400 font-light italic leading-relaxed'>
                "The things you wear every day should inspire you. They should be a foundation for your unique expression."
              </p>
            </div>
          </div>

          <div className="story-card min-h-[100vh] flex items-center justify-start py-20 pb-40">
            <div className="max-w-xl">
              <span className='text-[#c0e067] font-mono text-[10px] tracking-[0.4em] uppercase block mb-4'>04 — Future</span>
              <h2 className='font-[fonthero] text-6xl md:text-8xl uppercase mb-6 leading-[0.8] text-neutral-900 tracking-tighter'>
                Timeless <br /> Rhythm
              </h2>
              <p className='text-md md:text-lg text-neutral-500 uppercase tracking-[0.2em] leading-relaxed'>
                Shop Likes is a commitment to a curated lifestyle that transcends seasonal trends.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Big Format Card Section */}
      <div className="section-big-card min-h-screen flex items-center justify-center py-60 px-6 relative z-30">
        <div 
          ref={bigCardRef}
          className="w-full max-w-[95vw] h-[80vh] md:h-[90vh] rounded-[3rem] md:rounded-[5rem] overflow-hidden relative shadow-2xl border border-white/10"
        >
          <img 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-2000 ease-out" 
            src="../img/img8.jpg" 
            alt="Brand Statement" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-24">
            <span className='text-[#c0e067] font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4'>Statement Collection</span>
            <h2 className="text-white font-[fonthero] text-[10vw] md:text-[6vw] uppercase leading-[0.9] mb-8 max-w-4xl tracking-tighter">
              Bold Intention ` Minimalist Execution
            </h2>
            <div className='flex flex-col md:flex-row gap-10 items-end justify-between'>
              <p className="text-white/60 max-w-md text-sm md:text-xl font-[fontnormal] leading-relaxed uppercase tracking-widest">
                Built for the modern human. We celebrate the texture and the intention in every piece.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
