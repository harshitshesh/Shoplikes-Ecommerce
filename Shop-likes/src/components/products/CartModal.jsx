import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const CartModal = ({ isOpen, onClose, cart, onPlaceOrder }) => {
  const [address, setAddress] = useState({ name: '', street: '', city: '' })
  const modalRef = useRef(null)
  const contentRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline()
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        .fromTo(contentRef.current, 
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' },
          "-=0.2"
        )
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose })
    tl.to(contentRef.current, { x: '100%', opacity: 0, duration: 0.4, ease: 'power3.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.2")
  }

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return acc + (price * item.quantity)
  }, 0)

  if (!isOpen) return null

  return (
    <div ref={modalRef} className="fixed inset-0 z-[300] flex justify-end">
      {/* Overlay */}
      <div 
        ref={overlayRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0"
      />

      {/* Slide-out Sidebar */}
      <div 
        ref={contentRef}
        className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-neutral-100 flex justify-between items-center bg-black text-white">
          <h2 className="text-2xl font-bold uppercase tracking-wider">Your Shopping Cart</h2>
          <button onClick={handleClose} className="text-3xl hover:rotate-90 transition-transform duration-300">✕</button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-neutral-400">
              <span className="text-6xl mb-4">🛒</span>
              <p className="text-xl">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={`../img/${item.img}`} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg leading-tight mb-1">{item.name}</h4>
                  <p className="text-neutral-500 font-medium">{item.price} × {item.quantity}</p>
                </div>
                <div className="font-bold text-lg">
                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary & Address Form */}
        {cart.length > 0 && (
          <div className="p-6 md:p-8 bg-neutral-50 border-t border-neutral-200">
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold uppercase tracking-widest text-neutral-400">Delivery Details</h3>
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-neutral-200 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all"
                value={address.name}
                onChange={(e) => setAddress({...address, name: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Street Address"
                className="w-full p-4 rounded-xl border border-neutral-200 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all"
                value={address.street}
                onChange={(e) => setAddress({...address, street: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="City"
                className="w-full p-4 rounded-xl border border-neutral-200 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all"
                value={address.city}
                onChange={(e) => setAddress({...address, city: e.target.value})}
              />
            </div>

            <div className="flex justify-between items-end mb-6">
              <span className="text-neutral-500 font-bold uppercase tracking-widest">Subtotal</span>
              <span className="text-3xl font-black">${subtotal.toFixed(2)}</span>
            </div>

            <button 
              onClick={() => onPlaceOrder(address)}
              disabled={!address.name || !address.street || !address.city}
              className="w-full bg-black text-white hover:bg-[#c0e067] hover:text-black py-5 rounded-2xl text-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
            >
              Confirm & Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartModal
