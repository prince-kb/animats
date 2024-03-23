import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
function Screen2() {
  return (
    <div data-scroll data-scroll-speed="0.1" data-scroll-section className="z-15 bg-zinc-800">
          {/* SLIDING TEXT */}
          <div className='w-full bg-zinc-800 ' >
      <div className="bg-[#004d43] pt-10 pb-10 rounded-t-[5vh]">
        <div className="flex border-t-[0.3vh] border-b-[0.3vh]  overflow-hidden whitespace-nowrap bg-[#004d43]">
          <motion.h1 className='text-[15vw] pt-[4vh] leading-none font-["Waltograph_UI"] tracking-none text-nowrap overflow' initial={{ x: "0%" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 5, repeat: Infinity }}>. LET'S DIVE IN..</motion.h1>
          <motion.h1 className='text-[15vw] pt-[4vh] leading-none font-["Waltograph_UI"] tracking-none text-nowrap overflow' initial={{ x: "0%" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 5, repeat: Infinity }}>. LET'S DIVE IN..</motion.h1>
        </div>
      </div>
    </div>
      <div className='border bg-[#cdea68] py-8  h-full px-6 z-10'>
        <h1 className=" leading-[7vw] pb-10 text-black text-[5vw] my-4 mb-8 border-b-2 border-zinc-700 tracking-tighter font-bold font-['Cavolini']">Here, we are growing securely keeping in mind that our aim is to develop something which is not yet developed, but has to be till now. </h1>
        <div className={`mx-4 ${window.innerWidth > 800 ? 'flex' : 'flex-col'}`}>
          <div className="flex-col items-center mx-12">
            <h2 className=' text-center text-zinc-700 font-semibold text-[4vw] font-["Arial"] mt-[4vh]'>OUR APPROACH</h2>
            <button className='mx-auto h-[6vw] w-[30vw] flex justify-center align-middle items-center text-[2.5vw] text-red-100 bg-zinc-800 rounded-full mt-[3vh] mb-[1vh]' >FRESH START
              <div className="bg-red-200 w-[2vw] h-[2vw] ml-[2vw] px-[1vw] mx-[1vw] rounded-full"></div>
            </button>
            <h2 className=' leading-[3vw] text-zinc-700 font-["Cavolini"] text-[2.5vw] pt-[5vh] px-[5vw] font-normal mt-4'>Things sometimes miss out in carrying other things forward as growing without resting becomes so important.</h2>
            <h2 className=' leading-[5.5vh] text-zinc-700 font-["Cavolini"] text-[2.6vw]  px-[5vw] font-semibold mb-8'>We cover those. </h2>
          </div>
          <div className="  h-[50vw] min-w-[30vw] w-[30vw] my-[4vw] rounded-3xl  bg-zinc-400"></div>
        </div>
      </div>
    </div>
  )
}

export default Screen2
