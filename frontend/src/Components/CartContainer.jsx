import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import dummyImage from '../assets/r1.png'
import {BiMinus} from 'react-icons/bi'
import {BiPlus} from 'react-icons/bi'
import {RiRefreshFill} from 'react-icons/ri'
const CartContainer = () => {
  return (
    <div className='top-0 right-0 fixed  w-full md:w-375 h-screen z-[101] bg-white drop-shadow-md flex flex-col'>
        {/* top section div  */}
       <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
            {/* div1  */}
            <motion.div whileTap={{scale:0.75}}>
            <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            {/* div 2 */}
            <p className="text-textColor font-semibold text-lg">Cart</p>
            {/* div3 */}
            <motion.p whileTap={{scale:0.75}} className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base">Clear<RiRefreshFill/></motion.p>
            </div>
        {/* bottom section div  */}
         <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            {/* outer cart item div  */}
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                {/* cart item div */}
                    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                    {/* div1 ->image  */}
                    <img src={dummyImage} alt="" className='w-20 h-20 object-contain rounded-full max-w-[60px]' />
                        {/* div2->name  */}
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'>Fried Rice</p>
                            <p className='text-sm block text-gray-300 font-semibold'>$12</p>
                        </div>
                        {/* div3->button  */}
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div whileTap={{scale:0.75}}><BiMinus className='text-gray-50'/></motion.div>
                        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>
                        <motion.div whileTap={{scale:0.75}}><BiPlus className='text-gray-50'/></motion.div>
                        </div>
                </div>
            </div>
            {/* total section  */}
            <div className=" w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                {/* outer subtotal section  */}
                <div className="w-full flex items-center justify-between">
                    {/* div1->subtotal  */}
                    <p className='text-gray-400 text-lg '>Sub Total</p>
                    {/* div2->amount  */}
                    <p className='text-gray-400 text-lg '>$12</p>
                </div>
              {/* outer subtotal section  */}
              <div className="w-full flex items-center justify-between">
                    {/* div1->subtotal  */}
                    <p className='text-gray-400 text-lg '>Sub Total</p>
                    {/* div2->amount  */}
                    <p className='text-gray-400 text-lg '>$12</p>
                </div>
                {/* border b/w subtotal and total  */}
                <div className="w-full border-b border-gray-600 my-2"></div>
                {/* outer total section  */}
                <div className="w-full flex items-center justify-between">
                    {/* div1->total  */}
                    <p className='text-gray-200 text-xl font-semibold'>Total</p>
                    {/* div2->amount  */}
                    <p className='text-gray-200 text-xl font-semibold'>$24</p>
                </div>
                {/* button  */}
                <motion.button 
                whileTap={{scale:0.8}}
                type='button'
                className='w-full p-2 rounded-full text-gray-50 text-lg my-2 hover:shadow-lg  bg-gradient-to-tr from-orange-400 to-orange-600'>
                    Check Out
                </motion.button>
            </div>
        </div>   
    </div>
  )
}

export default CartContainer