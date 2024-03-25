import React, { useContext,useRef} from 'react'
import bg1 from '../assets/images/newsman.png';
import bg2 from '../assets/images/textbox.png';
import { userContext } from '../App';
import {motion,useAnimation,useInView } from 'framer-motion';
import './BG/style.css'
function Screen3() {
    const n = useContext(userContext)
    let {type} = n;
    const anims=[useAnimation(),useAnimation()];
    const anims1=[useAnimation(),useAnimation()];
    const showAnimIn=(i)=>{
        anims[i].start({y : "0%"});
    }
    const showAnimOut=(i)=>{
        anims[i].start({y : "100%"});
    }
    const showAnimIn1=(i)=>{
        anims1[i].start({opacity : "80%",transform : "scale(1.2)"});
    }
    const showAnimOut1=(i)=>{
        anims1[i].start({opacity : "100%",transform : "scale(1)"});
    }


    
    const h = 'bg-gradient-to-b from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent';

    const ref = useRef();
    let p = useInView(ref);

  return (
    <div data-scroll data-scroll-speed='0.2' className={``}>
         
         <div id="stars-container" className='mb-[5vh]'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div ref={ref} className="overflow-hidden">
         {p && <motion.h1 initial={{y : "100%"}} animate={{y : "0"}} transition={{delay : 0.5 ,ease : [0.33, 1, 0.68, 1]}} className={`text-[4vh] font-[arial] text-center mt-[8vh] `}>PROJECTS</motion.h1>}
        </div>
        { type === 'desktop' ? <div className={`text-white flex w-full  py-[2vh] `}> 
            <div className='px-6 pr-3 w-1/2 h-full '>
            <motion.div onHoverStart={()=>{showAnimIn(0)}} onHoverEnd={()=>{showAnimOut(0)}} className={` flex justify-center items-center w-full h-full overflow-hidden  rounded-3xl`} >
                <a target='_blank' href="https://news-man-one.vercel.app/" className=''><img src={bg1} alt="nothing" className='rounded-2xl w-full h-auto' /></a>
                    <div className='translate-x-[25vw] overflow-hidden text-[5vw] font-semibold  font-["Cavolini"] absolute '>
                    <h1 className='tracking-tighter inline-block '>{
                        "NEWSMAN".split("").map((item,index)=>(
                            <motion.span key={index} className={` ${h} inline-block`} initial={{y : "100%"}} animate={anims[0]} transition={{delay : .05*index,ease : [0.33, 1, 0.68, 1]}} >{item}</motion.span>
                        ))
                    }</h1>
                </div>
            </motion.div>
        </div>


        <div className='px-6 pl-3 w-1/2 h-full'>
            <motion.div onHoverStart={()=>{showAnimIn(1)}} onHoverEnd={()=>{showAnimOut(1)}} className={`flex justify-center items-center w-full h-full overflow-hidden rounded-3xl`} >
            <a target='_blank' href="https://multipurposetextbox.vercel.app/" className=''><img src={bg2}  alt="nothing" className=' rounded-2xl w-full h-auto'/></a>
                <div className='-translate-x-[25vw] overflow-hidden text-[5vw] font-semibold  font-["Cavolini"] absolute '>
                    <h1  className=' inline-block'>{
                        "TEXTBOX".split("").map((item,index)=>(
                            <motion.span key={index} className={` ${h} inline-block`} initial={{y : "100%"}} animate={anims[1]} transition={{delay : .05*index,ease : [0.33, 1, 0.68, 1]}}>{item}</motion.span>
                        ))
                    }</h1>
                </div>
            </motion.div>
        </div>
        </div>
         : <div className='flex-col items-center'>
            <motion.div className='relative' onHoverStart={()=>{showAnimIn1(0)}} onHoverEnd={()=>{showAnimOut1(0)}} initial={{opacity : "100%",transform : "scale(1)"}} animate={anims1[0]} transition={{delay : 0,ease : [0.33, 1, 0.68, 1]}}>
                <a target='_blank' href="https://news-man-one.vercel.app/" className=" flex justify-center">
                    <img src={bg1} alt="nothing" className=' rounded-2xl w-3/4 h-auto my-[2vh]' />
                </a>
                <h1 className="font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 absolute text-[3vh] text-black " >NewsMan</h1>
            </motion.div>
            <motion.div className="relative" onHoverStart={()=>{showAnimIn1(1)}} onHoverEnd={()=>{showAnimOut1(1)}} initial={{opacity : "100%",transform : "scale(1)"}} animate={anims1[1]} transition={{delay : 0,ease : [0.33, 1, 0.68, 1]}}>
                <a target='_blank' href="https://multipurposetextbox.vercel.app/" className=' flex justify-center'>
                <img src={bg2}  alt="nothing" className=' rounded-2xl w-3/4 h-auto my-[2vh]'/>
                </a>
                <h1 className="font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 absolute text-[3vh] text-black " >Multipurpose TextBox</h1>
            </motion.div>



             </div>

        }
      </div>
    </div>
  )
}

export default Screen3
