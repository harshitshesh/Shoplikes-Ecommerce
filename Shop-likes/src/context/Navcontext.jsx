import React, { createContext, useState } from 'react'


export const Navbarcontext = createContext()
const Navcontext = ({children}) => {
  const [navopen,setnavopen] = useState(false)
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isLoginClosable, setIsLoginClosable] = useState(true)

  return (
    <div>
<Navbarcontext value={{ 
  navopen, 
  setnavopen, 
  isAnyModalOpen, 
  setIsAnyModalOpen,
  isLoginModalOpen,
  setIsLoginModalOpen,
  isLoginClosable,
  setIsLoginClosable
}}>

      {children}

</Navbarcontext>
    </div>
  )
}

export default Navcontext
