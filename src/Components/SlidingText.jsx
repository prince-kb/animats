import React from 'react'
import {motion} from 'framer-motion'
function SlidingText() {
  return (
    
        <div data-scroll data-scroll-speed=".1" className= 'w-full bg-zinc-800 ' >
            <div className="bg-[#004d43] pt-10 pb-10 rounded-t-[5vh]">
            <div className="flex border-t-[0.3vh] border-b-[0.3vh]  overflow-hidden whitespace-nowrap bg-[#004d43]">
                <motion.h1 className='text-[28vh] pt-[4vh] leading-none font-["Waltograph_UI"] tracking-none text-nowrap overflow' initial={{x : "0%"}} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 5 , repeat : Infinity }}>. LET'S DIVE IN..</motion.h1>
                <motion.h1 className='text-[28vh] pt-[4vh] leading-none font-["Waltograph_UI"] tracking-none text-nowrap overflow' initial={{x : "0%"}} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 5 , repeat : Infinity }}>. LET'S DIVE IN..</motion.h1> 
                </div>
            </div>
    </div>

  )
}

export default SlidingText
