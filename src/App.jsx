import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import SlidingText from './Components/SlidingText'
import Screen2 from './Components/Screen2'
import Eye from './Components/Eye'

import LocomotiveScroll from 'locomotive-scroll';
function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <SlidingText/>
      <Screen2/>
      <Eye/>
    </div>
  )
}

export default App
