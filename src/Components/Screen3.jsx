import React from 'react'
import bg1 from '../imgss/bg1.png';
import bg2 from '../imgss/bg2.jpg'
import { easeIn, motion,transform,useAnimation } from 'framer-motion';

function Screen3() {
    const anims=[useAnimation(),useAnimation()];
    const showAnimIn=(i)=>{
        anims[i].start({y : "0%"});
    }
    const showAnimOut=(i)=>{
        anims[i].start({y : "100%"});
    }
  return (
    <div className='w-full h-[70vh]  flex py-4'>
        <div className='px-6 pr-3 w-1/2 h-full '>
            <motion.div onHoverStart={()=>{showAnimIn(0)}} onHoverEnd={()=>{showAnimOut(0)}} className='flex justify-center items-center w-full h-full overflow-hidden bg-slate-500 rounded-3xl' >
                <img src={bg1} alt="nothing" className=' h-full' />
                <div className='translate-x-[25vw] overflow-hidden text-[10vh] font-semibold text-blue-500 font-["Cavolini"] absolute z-20 '>
                    <h1 className='tracking-tighter inline-block'>{
                        "STUDY".split("").map((item,index)=>(
                            <motion.span className='inline-block' initial={{y : "100%"}} animate={anims[0]} transition={{delay : .05*index,ease : [0.33, 1, 0.68, 1]}} >{item}</motion.span>
                        ))
                    }</h1>
                </div>
            </motion.div>
        </div>
        <div className='px-6 pl-3 w-1/2 h-full'>
            <motion.div onHoverStart={()=>{showAnimIn(1)}} onHoverEnd={()=>{showAnimOut(1)}} className='flex justify-center items-center w-full h-full overflow-hidden bg-slate-500 rounded-3xl' >
                <img src={bg2}  alt="nothing" className='h-full' onMouseEnter={()=>{style = {transform : "scale(1.5)"}}} onMouseLeave={{transform : "scale(1)"}}/>
                <div className='-translate-x-[25vw] overflow-hidden text-[10vh] font-semibold text-blue-500 font-["Cavolini"] absolute z-20 '>
                    <h1  className=' inline-block'>{
                        "LOVE".split("").map((item,index)=>(
                            <motion.span className='inline-block' initial={{y : "100%"}} animate={anims[1]} transition={{delay : .05*index,ease : [0.33, 1, 0.68, 1]}}>{item}</motion.span>
                        ))
                    }</h1>
                </div>
            </motion.div>
        </div>
      
    </div>
  )
}

export default Screen3
