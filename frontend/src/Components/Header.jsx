import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import {MdShoppingBasket} from 'react-icons/md'
import Avatar from '../assets/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {auth,db} from '../Firebase'
import { getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useEffect } from 'react'
import { useStateValue } from '../Context/StateProvider'
import { actionType } from '../Context/Reducer'
const Header = () => {
    const provider = new GoogleAuthProvider();
    const[{user},dispatch]=useStateValue()
    const login=async ()=>{
            const {user:{refreshToken,providerData}}=await signInWithPopup(auth,provider)
            dispatch({
                type:actionType.SET_USER,
                user:providerData[0]
            })
        }
  return (
    <header className='w-screen fixed z-50  p-6 px-16'>
            {/* laptop and tablets */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
               {/* div for left side logo and branding  */}
               {/* this div will be at left side */}
               {/* ul,cart,user auth will be at right side */}
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-8 object-cover' alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                {/* div for ul cart and user auth  */}
            {/* this ul,cart,user auth will be at right side  */}
            <div className='flex items-center gap-8'>
                {/* ul  */}
                <ul className='flex items-center gap-8'>
                    <li className=' text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li className='text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                {/* div for cart image and cart item text circle  */}
                <div className='flex items-center justify-center relative'>
                    <MdShoppingBasket className='text-textColor cursor-pointer' size={30}/>
                     <div className='absolute top-[-6px] left-[22px] bg-cartNumBg rounded-full w-5 h-5 flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>1</p>
                    </div>
                </div>
                {/* user auth logo  */}
                <motion.img 
                onClick={login}
                whileTap={{scale: 0.6}}
                src={Avatar} 
                alt="" 
                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer' 
                />
            </div>
        </div>
            {/* mobile menu  */}
    <div className='flex md:hidden w-full bg-blue-500 h-full p-4'>

    </div>
    </header>
  )
}

export default Header