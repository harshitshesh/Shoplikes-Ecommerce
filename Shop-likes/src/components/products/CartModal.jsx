import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const CartModal = ({ isOpen, onClose, cart, onPlaceOrder }) => {
  const [address, setAddress] = useState({ name: '', street: '', city: '', phone: '' })
  const [isConfirmed, setIsConfirmed] = useState(false)
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
      setIsConfirmed(false) // Reset on close
    }
  }, [isOpen])

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose })
    tl.to(contentRef.current, { x: '100%', opacity: 0, duration: 0.4, ease: 'power3.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.2")
  }

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''))
    return acc + (price * item.quantity)
  }, 0)

  const gst = subtotal * 0.18
  const discount = subtotal * 0.05
  const grandTotal = subtotal + gst - discount

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
        <div className="p-4 md:p-8 border-b border-neutral-100 flex justify-between items-center bg-black text-white">
          <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wider">
            {isConfirmed ? 'Order Summary' : 'Your Shopping Cart'}
          </h2>
          <button onClick={handleClose} className="text-2xl md:text-3xl hover:rotate-90 transition-transform duration-300 cursor-pointer">✕</button>
        </div>

        {/* Cart Items List - Conditional Visibility or minimized in summary */}
        <div className={`flex-1 overflow-y-auto p-4 md:p-8 space-y-4 ${isConfirmed ? 'bg-neutral-50' : ''}`}>
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-neutral-400">
              <span className="text-6xl mb-4">🛒</span>
              <p className="text-xl">Your cart is empty</p>
            </div>
          ) : (
            <>
              {!isConfirmed && (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={`../img/${item.img}`} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm md:text-base leading-tight mb-1">{item.name}</h4>
                        <p className="text-neutral-500 text-xs md:text-sm font-medium">{item.price} × {item.quantity}</p>
                      </div>
                      <div className="font-bold text-sm md:text-base">
                        ${(parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {isConfirmed && (
                <div className="animate-in fade-in slide-in-from-right duration-500">
                  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-neutral-100 mb-6">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-4">Shipping To</h3>
                    <p className="font-bold text-lg">{address.name}</p>
                    <p className="text-neutral-600">{address.street}, {address.city}</p>
                    <p className="text-neutral-600">Tel: {address.phone}</p>
                    <button 
                      onClick={() => setIsConfirmed(false)}
                      className="text-[#8eac4b] text-xs font-bold uppercase tracking-widest mt-4 hover:underline cursor-pointer"
                    >
                      Edit Address
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Order Details</h3>
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <span className="text-neutral-600">{item.name} <span className="text-neutral-400">×{item.quantity}</span></span>
                        <span className="font-bold">${(parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Dynamic Footer Area */}
        {cart.length > 0 && (
          <div className="p-4 md:p-8 bg-white border-t border-neutral-100">
            {!isConfirmed ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                   <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Delivery Details</h3>
                   <span className="text-xs text-neutral-400 italic">* All fields required</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-3 md:p-4 rounded-xl border border-neutral-100 bg-neutral-50 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all text-xs md:text-sm"
                    value={address.name}
                    onChange={(e) => setAddress({...address, name: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Street Address"
                    className="w-full p-3 md:p-4 rounded-xl border border-neutral-100 bg-neutral-50 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all text-xs md:text-sm"
                    value={address.street}
                    onChange={(e) => setAddress({...address, street: e.target.value})}
                  />
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="City"
                      className="w-full p-3 md:p-4 rounded-xl border border-neutral-100 bg-neutral-50 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all text-xs md:text-sm"
                      value={address.city}
                      onChange={(e) => setAddress({...address, city: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone"
                      className="w-full p-3 md:p-4 rounded-xl border border-neutral-100 bg-neutral-50 outline-none focus:ring-2 focus:ring-[#c0e067] transition-all text-xs md:text-sm"
                      value={address.phone}
                      onChange={(e) => setAddress({...address, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-neutral-50">
                  <span className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="text-2xl font-black">${subtotal.toFixed(2)}</span>
                </div>

                <button 
                  onClick={() => setIsConfirmed(true)}
                  disabled={!address.name || !address.street || !address.city || !address.phone}
                  className="w-full bg-black text-white hover:bg-[#c0e067] hover:text-black py-4 md:py-5 rounded-[1.5rem] text-base md:text-lg font-bold transition-all duration-300 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed uppercase tracking-[0.2em]"
                >
                  Confirm Address
                </button>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Subtotal</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">GST (18%)</span>
                    <span className="font-bold text-neutral-800">+ ${gst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Discount (5%)</span>
                    <span className="font-bold text-[#8eac4b]">- ${discount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-black/5">
                  <span className="text-black font-black uppercase tracking-widest">Total to Pay</span>
                  <span className="text-3xl font-black text-black">${grandTotal.toFixed(2)}</span>
                </div>

                <button 
                  onClick={() => onPlaceOrder({ ...address, subtotal, gst, discount, grandTotal })}
                  className="w-full bg-[#c0e067] text-black hover:bg-black hover:text-white py-5 rounded-[1.5rem] text-xl font-black transition-all duration-300 uppercase tracking-[0.2em] shadow-xl shadow-[#c0e067]/20"
                >
                  Pay Now
                </button>
                <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest">Secure Checkout Powered by Shop Likes</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CartModal
