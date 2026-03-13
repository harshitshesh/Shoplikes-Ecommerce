import React, { useRef } from 'react'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLocation } from 'react-router-dom'
const Loadstair = (props) => {

    const mainpage = useRef(null)
    const loadref = useRef(null)
    const currpath = useLocation().pathname

  useGSAP(function(){
    const tl = gsap.timeline()
    tl.to(loadref.current,{
      display:"block"
    })
  tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.20
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:0.20
      }
    })

    tl.to(loadref.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:"0%",
    })

    gsap.to(mainpage.current, {
   

  },
 )
  },[currpath])


  return (
    <div>
      

      
    <div ref={loadref} className="h-screen w-full  fixed z-50 top-0 ">
      <div className="h-full w-full flex">

      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      </div>

    </div>

    <div ref={mainpage}>
        {props.children}
    </div>
    </div>
  )
}

export default Loadstair
