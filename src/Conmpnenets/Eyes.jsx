import React, { useEffect, useState } from 'react';

function Eyes() {
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
      <div className='eyes w-full h-screen overflow-hidden relative'>
        <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-full bg-[#EEDFDF] flex items-center justify-center'>
          <svg className='w-full h-screen' width="1512" height="982" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
            {    <svg className='w-full  h-screen ' width="1512" height="982" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1512" height="982" fill="#1E1E1E"/>
<rect width="1512" height="982" fill="#EEDFDF"/>
<rect x="147" y="121" width="1217" height="740" fill="#004D43"/>
<ellipse cx="242" cy="516" rx="77" ry="75" fill="#B84141"/>
<ellipse cx="1032" cy="626" rx="77" ry="75" fill="#AD6B2F"/>
<ellipse cx="224" cy="776" rx="77" ry="75" fill="#37AF19"/>
<ellipse cx="393" cy="786" rx="77" ry="75" fill="#AD6B2F"/>
<ellipse cx="562" cy="762" rx="77" ry="75" fill="#D03C3C"/>
<ellipse cx="1246" cy="380" rx="77" ry="75" fill="#B84141"/>
<ellipse cx="738" cy="762" rx="77" ry="75" fill="#AD6B2F"/>
<ellipse cx="926" cy="786" rx="77" ry="75" fill="#37AF19"/>
<ellipse cx="1130" cy="776" rx="77" ry="75" fill="#77CFC4"/>
<ellipse cx="1275" cy="626" rx="77" ry="75" fill="#37AF19"/>
</svg>}
          </svg>
          <div className='absolute w-[50%] z-[9] flex h-96 justify-center items-center gap-7'>
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
      </div>
    </>
  );
}

export default Eyes;
