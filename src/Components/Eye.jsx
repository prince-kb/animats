import React,{useEffect,useState} from 'react'
function Eye() {
    const [rotate,setRotate]= useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let x = e.clientX;
            let y = e.clientY;
    
            let dx = x - window.innerWidth/2;
            let dy = y - window.innerHeight/2;;
            let angle = Math.atan2(dy,dx)*(180/Math.PI);
            setRotate(angle-180)
            // console.log(rotate);
        })
    })
  return (
    <div >
        <div  className=" z-12 flex items-center justify-center h-screen w-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <div data-scroll data-scroll-speed="-.2" data-scroll-section className="flex absolute h-[35vh] w-[35vw] ">
                <div className="h-full w-1/2 bg-white rounded-full flex justify-center items-center">
                    <div className="h-2/3 w-2/3 relative bg-black rounded-full flex justify-center items-center">
                        <div style={{transform : ` rotate(${rotate}deg)`}} className="h-1/4 w-full rounded-lg ">
                            <div className="bg-white h-full w-1/4 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-1/2 bg-white rounded-full flex justify-center items-center">
                    <div className="h-2/3 w-2/3 relative bg-black rounded-full flex justify-center items-center">
                        <div style={{transform : `rotate(${rotate}deg)`}} className="h-1/4 w-full  rounded-lg">
                            <div className="bg-white h-full w-1/4 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eye
