import React from 'react'
import { motion } from 'framer-motion'
import dummyimage from '../assets/c2.png'
import { MdShoppingBasket } from 'react-icons/md'
import { useStateValue } from '../Context/StateProvider'
const RowContainer = ({flag,data}) => {
  // console.log(data)
  return (
    
    // main div-conatin multiple combined image and cart div combinations->card comp divs 
    <div className={`w-full flex items-center my-12 gap-3
     ${
      flag? `overflow-x-scroll scrollbar-none ` : `overflow-x-hidden flex-wrap`
      }
      `}
      >
        {
          data && data.map(item=>(
            <div key={item.id} className='w-300 min-w-[300px] md:min-w-[340px] md:w-340 hover:drop-shadow-lg shadow-md backdrop-blur-lg h-auto my-6 bg-cardOverlay rounded-lg p-2'> 
        <div className='w-full flex items-center justify-between'>
          <motion.img
          whileHover={{scale:1.2}}
          src={dummyimage} alt=""  className='w-40 -mt-8 drop-shadow-2xl'/>
        <motion.div
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
          <MdShoppingBasket size={18} className='text-white'/>
        </motion.div>
        </div>
        <div className="w-full flex flex-col justify-end items-end">
        <p className='text-textColor font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className=" mt-1 text-sm text-textColor">45 Calories</p>
        <p className='text-lg text-headingColor font-semibold text-center'>
          <span className='text-sm text-red-500'>$</span>3.45
        </p>
        </div>
      </div>
          ))
        }
    </div>
  )
}

export default RowContainer