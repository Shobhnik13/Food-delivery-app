import React from 'react'
import { motion } from 'framer-motion'
import { BiMinus,BiPlus } from 'react-icons/bi'
import { useState } from 'react'
import { useStateValue } from '../Context/StateProvider'
import { actionType } from '../Context/Reducer'
const CartItem = ({item}) => {
  const [qty,setQty]=useState(1);
    return (
    
        <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                    {/* div1 ->image  */}
                    <img src={item.imageURL} alt="" className='w-20 h-20 object-contain rounded-full max-w-[60px]' />
                        {/* div2->name  */}
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'>{item.title}</p>
                            <p className='text-sm block text-gray-300 font-semibold'>${item.price*qty}</p>
                        </div>
                        {/* div3->button  */}
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div whileTap={{scale:0.75}}><BiMinus className='text-gray-50'/></motion.div>
                        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>{qty}</p>
                        <motion.div whileTap={{scale:0.75}}><BiPlus className='text-gray-50' onClick={()=>setQty(qty+1)}/></motion.div>
                        </div>
                    </div>
    
  )
}

export default CartItem