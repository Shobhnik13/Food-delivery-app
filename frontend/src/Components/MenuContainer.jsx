import React, { useEffect, useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { categories } from '../Utils/Data'
import { useStateValue } from '../Context/StateProvider'
const MenuContainer = () => {
    const [filter,setFilter]=useState('Chicken')
    const [{fooditems},dispatch]=useStateValue()
    return (
    <section className="w-full my-6 -mt-24 md:-mt-20" id='menu'>
        <div className="flex flex-col items-center justify-center">
        <p className="mr-auto before:absolute mt-4 before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-2xl font-semibold capitalize text-headingColor relative ">
            Our Hot Dishes
          </p>
         <div className="w-full flex  items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none ">
        {
        categories && categories.map(item=>{
            return(
                <motion.div
                whileTap={{scale:0.6}}
                key={item.id} 
                onClick={()=>setFilter(item.urlParamName)}
                className={`
                group
                 ${filter===item.urlParamName
                 ?'bg-cartNumBg'
                 :'bg-card'}  
                 w-24 h-28 min-w-[95px] hover:bg-cartNumBg cursor-pointer rounded-lg shadow-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center 
                 `}>
                <div className={`
                w-10 h-10 rounded-full shadow-2xl relative 
                ${filter===item.urlParamName
                ?'bg-white'
                :'bg-cartNumBg'}
                 group-hover:bg-white items-center justify-center
                 `}>
                        <IoFastFood size={20} className={`
                        absolute left-2 top-2
                         ${filter===item.urlParamName
                         ?'text-textColor'
                         :'text-white'}
                           group-hover:text-textColor text-lg
                          `}/>
                </div>
                <p className={`
                text-sm
                 ${filter===item.urlParamName
                 ?'text-white'
                 :'text-textColor'}
                  group-hover:text-card`
                  }>{item.name}</p>
            </motion.div>
            )
        })
        }
        </div>
        <div className="w-full ">
          <RowContainer
          flag={false}
          data={fooditems?.filter(item=>item.category === filter)}
          />
        </div>
        </div>
    </section>
  )
}

export default MenuContainer