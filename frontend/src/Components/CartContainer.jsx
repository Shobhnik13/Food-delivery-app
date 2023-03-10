import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import emptyCart from '../assets/emptyCart.svg'
import {BiMinus} from 'react-icons/bi'
import {BiPlus} from 'react-icons/bi'
import {RiRefreshFill} from 'react-icons/ri'
import { useStateValue } from '../Context/StateProvider'
import { actionType } from '../Context/Reducer'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Firebase'
import CartItem from './CartItem'
const CartContainer = () => {
    const [{cartShow,cartItems,user},dispatch]=useStateValue()
    const provider=new GoogleAuthProvider();
    // will use flag as an indicator when the items get chnaged -> inc/dec 
    const [flag,setFlag]=useState(0);
    // will use total when items get total 
    const [total,setTotal]=useState(0);
    useEffect(()=>{
       let totalPrice=cartItems.reduce(function(accumulator,item){
       return  accumulator+ item.qty*item.price
    },0) 
    setTotal(totalPrice);
    },[total,flag])
    const Login=async()=>{
        if(!user){
            const {user:{refreshToken,providerData}}=await signInWithPopup(auth,provider);
            dispatch({
                type:actionType.SET_USER,
                user:providerData[0],
            })
            localStorage.setItem('user',JSON.stringify(providerData[0]))
        }

    }
    const showCart=()=>{
        dispatch({
            type:actionType.SET_CART_SHOW,
            cartShow:!cartShow,
        }); 
    }
  return (
    <motion.div 
    initial={{opacity:0,x:200}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:200}}
    className='top-0 right-0 fixed  w-full md:w-375 h-screen z-[101] bg-white drop-shadow-md flex flex-col'>
        {/* top section div  */}
       <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
            {/* div1  */}
            <motion.div whileTap={{scale:0.75}} onClick={showCart}>
            <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            {/* div 2 */}
            <p className="text-textColor font-semibold text-lg">Cart</p>
            {/* div3 */}
            <motion.p whileTap={{scale:0.75}} className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base">Clear<RiRefreshFill/></motion.p>
            </div>
        {/* bottom section div  */}
        {cartItems && cartItems.length>0
        ?(<div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
        {/* outer cart item div  */}
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart item div */}
               {cartItems && cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} item={item} flag={flag} setFlag={setFlag}/>
                )
               })}
        </div>
        {/* total section  */}
        <div className=" w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            {/* outer subtotal section  */}
            <div className="w-full flex items-center justify-between">
                {/* div1->subtotal  */}
                <p className='text-gray-400 text-lg '>Sub Total</p>
                {/* div2->amount  */}
                <p className='text-gray-400 text-lg '>${total}</p>
            </div>
          {/* outer delivery section  */}
          <div className="w-full flex items-center justify-between">
                {/* div1->subtotal  */}
                <p className='text-gray-400 text-lg '>Delivery</p>
                {/* div2->amount  */}
                <p className='text-gray-400 text-lg '>$2</p>
            </div>
            {/* border b/w subtotal and total  */}
            <div className="w-full border-b border-gray-600 my-2"></div>
            {/* outer total section  */}
            <div className="w-full flex items-center justify-between">
                {/* div1->total  */}
                <p className='text-gray-200 text-xl font-semibold'>Total</p>
                {/* div2->amount  */}
                <p className='text-gray-200 text-xl font-semibold'>${total+2}</p>
            </div>
            {/* button  */}
            {user 
            ?(<motion.button 
            whileTap={{scale:0.8}}
            type='button'
            className='w-full p-2 rounded-full text-gray-50 text-lg my-2 hover:shadow-lg  bg-gradient-to-tr from-orange-400 to-orange-600'>
                Check Out
            </motion.button>)
            :(
                <motion.button 
                    onClick={Login}
                    whileTap={{scale:0.8}}
                    type='button'
                    className='w-full p-2 rounded-full text-gray-50 text-lg my-2 hover:shadow-lg  bg-gradient-to-tr from-orange-400 to-orange-600'>
                        Log in to Check Out
                    </motion.button>)
                    
            }
                   </div>
    </div>):(
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                    <img src={emptyCart} alt="" />
                    <p className="text-xl text-textColor font-semibold">
                        Add some items in your cart
                    </p>
            </div>
    )
        }
            
    </motion.div>
  )
}

export default CartContainer