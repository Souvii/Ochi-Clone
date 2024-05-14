import React from 'react'

function About() {
  return (
    <>
      <div  className='w-full p-20 bg-[#CDEA68] text-black font-sans leading-[2.7vw]'>
        <h1 className='text-[2.9vw] text-justify font-normal'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className="w-full border-t-[0.1vw] pt-[3vw] border-zinc-900 mt-[3vw] flex overflow-x-hidden">
          <div className='w-1/2 '>
            <h1 className='text-[4vw] '>Our Approach:</h1>
            <button className='px-[1.5vw] py-[0.2vw] flex items-center gap-2 text-[1.5vw]  font-light mt-[2vw] text-white bg-zinc-900 rounded-full'>Read More
            <div className='w-[1.5vw] h-[1.5vw] rounded-full  bg-white'></div></button>
          </div>
          <div className='w-[50%] h-[60vh] bg-red-700 rounded-xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-cover' ></div>
        </div>
      </div>
    </>
  )
}

export default About
