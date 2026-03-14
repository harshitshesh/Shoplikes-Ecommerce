import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { Navbarcontext } from '../../context/Navcontext'

const Fullscreennav = () => {
    const allnavlinksref = useRef(null)

    const navTL = useRef(null)


    const [navopen, setnavopen] = useContext(Navbarcontext)
    
    // Disable body scroll when menu is open
    React.useEffect(() => {
        if (navopen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => { document.body.style.overflow = 'auto' }
    }, [navopen])
    
    useGSAP(() => {
        navTL.current = gsap.timeline({
            paused: true,
            defaults: { ease: "expo.inOut", duration: 0.8 }
        })
        
        navTL.current
        .set(".fullnav", { display: "block" })
        .from(".stairnav", {
            height: 0,
            stagger: { amount: 0.15 } // Faster, smoother stagger
        })
        .from(".link", {
            opacity: 0,
            y: 40, // Simpler translation instead of rotation
            stagger: { amount: 0.2 }
        }, "-=0.4")
        
        navTL.current.eventCallback("onReverseComplete", () => {
            gsap.set(".fullnav", { display: "none" })
        })
    }, [])

    useGSAP(() => {
    if (navopen) {
    navTL.current.play()
    } else {
    navTL.current.reverse()
    }
    }, [navopen])
    


    return (
        <div className='fullnav hidden text-white overflow-hidden h-screen w-full fixed z-[99999] top-0 left-0 bg-transparent'>

            <div className='h-screen w-full absolute inset-0 z-0'>
                <div className="h-full w-full flex">

                    <div className="stairnav h-full w-1/5 bg-black"></div>
                    <div className="stairnav h-full w-1/5 bg-black"></div>
                    <div className="stairnav h-full w-1/5 bg-black"></div>
                    <div className="stairnav h-full w-1/5 bg-black"></div>
                    <div className="stairnav h-full w-1/5 bg-black"></div>
                </div>
            </div>
            

            <div ref={allnavlinksref} className='relative z-10'>

                <div className='flex w-full justify-between items-start'>

                    <div className='m-1.5 ' >
                        <Link to="/" onClick={() => setnavopen(false)}>
                            <img className="h-16 md:h-20 w-auto object-contain" src="../img/shoplikelogo.png" alt="Website Logo Shop likes" />
                        </Link>
                    </div>


                    <div onClick={() => setnavopen(false)} className='h-24 w-24 mt-2 mr-2 cursor-pointer relative '>

                        <div className='h-32 w-0.5 -rotate-47 origin-top absolute bg-white'></div>

                        <div className='h-32 w-0.5 right-0 rotate-47 origin-top absolute bg-white'></div>

                    </div>


                </div>

                <div className='navlinks mt-10'>


                    <Link to="/products" onClick={() => setnavopen(false)} className='link block origin-top relative border-y-[0.5px]'>
                        <h1 className='font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Products</h1>

                        <div className='movelink absolute flex gap-48 top-0 bg-amber-200 text-black'>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>More Than Shopping</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>More Than Shopping</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg1.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>More Than Shopping</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>More Than Shopping</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg1.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/about" onClick={() => setnavopen(false)} className='link block origin-top relative border-y-[0.5px]'>
                        <h1 className='font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>About</h1>

                        <div className='movelink absolute flex gap-48 top-0 bg-amber-200 text-black'>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Driven By Quality</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg2.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Driven By Quality</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg3.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Driven By Quality</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg2.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Driven By Quality</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg3.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/contact" onClick={() => setnavopen(false)} className='link block origin-top relative border-y-[0.5px]'>
                        <h1 className='font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Contact</h1>

                        <div className='movelink absolute flex gap-56 top-0 bg-amber-200 text-black'>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Let's Connect</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg4.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Let's Connect</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg5.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Let's Connect</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg4.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Let's Connect</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg5.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/" onClick={() => setnavopen(false)} className='link block origin-top relative border-y-[0.5px]'>
                        <h1 className='font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Home</h1>

                        <div className='movelink absolute flex gap-48 top-0 bg-amber-200 text-black'>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg6.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg7.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex flex gap-4  items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal]   text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-16  object-contain shadow-0 rounded-3xl' src="../img/navimg6.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className=' whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-[7vw]  text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-16  object-contain  shrink-0 rounded-3xl' src="../img/navimg7.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Fullscreennav
