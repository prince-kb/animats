import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../App';
import image from '../assets/images/crown.png';
import './BG/style.css'
import { scrolll } from './hooks/scroll';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Navbar() {
  const { y, x, scrollDirection } = scrolll();
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s ease-in"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s ease-out",
      transform: "translateY(-100%)"
    }
  }
  const n = useContext(userContext);
  let { type } = n;
  return (
    <>
      {
        <motion.div initial={{}} animate={{}} style={scrollDirection === "down" ? styles.active: styles.hidden}
          className='w-full px-[1vw] py-[2vh] flex justify-between items-center fixed z-[4] font-[arial]'
        >
          <div className="logo">
            <img src={image} alt="Nothing" className={` ${type === 'desktop' ? 'h-24' : 'h-16 '} w-auto m-[2vh]`} />
          </div>
          <div className="links flex gap-[3vw] mr-1">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <Link key={index} to={item} className={`${type === 'mobile' ? 'text-[2vh]' : 'text-[2vw]'} capitalize ${index === 3 && "ml-[4vw]"} `} >{item}</Link>
            ))}
          </div>
          {/* <hr/> */}

        </motion.div>}
    </>
  )
}

export default Navbar
