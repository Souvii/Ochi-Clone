import React from 'react'
import Navbar from './Conmpnenets/Navbar'
import Landing from './Conmpnenets/Landing'
import Marquee from './Conmpnenets/Marquee'
import About from './Conmpnenets/About'
import Eyes from './Conmpnenets/Eyes'
import Featured from './Conmpnenets/Featured'
import Cards from './Conmpnenets/Cards'
import Card2 from './Conmpnenets/Card2'
import Footer from './Conmpnenets/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className="w-full min-h-screen bg-zinc-900 text-white">
    <Navbar/>
    <Landing />
    <Marquee />
    <About/>
    <Eyes />
    <Featured />
    <Cards />
    <Card2 />
    <Footer />
    </div>
    </>
  )
}

export default App
