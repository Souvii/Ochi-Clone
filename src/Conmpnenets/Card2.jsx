import React, { useEffect, useState } from 'react';
function Card2() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltaX = mousex - window.innerWidth / 2;
      let deltaY = mousey - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  }, []);
  return (
    <>
      <div className='relative w-full h-[110vh] overflow-hidden bg-[#CDEA68] flex justify-center items-center flex-wrap'><p className=' text-zinc-900 text-[10vw] text-center font-bold leading-[8vw] font-sans'>READY <br />
TO START <br />
THE PROJECT? 
</p>

<div className='absolute w-[50%] z-[9] flex h-96 justify-center mt-[40%] gap-7'>
            <div className='w-[15vw] flex justify-center items-center h-[15vw] bg-zinc-100 rounded-full'>
              <div className='w-[10vw] relative items-center h-[10vw] bg-zinc-900 rounded-full'>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full absolute h-[3vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                  <div className='w-[3vw] h-[3vw] bg-zinc-200 rounded-full'></div>
                </div>
              </div>
            </div>
            <div className='w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full'>
              <div className='w-[10vw] h-[10vw] relative bg-zinc-900 rounded-full'>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                  <div className='w-[3vw] h-[3vw] bg-zinc-200 rounded-full'></div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='flex flex-col bg-[#CDEA68] justify-center items-center w-full h-[20vh]'>
          <div><button className='px-[2.5vw] py-[1vw] bg-zinc-900 uppercase rounded-full '>Start the project</button></div>
          <p className='text-zinc-900 my-4'>OR</p>
          <div className=''><button className='px-[2vw] py-[1vw] border-zinc-900 border text-zinc-900 uppercase rounded-full'>HELLO@OCHI.DESIGN</button></div>
          </div>
    </>
  )
}

export default Card2
