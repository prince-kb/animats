import React, { createContext, useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import SlidingText from './Components/SlidingText'
import Screen2 from './Components/Screen2'
import Eye from './Components/Eye'

import LocomotiveScroll from 'locomotive-scroll';
import Screen3 from './Components/Screen3'
import './Components/BG/style.css'
import { motion,  useScroll} from 'framer-motion'

export const userContext = createContext();


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const t = ()=>{
    if(window.innerWidth > 800)
      return 'desktop'
    return 'mobile'
  }
  const [type, setType] = useState(t)
  let {scrollYProgress} = useScroll();


  useEffect(() => {

    const handleResize=()=>{
      if(window.innerWidth > 800){
        setType('desktop')
      }
      else if(window.innerWidth <=800) {
        setType('mobile')
      }
    };


/*     const ppp=()=>{console.log(scrollYProgress)}
    window.addEventListener("scroll", ppp); */


    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
     /*  window.removeEventListener("scroll", ppp); */
    }
  }, []);



  // const size = useWindowSize();
  // console.log(size);
  return (
    <div className='w-full h-full transition-all text-white'>
      <userContext.Provider value={{ type }}>
        <div id="stars-container" className='  text-white'>
        <motion.div
        id="progress-bar" className='z-[2]'
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <Navbar />
          <LandingPage />
          <SlidingText />
          <Screen2 />
          <Eye />
          <Screen3 />
        </div>
      </userContext.Provider>
    </div>

  )
}

export default App
