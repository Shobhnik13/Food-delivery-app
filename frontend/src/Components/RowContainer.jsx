import React from 'react'
import { motion } from 'framer-motion'
import dummyimage from '../assets/c2.png'
import { MdShoppingBasket } from 'react-icons/md'
const RowContainer = ({flag}) => {
  return (
    // main div-conatin multiple combined image and cart div combinations->card comp divs 
    <div className={`w-full  my-12
     ${
      flag? `overflow-x-scroll` : `overflow-x-hidden`
      }
      `}
      >
        {/* card comp div  */}
        {/* main card comp div which will provide the box outline and contain other sub divs(image->cart)  */}
        <div className='w-300 md:w-340 hover:drop-shadow-lg shadow-md backdrop-blur-lg h-auto my-6 bg-cardOverlay rounded-lg p-2'> 
          {/*div1 ->  image div->will contain cart diuv too inside image div too*/}
          <div className='w-full flex items-center justify-between'>
            <motion.img
            whileHover={{scale:1.2}}
            src={dummyimage} alt=""  className='w-40 -mt-8 drop-shadow-2xl'/>
            {/* cart div inside image div  */}
          <motion.div
          whileTap={{scale:0.75}}
          className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket size={18} className='text-white'/>
          </motion.div>
          </div>
        {/* div2-> for all the caloric and name information imn cols*/}
          <div className="w-full flex flex-col justify-end items-end">
          <p className='text-textColor font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
          <p className=" mt-1 text-sm text-textColor">45 Calories</p>
          <p className='text-lg text-headingColor font-semibold text-center'>
            <span className='text-sm text-red-500'>$</span>3.45
          </p>
          </div>
        </div>
    </div>
  )
}

export default RowContainer