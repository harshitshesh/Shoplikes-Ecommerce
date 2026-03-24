import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef(null)
  const contentRef = useRef(null)
  const overlayRef = useRef(null)
  const touchStartX = useRef(0)

  useEffect(() => {
    if (isOpen) {
      setQuantity(1)
      setCurrentImageIndex(0)
      
      const tl = gsap.timeline()
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        .fromTo(contentRef.current, 
          { y: 100, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          "-=0.2"
        )
      
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    })
    tl.to(contentRef.current, { y: 50, opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1")
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  if (!isOpen || !product) return null

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
    >
      {/* Overlay */}
      <div 
        ref={overlayRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0"
      />

      {/* Modal Content */}
      <div 
        ref={contentRef}
        className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute right-6 top-6 z-10 bg-black/10 hover:bg-black/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="text-2xl">✕</span>
        </button>

        {/* Left Side: Image Gallery */}
        <div 
          className="w-full md:w-1/2 h-[40vh] md:h-auto relative bg-neutral-100 group touch-pan-y"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            const touchEndX = e.changedTouches[0].clientX
            const diff = touchStartX.current - touchEndX
            if (Math.abs(diff) > 50) {
              if (diff > 0) nextImage()
              else prevImage()
            }
          }}
        >
          <img 
            src={`../img/${product.images[currentImageIndex]}`} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {product.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 md:group-hover:opacity-100 max-md:opacity-100 transition-opacity"
              >
                ←
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 md:group-hover:opacity-100 max-md:opacity-100 transition-opacity"
              >
                →
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-6 bg-black' : 'bg-black/20'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 p-6 md:p-16 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs md:text-sm uppercase tracking-widest text-neutral-400 font-bold">{product.category}</span>
            <div className="flex items-center gap-1 bg-[#c0e067]/20 px-3 py-1 rounded-full">
              <span className="text-[#89a149] font-bold text-sm md:text-base">{product.rating}</span>
              <span className="text-xs text-[#89a149]">★</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-[fonthero] mb-2 md:mb-4 leading-tight">{product.name}</h2>
          <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-neutral-800">{product.price}</p>
          
          <div className="mb-8 md:mb-10">
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-2 md:mb-4">Description</h4>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center mt-auto">
            {/* Quantity */}
            <div className="flex items-center border-2 border-neutral-100 rounded-full p-1 bg-neutral-50 w-full sm:w-auto justify-between sm:justify-start">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-white transition-colors text-lg md:text-xl font-bold"
              >
                -
              </button>
              <span className="w-10 md:w-12 text-center text-lg md:text-xl font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-white transition-colors text-lg md:text-xl font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={() => {
                onAddToCart(product, quantity)
                handleClose()
              }}
              className="flex-1 w-full bg-black text-white hover:bg-[#c0e067] hover:text-black py-4 md:py-5 px-6 md:px-10 rounded-2xl md:rounded-full text-lg md:text-xl font-bold transition-all duration-300 transform active:scale-95 uppercase tracking-wider"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
