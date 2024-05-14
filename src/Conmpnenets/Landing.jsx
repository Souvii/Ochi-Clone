import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


function Landing() {
  
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="text-structure mt-[11vw] px-[5vw] ">
          {["WE CREATE", "EYE OPENING", 'PRESENTATION'].map((item, index) => (
            <div key={index} className="masker font-sans "> <div className='w-fit flex items-center'>
               {index ===1 && (<motion.div initial={{width:0}}animate={{width:'10vw'}} transition={{ease: [0.76 , 0 , 0.24 ,1 ],durations:2}}  className='w-[10vw] h-[6vw] relative -bottom-[0.5vw] rounded-lg bg-[url("https://images.unsplash.com/photo-1715348822749-fc4373841b70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8")]'></motion.div>)}
              <h1 className='uppercase text-9xl leading-[7VW]  tracking-tighter font-semibold'>{item}</h1></div>
            </div>
          ))}
        </div>
        <div className='border-t-[0.2vw] border-zinc-700 mt-[10vw] flex justify-between items-center py-[2vw] px-[5vw]'>
        {['For public and private companies', 'From first pitch to IPO'].map((item, index) => (
  <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
))}
<div className="start gap-5 px-[1vw] flex items-center"><div className='py-[0.4vw] px-[1vw] uppercase border-[1px] border-zinc-700 text-lg  font-light rounded-full '>Start the project</div>
<div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-700'><span className='-rotate-45'> <FaArrowUpLong /></span></div>
</div>
        </div>
      </div>
    </>
  );
}

export default Landing;
