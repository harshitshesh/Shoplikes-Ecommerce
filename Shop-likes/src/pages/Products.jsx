import React, { useState, useEffect, useRef, useDeferredValue, useContext } from 'react'
import Productscard from '../components/products/Productscard'
import Footer from '../components/comon/Footer'
import ProductModal from '../components/products/ProductModal'
import CartModal from '../components/products/CartModal'
import { Navbarcontext } from '../context/Navcontext'

const Products = () => {
  const { setIsAnyModalOpen } = useContext(Navbarcontext)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [isSticky, setIsSticky] = useState(false)
  const searchSentinelRef = useRef(null)

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500) // 500ms debounce delay

    return () => clearTimeout(handler)
  }, [searchQuery])

  // Modal and Cart State
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  // Track global modal state
  useEffect(() => {
    setIsAnyModalOpen(isModalOpen || isCartOpen)
  }, [isModalOpen, isCartOpen, setIsAnyModalOpen])

  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        )
      }
      return [...prevCart, { ...product, quantity }]
    })
  }

  const handlePlaceOrder = (address) => {
    console.log("Order placed for:", address, "with items:", cart)
    alert(`Thank you ${address.name}! Your order has been placed successfully.`)
    setCart([])
    setIsCartOpen(false)
  }

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    const sentinel = searchSentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: "0px" }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <div className='bg-white min-h-screen'>
      {/* Title Section */}
      <div className='pt-40 md:pt-48 px-6 md:px-10 pb-10'>
        <div className='flex flex-col md:flex-row justify-between items-end gap-10'>
          <div>
            <h2 className='font-[fontnormal] text-[10vw] uppercase font-bold leading-none tracking-tighter'>
              Our <br />Products
            </h2>
            <p className='text-xl md:text-2xl text-neutral-500 mt-6 max-w-xl'>
              Explore our curated selection of premium essentials, designed for the modern lifestyle.
            </p>
          </div>

          {/* Search & Cart Bar - Original Position */}
          <div className='w-full md:w-[50vw] m-auto flex items-center gap-3 md:gap-4 relative group'>
            {/* Cart Icon */}
            <div 
              onClick={() => setIsCartOpen(true)}
              className='relative flex items-center justify-center bg-neutral-100 p-3 md:p-4 rounded-full min-w-[50px] md:min-w-[60px] cursor-pointer hover:bg-black hover:text-white transition-all duration-300 shadow-sm'
            >
              <span className='text-xl md:text-2xl'>🛒</span>
              {totalCartItems > 0 && (
                <span className='absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-[#c0e067] text-black text-[10px] md:text-xs font-bold w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center border-2 border-white'>
                  {totalCartItems}
                </span>
              )}
            </div>

            <div className='relative flex-1'>
              <input
                type="text"
                placeholder="Find something special..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-neutral-100 border-none rounded-2xl md:rounded-full px-5 md:px-8 py-4 md:py-5 text-lg md:text-xl outline-none focus:ring-4 focus:ring-[#c0e067]/30 transition-shadow duration-300 font-[fontnormal]'
              />
              <div className='absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity duration-300'>
                🔍
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sentinel element - triggers sticky when scrolled past */}
      <div ref={searchSentinelRef} className='h-0' />

      {/* Sticky Search & Cart Bar */}
      <div
        className={`
          sticky top-[95px] md:top-0 z-[110] px-4 md:px-10 transition-all duration-300 flex justify-center
          ${isSticky
            ? 'py-3 md:py-4'
            : 'py-0 h-0 overflow-hidden opacity-0 pointer-events-none'
          }
        `}
      >
        <div className='w-full md:w-[40vw] flex items-center gap-3 md:gap-4 relative group'>
          {/* Cart Icon */}
          <div 
            onClick={() => setIsCartOpen(true)}
            className='relative flex items-center justify-center bg-neutral-100 p-2 md:p-3 rounded-full min-w-[45px] md:min-w-[50px] cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm'
          >
            <span className='text-lg md:text-xl'>🛒</span>
            {totalCartItems > 0 && (
              <span className='absolute -top-1 -right-1 bg-[#c0e067] text-black text-[9px] md:text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white'>
                {totalCartItems}
              </span>
            )}
          </div>

          <div className='relative flex-1'>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full bg-neutral-100 border-none rounded-xl md:rounded-full px-5 md:px-6 py-3 md:py-3 text-base md:text-lg outline-none focus:ring-4 focus:ring-[#c0e067]/30 transition-shadow duration-300 font-[fontnormal]'
            />
            <div className='absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity duration-300'>
              🔍
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className='border-b border-neutral-100 mx-6 md:mx-10' />

      <div className='px-4 md:px-10'>
        <Productscard 
          searchQuery={debouncedQuery} 
          onExploreDetail={handleOpenModal}
        />
      </div>

      {/* Product Modal */}
      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onPlaceOrder={handlePlaceOrder}
      />

      <Footer />
    </div>
  )
}

export default Products


