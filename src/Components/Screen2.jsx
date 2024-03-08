import React from 'react'

function Screen2() {
  return (
    <div data-scroll data-scroll-speed="0.3" data-scroll-section className="z-15 bg-zinc-800">
        <div className='border bg-[#cdea68] py-8  h-full px-6 z-10'>
      <h1 className=" leading-[12vh] pb-10 text-black text-[5vw] my-4 mb-8 border-b-2 border-zinc-700 tracking-tighter font-bold font-['Cavolini']">Here, we are growing securely keeping in mind that our aim is to develop something which is not yet developed, but has to be till now. </h1>
        <div className="mx-4 flex">
            <div className="flex-col items-center mx-12">
            <h2 className=' text-center text-zinc-700 font-semibold text-[5vh] font-["arial"] mt-[4vh]'>OUR APPROACH</h2>
            <button className='mx-auto h-[8vh] w-[15vw] flex justify-center align-middle items-center text-[2.5vh] text-red-100 bg-zinc-800 rounded-full mt-[3vh] mb-[1vh]' >FRESH START
                <div className="bg-red-100 h-[1.5vh] w-[1.5vh] ml-[2vw] rounded-full"></div>
            </button>
            <h2 className=' leading-[5.5vh] text-zinc-700 font-["Cavolini"] text-[1.6vw] pt-[5vh] px-[10vw] font-normal mt-4'>Things sometimes miss out in carrying other things forward as growing without resting becomes so important.</h2>
            <h2 className=' leading-[5.5vh] text-zinc-700 font-["Cavolini"] text-[1.6vw]  px-[10vw] font-semibold mb-8'>We cover those. </h2>
            </div>
            <div className="  min-h-[60vh] min-w-[30vw] max-w-[35vw] max mr-[6vw] rounded-3xl  bg-zinc-400"></div>
        </div>
    </div>
    </div>
  )
}

export default Screen2
