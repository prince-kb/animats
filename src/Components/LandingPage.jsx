import React from 'react'
import image from '../assets/images/crown.png';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function LandingPage() {
  useEffect(()=>{
      console.log(window.innerHeight,window.innerWidth)
  })
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className=' w-full h-screen bg-zinc-800 pt-2 z-8'>
      <div className={`${window.innerWidth > 800 ? 'mt-[10vw]' : 'mt-[20vw]'} px-[4vw]`}>
        {["we create","eye opening","presentations"].map((item,index)=>(
            <div className="masker flex items-center" key={index} > 
            {index===1 && <motion.div initial={{width : 0}} animate={{width : "12vw"}} transition={{duration : 1.5,ease :[0.87, 0, 0.13, 1]}} className="h-[6vw] w-[12vw] bg-red-100 flex justify-center items-center rounded-lg mx-2"  >
                <img src={image} alt="nothing" className='h-full w-auto' />
              </motion.div>}
              

            <h1 className={` ${window.innerWidth > 800 ? 'leading-[7vw]' : 'leading-[10vw]'} uppercase font-['cavolini'] ${window.innerWidth > 800 ? 'text-[7vw]' : 'text-[10vw]'} font-semibold tracking-tighter `} key={index}>{item}</h1>
         </div>
        ))}
        <div className="border-[1px] my-[8vh] mx-5"></div>
            <div className="flex justify-between items-center">
            <div className="flex justify-between w-1/2 mx-6 ">
        {["Come Join Us","There We GO!"].map((item,index)=>(
            <h2 key={index} className=' text-md font-light text-[3vw] tracking-tighter'>{item}</h2>
        ))}
        </div>
        <div className="">
            <button className='mx-4 rounded-2xl p-[0.8vw] pr-[2vw] border-2 text-[2.5vw] bg-black'>Let's Start</button>
        </div>
            </div>

      </div>
    </div>
  )
}

export default LandingPage
