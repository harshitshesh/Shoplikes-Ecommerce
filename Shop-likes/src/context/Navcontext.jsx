import React, { createContext, useState } from 'react'


export const Navbarcontext = createContext()
const Navcontext = ({children}) => {
  const [navopen,setnavopen] = useState(false)
  return (
    <div>
<Navbarcontext value={[navopen,setnavopen]}>

      {children}

</Navbarcontext>
    </div>
  )
}

export default Navcontext
