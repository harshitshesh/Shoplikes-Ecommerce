import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { Navbarcontext } from '../../context/Navcontext'

const Fullscreennav = () => {
    const allnavlinksref = useRef(null)
    const navTL = useRef(null)
    const { navopen, setnavopen } = useContext(Navbarcontext)
    const [activeLink, setActiveLink] = React.useState(null)

    const handleLinkClick = (e, path) => {
        if (window.innerWidth >= 768) {
            setnavopen(false)
            return
        }

        if (activeLink !== path) {
            e.preventDefault()
            setActiveLink(path)
        } else {
            setnavopen(false)
        }
    }
    
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


                    <div onClick={() => setnavopen(false)} className='h-16 w-16 md:h-24 md:w-24 mt-4 mr-4 cursor-pointer relative flex items-center justify-center'>
                        <div className='h-10 w-0.5 md:h-32 rotate-45 absolute bg-white'></div>
                        <div className='h-10 w-0.5 md:h-32 -rotate-45 absolute bg-white'></div>
                    </div>


                </div>

                <div className='navlinks mt-10'>


                    <Link to="/products" onClick={(e) => handleLinkClick(e, '/products')} className='link block origin-top relative border-y-[0.5px] overflow-hidden' style={{ willChange: 'transform, opacity' }}>
                        <h1 className='font-[fontnormal] text-[10vw] md:text-[8vw] uppercase leading-tight md:leading-[7vw] text-center font-bold py-2'>Products</h1>

                        <div className={`movelink absolute inset-0 flex items-center gap-48 bg-amber-200 text-black transition-opacity duration-300 ${activeLink === '/products' ? 'opacity-100' : 'max-md:opacity-0'}`} style={{ willChange: 'transform' }}>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>More Than Shopping</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>More Than Shopping</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg1.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>More Than Shopping</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>More Than Shopping</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg1.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/about" onClick={(e) => handleLinkClick(e, '/about')} className='link block origin-top relative border-y-[0.5px] overflow-hidden' style={{ willChange: 'transform, opacity' }}>
                        <h1 className='font-[fontnormal] text-[10vw] md:text-[8vw] uppercase leading-tight md:leading-[7vw] text-center font-bold py-2'>About</h1>

                        <div className={`movelink absolute inset-0 flex items-center gap-48 bg-amber-200 text-black transition-opacity duration-300 ${activeLink === '/about' ? 'opacity-100' : 'max-md:opacity-0'}`} style={{ willChange: 'transform' }}>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Driven By Quality</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg2.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Driven By Quality</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg3.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Driven By Quality</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg2.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Driven By Quality</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg3.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className='link block origin-top relative border-y-[0.5px] overflow-hidden' style={{ willChange: 'transform, opacity' }}>
                        <h1 className='font-[fontnormal] text-[10vw] md:text-[8vw] uppercase leading-tight md:leading-[7vw] text-center font-bold py-2'>Contact</h1>

                        <div className={`movelink absolute inset-0 flex items-center gap-56 bg-amber-200 text-black transition-opacity duration-300 ${activeLink === '/contact' ? 'opacity-100' : 'max-md:opacity-0'}`} style={{ willChange: 'transform' }}>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Let's Connect</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg4.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Let's Connect</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg5.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Let's Connect</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg4.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Let's Connect</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg5.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className='link block origin-top relative border-y-[0.5px] overflow-hidden' style={{ willChange: 'transform, opacity' }}>
                        <h1 className='font-[fontnormal] text-[10vw] md:text-[8vw] uppercase leading-tight md:leading-[7vw] text-center font-bold py-2'>Home</h1>

                        <div className={`movelink absolute inset-0 flex items-center gap-48 bg-amber-200 text-black transition-opacity duration-300 ${activeLink === '/' ? 'opacity-100' : 'max-md:opacity-0'}`} style={{ willChange: 'transform' }}>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg6.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg7.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className='movex h-full flex gap-4 items-center'>
                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg6.jpg" alt="" loading="lazy" decoding="async" />

                                <h2 className='whitespace-nowrap font-[fontnormal] text-[8vw] uppercase leading-none text-center font-bold'>Deals You’ll Love</h2>
                                <img className='h-[70%] object-contain rounded-2xl' src="../img/navimg7.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Fullscreennav
