import React, { useState } from 'react'
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.jpg';
import {motion,transform,useAnimation } from 'framer-motion';

function Screen3() {
    const anims=[useAnimation(),useAnimation()];
    const [p,setP]=useState(false);
    const showAnimIn=(i)=>{
        setP(true);
        anims[i].start({y : "0%"});
    }
    const showAnimOut=(i)=>{
        setP(false);
        anims[i].start({y : "100%"});
    }
    const h = 'bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent';

  return (
    <div className={`${window.innerWidth > 800 ? 'flex ' : 'flex-col'}  w-full h-[70vh]  py-4`}>
        <div className='px-6 pr-3 w-1/2 h-full '>
            <motion.div onHoverStart={()=>{showAnimIn(0)}} onHoverEnd={()=>{showAnimOut(0)}} className={`${p ? ' scale-90 transition : "ease"' : ''} flex justify-center items-center w-full h-full overflow-hidden bg-slate-500 rounded-3xl`} >
                <img src={bg1} alt="nothing" className=' w-full' />
                <div className='translate-x-[25vw] overflow-hidden text-[10vh] font-semibold  font-["Cavolini"] absolute z-20 '>
                    <h1 className='tracking-tighter inline-block'>{
                        "STUDY".split("").map((item,index)=>(
                            <motion.span key={index} className={` ${h} inline-block`} initial={{y : "100%"}} animate={anims[0]} transition={{delay : .05*index,ease : [0.33, 1, 0.68, 1]}} >{item}</motion.span>
                        ))
                    }</h1>
                </div>
            </motion.div>
        </div>


        <div className='px-6 pl-3 w-1/2 h-full'>
            <motion.div onHoverStart={()=>{showAnimIn(1)}} onHoverEnd={()=>{showAnimOut(1)}} className='flex justify-center items-center w-full h-full overflow-hidden bg-slate-500 rounded-3xl' >
                <img src={bg2}  alt="nothing" className='h-full'/>
                <div className='-translate-x-[25vw] overflow-hidden text-[10vh] font-semibold text-blue-500 font-["Cavolini"] absolute z-20 '>
                    <h1  className=' inline-block'>{
                        "LOVE".split("").map((item,index)=>(
                            <motion.span key={index} className={` ${h} inline-block`} initial={{y : "100%"}} animate={anims[1]} transition={{delay : .05*index,ease : [0.33, 1, 0.68, 1]}}>{item}</motion.span>
                        ))
                    }</h1>
                </div>
            </motion.div>
        </div>
      
    </div>
  )
}

export default Screen3
