import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
  const [hoverA, setHoverA] = useState(false);
  const [hoverB, setHoverB] = useState(false);

  return (
    <>
      <div className='w-full py-10 '>
        <div className='w-full px-[5vw] bg-zinc-900 font-sans font-bold border-b-[0.2vw] border-zinc-600 pb-[2vw]'>
          <h1 className='text-[4vw] tracking-tighter '> Featured Projects</h1>
        </div>
        <div>
          <div className="cards w-full flex gap-[5vw] px-[5vw] py-[2vw] ">
            <div 
              onMouseEnter={() => setHoverA(true)} 
              onMouseLeave={() => setHoverA(false)} 
              className="card-container w-1/2 h-[65vh] relative"
            >
              <h1 className={`absolute flex overflow-hidden z-[9] top-1/2 text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 left-[100%] text-[6vw] tracking-tighter leading-none font-bold ${hoverA ? 'animate-h1' : ''}`}>
                {"VISE".split('').map((item, index) => (
                  <motion.span key={index} initial={{ y: "100%" }} animate={hoverA ? { y: "0" } : { y: "100%" }} className='inline-block'>{item}</motion.span>
                ))}
              </h1>
              <div className='card w-full h-full  rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
              </div>
            </div>
            <div 
              onMouseEnter={() => setHoverB(true)} 
              onMouseLeave={() => setHoverB(false)} 
              className="card-container w-1/2 h-[65vh] relative"
            >
              <h1 className={`absolute flex overflow-hidden z-[9] top-1/2 text-[#CDEA68] translate-x-1/2 -translate-y-1/2 right-full text-[6vw] tracking-tighter leading-none font-bold ${hoverB ? 'animate-h1' : ''}`}>
                {"FYDE".split('').map((item, index) => (
                  <motion.span key={index} initial={{ y: "100%" }} animate={hoverB ? { y: "0" } : { y: "100%" }} className='inline-block'>{item}</motion.span>
                ))}
              </h1>
              <div className='card w-full h-full  rounded-xl overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured
