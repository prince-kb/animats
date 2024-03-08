import React from 'react'
import image from '../imgss/crown.png';
function Navbar() {
  return (
    <div className='w-full px-20 py-8 flex justify-between items-center fixed bg-zinc-800 z-[10]'>
        <div className="logo">
            <img src={image} alt="Nothing" className='h-24'/>
        </div>
        <div className="links flex gap-10">
            {["Home","About","Services","Contact"].map((item,index)=>(
                <a key={index} href={item} className={`text-lg capitalize ${index === 3 && "ml-[10vh]"} font-light`} >{item}</a>
            ))}
        </div>
      
    </div>
  )
}

export default Navbar
