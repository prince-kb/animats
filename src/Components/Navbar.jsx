import React,{useContext} from 'react'
import { userContext } from '../App';
import image from '../assets/images/crown.png';
function Navbar() {

  const n = useContext(userContext);
  let {type}=n;

  return (
    <div className='w-full px-[1vw] py-[2vh] flex justify-between items-center fixed z-[10] font-[arial]'>
        <div className="logo">
            <img src={image} alt="Nothing" className=' h-24 w-auto m-[2vh]'/>
        </div>
        <div className="links flex gap-[3vw] mr-1">
            {["Home","About","Services","Contact"].map((item,index)=>(
                <a key={index} href={item} className={`${type === 'mobile' ? 'text-[2vh]' : 'text-[2vw]'} capitalize ${index === 3 && "ml-[4vw]"} `} >{item}</a>
            ))}
        </div>
        {/* <hr/> */}
      
    </div>
  )
}

export default Navbar
