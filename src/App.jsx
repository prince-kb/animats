import React, { createContext, useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import SlidingText from './Components/SlidingText'
import Screen2 from './Components/Screen2'
import Eye from './Components/Eye'

import LocomotiveScroll from 'locomotive-scroll';
import Screen3 from './Components/Screen3'
import './Components/BG/style.css'

export const userContext = createContext();


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  const [type, setType] = useState('desktop')

  useEffect(() => {

    const handleResize=()=>{
      if(window.innerWidth > 800){
        setType('desktop')
      }
      else if(window.innerWidth <=800) {
        setType('mobile')
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // const size = useWindowSize();
  // console.log(size);
  return (
    <div className='w-full h-full transition-all text-white'>
      <userContext.Provider value={{ type, setType }}>
        <div id="stars-container" className=' bg-zinc-900 text-white'>
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
