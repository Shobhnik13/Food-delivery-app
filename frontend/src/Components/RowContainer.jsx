import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import dummyimage from '../assets/c2.png'
import Notfound from '../assets/Notfound.svg'
import { MdShoppingBasket } from 'react-icons/md'
import { useStateValue } from '../Context/StateProvider'
const RowContainer = ({flag,data,scrollValue}) => {
  // console.log(data)
  const rowScroll=useRef()
  useEffect(()=>{
    rowScroll.current.scrollLeft +=scrollValue
  },[scrollValue])
  return (
    
    // main div-conatin multiple combined image and cart div combinations->card comp divs 
    <div ref={rowScroll} className={`w-full scroll-smooth flex items-center my-12 gap-3
     ${
      flag? `overflow-x-scroll scrollbar-none ` : `overflow-x-hidden flex-wrap justify-center`
      }
      `}
      >
        {data && data.map(item=>(
            <div key={item.id} className='w-300 min-w-[300px] md:min-w-[340px] md:w-340 hover:drop-shadow-lg shadow-md backdrop-blur-lg h-[200px] my-6 bg-cardOverlay rounded-lg p-2'> 
        <div className='w-full flex items-center justify-between'>
          <motion.img
          whileHover={{scale:1.2}}
          src={item.imageURL} alt=""  className='-mt-8 w-40 h-full object-contain drop-shadow-2xl'/>
        <motion.div
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
          <MdShoppingBasket size={18} className='text-white'/>
        </motion.div>
        </div>
        <div className="w-full flex flex-col justify-end items-end -mt-8">
        <p className='text-textColor font-semibold text-base md:text-lg '>{item.title}</p>
        <p className=" mt-1 text-sm text-textColor">{item.calories}</p>
        <p className='text-lg text-headingColor font-semibold text-center'>
          <span className='text-sm text-red-500'>$</span>{item.price}
        </p>
        </div>
      </div>
          ))
              }
    </div>
  )
}

export default RowContainer