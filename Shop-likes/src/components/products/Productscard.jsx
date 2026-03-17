import React, { useRef, useMemo, memo } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
  { 
    id: 1, 
    name: "Premium Autumn Collection", 
    img: "product1.jpg", 
    price: "$120", 
    category: "shirt",
    rating: 4.8,
    description: "Experience ultimate comfort with our Premium Autumn Collection. Crafted from high-quality fabrics, this shirt offers a perfect blend of style and durability for the changing seasons.",
    images: ["product1.jpg", "navimg1.jpg", "img2.jpg"]
  },
  { 
    id: 2, 
    name: "Urban Street Style", 
    img: "product2.jpg", 
    price: "$85", 
    category: "shirt",
    rating: 4.5,
    description: "Make a statement on the streets with our Urban Street Style shirt. Designed for those who appreciate modern aesthetics and effortless cool.",
    images: ["product2.jpg", "navimg2.jpg", "img3.jpg"]
  },
  { 
    id: 3, 
    name: "Minimalist Essentials", 
    img: "product3.jpg", 
    price: "$60", 
    category: "shirt",
    rating: 4.2,
    description: "Less is more. Our Minimalist Essentials collection focuses on clean lines and premium materials to elevate your everyday basics.",
    images: ["product3.jpg", "navimg3.jpg", "img4.jpg"]
  },
  { 
    id: 4, 
    name: "Classic Denim Line", 
    img: "product4.jpg", 
    price: "$110", 
    category: "denim",
    rating: 4.7,
    description: "Our Classic Denim Line brings back the timeless rugged look with a modern fit. Built to last and age beautifully with every wear.",
    images: ["product4.jpg", "navimg4.jpg", "img5.jpg"]
  },
  { 
    id: 5, 
    name: "Silk Touch Edition", 
    img: "product5.jpg", 
    price: "$145", 
    category: "shirt",
    rating: 4.9,
    description: "Indulge in the luxurious feel of our Silk Touch Edition. This shirt provides an unmatched smoothness and a sophisticated sheen for special occasions.",
    images: ["product5.jpg", "navimg5.jpg", "img6.jpg"]
  },
  { 
    id: 6, 
    name: "Modern Fit Blazer", 
    img: "product6.jpg", 
    price: "$195", 
    category: "blazer",
    rating: 4.6,
    description: "Sharpen your look with our Modern Fit Blazer. Tailored for a sleek silhouette, it's the perfect finishing touch for any professional or smart-casual outfit.",
    images: ["product6.jpg", "navimg6.jpg", "img7.jpg"]
  },
]

const Productscard = memo(({ searchQuery = "", onExploreDetail }) => {
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => 
    products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    ), [searchQuery]
  )

  useGSAP(() => {
    const cards = gsap.utils.toArray(".product-card")
    if (!cards.length) return

    cards.forEach((card, i) => {
      const isEven = i % 2 === 0
      const rect = card.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight
      
      // Only set initial 'hidden' state if the card is NOT already in viewport
      // This prevents visible cards from re-rotating on search
      if (!isInViewport) {
        gsap.set(card, {
          opacity: 0,
          xPercent: isEven ? -50 : 50,
          rotation: isEven ? -30 : 30,
          transformOrigin: "center center"
        })

        gsap.to(card, {
          opacity: 1,
          xPercent: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 100%", // Start when top of card hits bottom of viewport
            once: true,
            fastScrollEnd: true,
          }
        })
      } else {
        // If already in viewport, ensure it's visible and static
        gsap.set(card, { opacity: 1, xPercent: 0, rotation: 0 })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, { scope: containerRef, dependencies: [searchQuery] })

  if (filteredProducts.length === 0) {
    return (
      <div className='py-40 text-center'>
        <h3 className='text-4xl font-[fonthero] text-neutral-400'>No products found for "{searchQuery}"</h3>
      </div>
    )
  }

  return (
    <div ref={containerRef} className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 py-20 px-0 overflow-hidden'>
      {filteredProducts.map((product) => (
        <div 
          key={product.id} 
          className='product-card group relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-neutral-100 shadow-lg'
          style={{ 
            willChange: 'transform, opacity', 
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          
          <div className='w-full h-full overflow-hidden'>
            <img 
              className='h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out' 
              src={`../img/${product.img}`} 
              alt={product.name} 
              loading="lazy"
              decoding="async"
              style={{ willChange: 'transform' }}
            />
          </div>

          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-12'>
            <h3 className='text-white text-2xl md:text-5xl font-[fonthero] mb-1 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out'>
              {product.name}
            </h3>
            <p className='text-neutral-300 text-lg md:text-2xl mb-4 md:mb-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75'>
              {product.price}
            </p>
            <button 
              onClick={() => onExploreDetail && onExploreDetail(product)}
              className='w-fit uppercase cursor-pointer px-5 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-xl font-[fontnormal] border border-white/50 text-white hover:bg-white hover:text-black hover:border-white transition-colors duration-200 translate-y-4 group-hover:translate-y-0'
            >
              Explore Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  )
})

Productscard.displayName = "Productscard"

export default Productscard
