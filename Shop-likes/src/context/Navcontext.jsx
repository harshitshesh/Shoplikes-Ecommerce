import React, { createContext, useState } from 'react'


export const Navbarcontext = createContext()
const Navcontext = ({children}) => {
  const [navopen,setnavopen] = useState(false)
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false)
  return (
    <div>
<Navbarcontext value={{ navopen, setnavopen, isAnyModalOpen, setIsAnyModalOpen }}>

      {children}

</Navbarcontext>
    </div>
  )
}

export default Navcontext
