import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <>
      <div data-scroll data-scroll-section  data-scroll-speed=".1" className='w-full py-[2vw]  bg-[#004D43] rounded-tl-2xl rounded-tr-2xl '>
      <div className="text border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden mr-2">
  <motion.h1
    initial={{ x: "0%" }} // Corrected from x:"0"
    animate={{ x: "-100%" }}
    transition={{ repeat:Infinity,ease: "linear", duration: 10 }}
    className='text-[15vw] font-bold gap-2 leading-none uppercase pb-[1.5vw]'
  >
    We are ochi.
  </motion.h1>
  <motion.h1
    initial={{ x: "0%" }} // Corrected from x:"0"
    animate={{ x: "-100%" }}
    transition={{repeat:Infinity, ease: "linear", duration: 10 }}
    className='text-[15vw] font-bold uppercase gap-2 leading-none'
  >
    We are ochi.
  </motion.h1>
  <motion.h1
    initial={{ x: "0%" }} // Corrected from x:"0"
    animate={{ x: "-100%" }}
    transition={{repeat:Infinity, ease: "linear", duration: 10 }}
    className='text-[15vw] font-bold uppercase gap-2 leading-none'
  >
    We are ochi.
  </motion.h1>
</div>

      </div>
    </>
  )
}

export default Marquee
