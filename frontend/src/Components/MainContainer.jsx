import React from 'react'
import Delivery from '../assets/delivery.png'
const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
       {/* mobile view  */}
       {/* grid grid-cols-1  */}
       {/* it will contain every col of the grid as one same sized div  */}
       <div className="flex flex-col flex-1 py-2 justify-center items-start md:items-center">
        {/* div 1 will contain the headline and bike image  */}
          <div className='flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full'>
            {/* p  */}
          <p className='text-orange-500 font-semibold px-4 py-1'>Bike Delivery</p>
          {/* div for image  */}
          <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-xl bg-white'>
            <img src={Delivery} alt="" className='w-full h-full object-contain'/>
          </div>
          </div>
          

       </div>


       {/* laptop view  */}
       {/* md:grid-cols-2  */}
       {/* it will contain every col of the grid as the 2 same sized div  */}
       <div className="flex-1 py-2"></div>
    
    </div>
  )
}

export default MainContainer