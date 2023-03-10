import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft,MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../Context/StateProvider'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'
const MainContainer = () => {
  const [scrollValue,setScrollValue]=useState(0)
  const [{fooditems,cartShow},dispatch]=useStateValue()
  useEffect(()=>{
  },[scrollValue,cartShow])
  return (
    <div className='w-full h-auto items-center justify-center flex flex-col'>
      {/* home section */}
      <HomeContainer/>
      {/* fruit section scroll */}
      <section className="w-full my-28 md:my-14">
        {/* main div-contain a paragraph heading and 2logos div  */}
        <div className='w-full flex items-center justify-between'>
          {/* p    -div1  */}
          <p className="before:absolute mt-4 before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-2xl font-semibold capitalize text-headingColor relative ">
            Our Fresh & Healthy Fruits!!!
          </p>
          {/* 2logo div  -div2 */}
          {/* itt will be hidden on mobile screes */}
          <div className=" items-center hidden gap-3 md:flex">
            {/* logo1 */}
            <motion.div onClick={()=>setScrollValue(preValue=>preValue-200)} whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"><MdChevronLeft className='text-lg'/></motion.div>
            {/* logo2 */}
            <motion.div onClick={()=>setScrollValue(preValue=>preValue+200)} whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"><MdChevronRight  className='text-lg'/></motion.div>
          </div>
        </div>
        {/* bringing the row container in fruits section but after the para and 2 logo div (which will be only visible on web) */}
        {/* as we want the row container for 2 purposes 1st is a horizontal scroll on home screen and a food section so we will use a flag which we wil bw togglinmg true and false and decide what operation we need to perform   */}
        
        <RowContainer 
        flag={true}
        scrollValue={scrollValue}
        data={fooditems?.filter((item)=>item.category==='fruits')}
          />
      </section>
      {/* meny section  */}
     <MenuContainer/>
     {/* cart section  */}
     {cartShow && (<CartContainer/>)}
    </div>
  )
}

export default MainContainer