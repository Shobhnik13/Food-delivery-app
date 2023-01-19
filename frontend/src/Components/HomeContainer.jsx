import React from 'react'
import Delivery from '../assets/delivery.png'
import HeroBg from '../assets/heroBg.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen' id='home'>
         {/* left side view */}
       <div className="flex flex-col flex-1 py-2 justify-center items-start  gap-6">
        {/* div 1 will contain the headline and bike image  */}
          <div className='flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full '>
            {/* p  */}
          <p className='text-orange-500 font-semibold px-4 py-1'>Bike Delivery</p>
          {/* div for image  */}
          <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-xl bg-white'>
            <img src={Delivery} alt="" className='w-full h-full object-contain'/>
          </div>
          </div>
          {/* div2  */}
        <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p> 
        {/* div3  */}
        <p className='text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam consequuntur beatae quasi laudantium quam molestiae ad fugiat, quo explicabo nulla expedita dolorem ab quidem autem inventore, repellat possimus unde!</p>
        {/* div 4 */}
        <button className='bg-gradient-to-br from-orange-400 to-orange-500 py-2 rounded-lg hover:shadow-lg w-full md:w-auto px-4 transition-all duration-100 ease-in-out'>Order Now</button>
       </div>



       {/* right view  */}
       <div className="flex-1 py-2 items-center relative ">
        {/* div 1 for img  */}
            <img src={HeroBg} alt="" className='w-full md:w-auto h-420 ml-auto lg:h-[650px]' />
        {/* div 2  */}
        <div className='absolute flex w-full h-full top-0 left-0 items-center justify-center px-16 py-4'>
            <div className='w-190  bg-red-200 p-2'>
                s
            </div>
        </div>
        </div>
    
    </section>
  )
}

export default HomeContainer