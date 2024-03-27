import image from '../assets/images/crown.png';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import '../Styles/style1.css'
import '../Styles/style2.css'
import { userContext } from '../App';
import me from '../assets/images/Subject-min.png'
function LandingPage() {
  const u = useContext(userContext);
  const {type}= u;

  useEffect(()=>{
      console.log(type);
      // console.log(window.innerWidth)
  })

  const textCol='bg-gradient-to-b from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'

  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className=' w-full h-screen bg-zinc-800 pt-2 z-[2]'>
          <div id="stars-container " className='w-full h-screen'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
          
      <div className={`${type === 'mobile' ? 'mt-[20vh]' : 'mt-[10vh]'} px-[4vw]`}>
        <div className={`${type==='mobile' ? ' flex-row-reverse ' : 'flex items-center'}`}>
        
        <div style={{}} className='relative flex justify-center items-center '>
          <div  className='w-[30vw]'>
          <img src={me} alt="None" className={`${type==='mobile' ? 'w-[50vw]' : 'w-[30vw]'} rounded-b-full inline-block`} />
          </div>
          <div className={`${type==='mobile' ? 'absolute border-8 border-${textCol} border-t-0 h-2/3 w-1/3 top-1/3 rounded-b-full rounded-t-full z-[-1] ' : 'absolute border-8 border-${textCol} border-t-0 h-2/3 w-full top-1/3 rounded-b-full rounded-t-full z-[-1] '}`}></div>
        </div>
        
        <div className=''>{["Hey There! , I am  ","Prince Kumar Barnwal","A Full Stack Web Developer passionate about creating interactive applications on the web"].map((item,index)=>(
            <div className="flex items-center" key={index} >               
            <h1 className={` ${type === 'mobile' ? 'text-[2vh] leading-[2vh] mx-[2vh]' : 'mx-[1vw] text-[2vw] leading-[3vw]'}  font-['cavolini']  `} key={index}>
              {index === 1  ?  
                <div className='flex mr-[2vw]'>
                  {item.split(' ').map((item1,index1)=>(<motion.span key={index1} initial={{x : "-100vw"}} animate={{x : "0"}} transition={{delay : .5*index1,ease : [0, 0.55, 0.45, 1]}}  className={`mx-2 text-[4.5vw] inline-block font-[cavolini] font-bold ${textCol} leading-[6vw]`}>{item1}</motion.span>))}
                </div>
              
              : item}
              
              </h1>
         </div>


        ))}
        </div>
        
        </div>


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
