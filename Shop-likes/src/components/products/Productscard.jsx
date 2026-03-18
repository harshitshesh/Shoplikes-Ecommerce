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
    name: "Classic White Sneakers", 
    img: "product2.jpg", 
    price: "$90", 
    category: "shoes",
    rating: 4.7,
    description: "Step into comfort and style with these classic white sneakers. Designed for everyday wear, they provide a clean look with long-lasting durability.",
    images: ["product2.jpg", "navimg2.jpg", "img3.jpg"]
  },

  { 
    id: 3, 
    name: "Minimalist Leather Watch", 
    img: "product3.jpg", 
    price: "$150", 
    category: "watch",
    rating: 4.9,
    description: "Elevate your style with this minimalist leather watch. A perfect combination of elegance and precision for both casual and formal occasions.",
    images: ["product3.jpg", "navimg3.jpg", "img4.jpg"]
  },

  { 
    id: 4, 
    name: "Casual Denim Jacket", 
    img: "product4.jpg", 
    price: "$110", 
    category: "jacket",
    rating: 4.6,
    description: "A timeless denim jacket designed for versatility and comfort. Perfect for layering and enhancing your everyday casual outfits.",
    images: ["product4.jpg", "navimg4.jpg", "img5.jpg"]
  },

  { 
    id: 5, 
    name: "Urban Street Hoodie", 
    img: "product5.jpg", 
    price: "$80", 
    category: "hoodie",
    rating: 4.7,
    description: "Stay warm and stylish with our urban street hoodie. Soft fabric and modern design make it ideal for daily wear.",
    images: ["product5.jpg", "navimg5.jpg", "img6.jpg"]
  },

  { 
    id: 6, 
    name: "Slim Fit Black Jeans", 
    img: "product6.jpg", 
    price: "$95", 
    category: "jeans",
    rating: 4.8,
    description: "Designed for a sleek and modern look, these slim fit black jeans offer comfort, flexibility, and style for any occasion.",
    images: ["product6.jpg", "navimg6.jpg", "img7.jpg"]
  },

  { 
    id: 7, 
    name: "Luxury Sunglasses", 
    img: "product7.jpg", 
    price: "$70", 
    category: "accessories",
    rating: 4.6,
    description: "Protect your eyes in style with these luxury sunglasses. Lightweight design with premium lenses for maximum comfort.",
    images: ["product7.jpg", "navimg7.jpg", "img8.jpg"]
  },

  { 
    id: 8, 
    name: "Formal Office Shirt", 
    img: "product8.jpg", 
    price: "$85", 
    category: "shirt",
    rating: 4.7,
    description: "A perfect choice for professional settings, this formal office shirt offers a clean look with breathable fabric for all-day comfort.",
    images: ["product8.jpg", "navimg8.jpg", "img9.jpg"]
  },

  { 
    id: 9, 
    name: "Running Sports Shoes", 
    img: "product9.jpg", 
    price: "$130", 
    category: "shoes",
    rating: 4.9,
    description: "Engineered for performance, these running shoes provide excellent grip, cushioning, and support for active lifestyles.",
    images: ["product9.jpg", "navimg9.jpg", "img10.jpg"]
  },

  { 
    id: 10, 
    name: "Premium Leather Belt", 
    img: "product10.jpg", 
    price: "$60", 
    category: "accessories",
    rating: 4.5,
    description: "Complete your outfit with this premium leather belt. Durable, stylish, and suitable for both casual and formal wear.",
    images: ["product10.jpg", "navimg10.jpg", "img11.jpg"]
  },

  { 
  id: 11, 
  name: "Men's Casual Cotton Shirt", 
  img: "product11.jpg", 
  price: "$75", 
  category: "mens-shirt",
  rating: 4.7,
  description: "A comfortable cotton shirt designed for everyday wear with a clean and modern look.",
  images: ["product11.jpg", "navimg11.jpg", "img12.jpg"]
},

{ 
  id: 12, 
  name: "Men's Formal Slim Shirt", 
  img: "product12.jpg", 
  price: "$95", 
  category: "mens-shirt",
  rating: 4.8,
  description: "Perfect for office and formal events, this slim fit shirt offers a sharp and elegant style.",
  images: ["product12.jpg", "navimg12.jpg", "img13.jpg"]
},

{ 
  id: 13, 
  name: "Men's Classic Chino Pants", 
  img: "product13.jpg", 
  price: "$85", 
  category: "mens-pants",
  rating: 4.6,
  description: "Versatile chino pants that combine comfort and style, suitable for both casual and semi-formal looks.",
  images: ["product13.jpg", "navimg13.jpg", "img14.jpg"]
},

{ 
  id: 14, 
  name: "Men's Slim Fit Trousers", 
  img: "product14.jpg", 
  price: "$100", 
  category: "mens-pants",
  rating: 4.7,
  description: "Modern slim fit trousers designed to provide a sleek look with all-day comfort.",
  images: ["product14.jpg", "navimg14.jpg", "img15.jpg"]
},

{ 
  id: 15, 
  name: "Women's Casual Summer Top", 
  img: "product15.jpg", 
  price: "$65", 
  category: "womens-top",
  rating: 4.7,
  description: "Lightweight and stylish summer top perfect for daily wear and relaxed outings.",
  images: ["product15.jpg", "navimg15.jpg", "img16.jpg"]
},

{ 
  id: 16, 
  name: "Women's Elegant Party Dress", 
  img: "product16.jpg", 
  price: "$140", 
  category: "womens-dress",
  rating: 4.9,
  description: "A beautifully designed dress that adds elegance and confidence to your special occasions.",
  images: ["product16.jpg", "navimg16.jpg", "img17.jpg"]
},

{ 
  id: 17, 
  name: "Women's Office Wear Shirt", 
  img: "product17.jpg", 
  price: "$85", 
  category: "womens-top",
  rating: 4.6,
  description: "Designed for a professional look, this shirt offers comfort and a polished appearance.",
  images: ["product17.jpg", "navimg17.jpg", "img18.jpg"]
},

{ 
  id: 18, 
  name: "Women's Casual Maxi Dress", 
  img: "product18.jpg", 
  price: "$120", 
  category: "womens-dress",
  rating: 4.8,
  description: "Flowy and comfortable maxi dress ideal for casual outings and everyday elegance.",
  images: ["product18.jpg", "navimg18.jpg", "img19.jpg"]
}
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
