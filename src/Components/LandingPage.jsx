import React from 'react'
import image from '../imgss/crown.png';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className=' w-full h-screen bg-zinc-800 pt-2 z-8'>
      <div className="texts mt-48 px-10">
        {["we create","eye opening","presentations"].map((item,index)=>(
            <div className="masker flex" key={index} > 
            {index===1 && <motion.div initial={{width : 0}} animate={{width : "12vw"}} transition={{duration : 1.5,ease :[0.87, 0, 0.13, 1]}} className="h-[6vw] w-[12vw] bg-red-100 flex justify-center rounded-lg mx-2"  >
                <img src={image} alt="nothing" className='h-full w-auto' />
              </motion.div>}
            <h1 className=" leading-[6vw] uppercase font-['cavolini'] text-[7vw] font-semibold tracking-tighter " key={index}>{item}</h1>
         </div>
        ))}
        <div className="border-[1px] my-[12vh] mx-5"></div>
            <div className="flex justify-between ">
            <div className="flex justify-between w-1/2 mx-6 ">
        {["Come Join Us","There We GO!"].map((item,index)=>(
            <p key={index} className='text-md font-light text-loght tracking-tighter'>{item}</p>
        ))}
        </div>
        <div className="">
            <button className='mx-4 rounded-lg p-1 border-2 bg-black'>Let's Start</button>
        </div>
            </div>

      </div>
    </div>
  )
}

export default LandingPage
