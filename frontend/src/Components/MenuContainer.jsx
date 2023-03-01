import React from 'react'
import {IoFastFood} from 'react-icons/io5'
const MenuContainer = () => {
  return (
    <section className="w-full my-6" id='menu'>
        <div className="flex flex-col items-center justify-center">
        <p className="mr-auto before:absolute mt-4 before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-2xl font-semibold capitalize text-headingColor relative ">
            Our Hot Dishes
          </p>
         <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none ">
            <div className="group bg-card w-24 h-28 min-w-[95px] hover:bg-red-600 cursor-pointer rounded-lg shadow-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out">
                <div className="w-10 h-10 rounded-full relative bg-red-600 group-hover:bg-card items-center justify-center">
                        <IoFastFood size={20} className='absolute left-2 top-2 text-card group-hover:text-textColor'/>
                </div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default MenuContainer