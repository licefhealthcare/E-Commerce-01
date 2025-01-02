import React from 'react'

const Hero = () => {
  return (
    <div className=' relative w-[1440px] m-auto h-[392px] px-40 flex items-center  border-2 border-black'>
      <img src="../../../public/hero.svg" alt="" srcset="" loading='lazy' className='w-[100%] h-[100%] '  />
      <div className=' absolute left-60     flex flex-row gap-2 items-center justify-center'>
        <a href="#">Home</a>
         <p> > </p>
        <a href="#">Shop</a>
       
      </div>
     

      

       
    </div>

    
    
  )
}

export default Hero