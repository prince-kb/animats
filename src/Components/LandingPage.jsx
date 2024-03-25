import image from '../assets/images/crown.png';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import './BG/style.css'
import { userContext } from '../App';
function LandingPage() {
  const u = useContext(userContext);
  const {type}= u;

  useEffect(()=>{
      console.log(type);
      // console.log(window.innerWidth)
  })
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className=' w-full h-screen bg-zinc-800 pt-2 z-8'>
          <div id="stars-container " className='w-full h-screen'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
          
      <div className={`${type === 'mobile' ? 'mt-[30vh]' : 'mt-[20vh]'} px-[4vw]`}>
        {["we create","eye opening","presentations"].map((item,index)=>(
            <div className="masker flex items-center" key={index} > 
            {index===1 && <motion.div initial={{width : 0}} animate={{width : "12vw"}} transition={{duration : 1.5,ease :[0.87, 0, 0.13, 1]}} className="h-[6vw] w-[12vw] bg-red-100 flex justify-center items-center rounded-lg mx-2"  >
                <img src={image} alt="nothing" className='h-full w-auto' />
              </motion.div>}
              
            <h1 className={` ${type === 'mobile' ? 'text-[4.5vh] leading-[12vw]' : 'text-[8vw] leading-[6vw]'} uppercase font-['cavolini'] font-semibold tracking-tighter `} key={index}>{item}</h1>
         </div>
        ))}


        <div className="border-[1px] my-[8vh] mx-5"></div>


            <div className="flex justify-between items-center">
            <div className="flex justify-between w-1/2 mx-6 ">
        {["Come Join Us","There We GO!"].map((item,index)=>(
            <h2 key={index} className={`text-md font-light ${type === 'mobile' ? 'text-[3vh]' : 'text-[2.5vw]'} tracking-tighter`}>{item}</h2>
        ))}
        </div>
        <div className="">
            <button className={`mx-4 rounded-2xl p-[0.8vw] pr-[2vw] border-2 ${type === 'mobile' ? 'text-[3vh]' : 'text-[2.5vw]'} bg-black`}>Let's Start</button>
        </div>
            </div>

      </div>
      <div>
        
      </div>
      </div>

    </div>
  )
}

export default LandingPage
