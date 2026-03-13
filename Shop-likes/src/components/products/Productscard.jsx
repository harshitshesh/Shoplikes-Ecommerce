import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Productscard = ({ searchQuery = "" }) => {
  const containerRef = useRef(null)
  
  const products = [
    { id: 1, name: "Premium Autumn Collection", img: "product1.jpg", price: "$120", category: "shirt" },
    { id: 2, name: "Urban Street Style", img: "product2.jpg", price: "$85", category: "shirt" },
    { id: 3, name: "Minimalist Essentials", img: "product3.jpg", price: "$60", category: "shirt" },
    { id: 4, name: "Classic Denim Line", img: "product4.jpg", price: "$110", category: "denim" },
    { id: 5, name: "Silk Touch Edition", img: "product5.jpg", price: "$145", category: "shirt" },
    { id: 6, name: "Modern Fit Blazer", img: "product6.jpg", price: "$195", category: "blazer" },
  ]

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useGSAP(() => {
    // Refresh ScrollTrigger when products change
    ScrollTrigger.refresh();

    const cards = gsap.utils.toArray(".product-card")

    cards.forEach((card) => {
      gsap.set(card, { transformOrigin: "center center" });

      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      })
      .fromTo(card, {
        scale: 0.7,
        skewY: 5,
        opacity: 0.5
      }, {
        scale: 1,
        skewY: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to(card, {
        scale: 0.7,
        skewY: -5,
        opacity: 0.5,
        duration: 1,
        ease: "power2.in"
      });
    });
  }, { scope: containerRef, dependencies: [filteredProducts] })

  if (filteredProducts.length === 0) {
    return (
      <div className='py-40 text-center'>
        <h3 className='text-4xl font-[fonthero] text-neutral-400'>No products found for "{searchQuery}"</h3>
      </div>
    )
  }

  return (
    <div ref={containerRef} className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 py-20 px-0'>
      {filteredProducts.map((product) => (
        <div key={product.id} className='product-card group relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-neutral-100 shadow-sm hover:shadow-2xl transition-shadow duration-500'>
          
          <div className='w-full h-full overflow-hidden'>
            <img 
              className='h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out' 
              src={`../img/${product.img}`} 
              alt={product.name} 
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12'>
            <h3 className='text-white text-3xl md:text-5xl font-[fonthero] mb-2 md:mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.23, 1, 0.32, 1) delay-100'>
              {product.name}
            </h3>
            <p className='text-neutral-300 text-xl md:text-2xl mb-6 md:mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.23, 1, 0.32, 1) delay-200'>
              {product.price}
            </p>
            <button className='w-fit uppercase cursor-pointer px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-xl font-[fontnormal] border border-white/50 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform translate-y-8 group-hover:translate-y-0'>
              Explore Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Productscard
