import React from 'react'

function Cards() {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32'>
      <div className='cardcontainer h-[50vh] w-1/2 '>
        <div className="card w-full relative rounded-xl  h-full flex justify-center items-center bg-[#004D43]">
            <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
    <button className='absolute left-10 bottom-10 px-5 rounded-full py-1 border-2 border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer  h-[50vh] w-1/2 flex gap-5 bg-'>
        <div className="card w-1/2 rounded-xl h-full flex justify-center items-center relative bg-[#000a09]">
            <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 rounded-full py-1 border-2 border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
        <div className="card w-1/2 rounded-xl  h-full bg-zinc-600 flex justify-center items-center relative">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-10 bottom-10 px-5 rounded-full py-1 border-2 border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Cards
