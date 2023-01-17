import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import {MdShoppingBasket,MdAdd,MdLogout} from 'react-icons/md'
import Avatar from '../assets/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {auth,db} from '../Firebase'
import { getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import { useStateValue } from '../Context/StateProvider'
import { actionType } from '../Context/Reducer'
const Header = () => {
    // state for drop down menu 
    const [menu, setMenu] = useState(false)
    // auth provider 
    const provider = new GoogleAuthProvider();
    // state management using use reducer 
    const[{user},dispatch]=useStateValue()
    const login=async ()=>{
            if(!user){
                const {user:{refreshToken,providerData}}=await signInWithPopup(auth,provider)
            dispatch({
                type:actionType.SET_USER,
                user:providerData[0]
            })
            localStorage.setItem('user',JSON.stringify(providerData[0]))
        }
        else{
               setMenu(prevMenu=>!prevMenu) 
        }
            }

  return (
    <header className='w-screen fixed z-50  p-6 px-16'>
            {/* laptop and tablets */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
               {/* div for left side logo and branding  */}
               {/* this div will be at left side */}
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-8 object-cover' alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                {/* div for ul cart and user auth  */}
               {/* ul,cart,user auth will be at right side */}
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
                <div className='relative'> {/*div for user image and the drop sown menu of user we need to set this div as relative to set the absolute div of drop down menu */ } 
                <motion.img 
                onClick={login}
                whileTap={{scale: 0.6}}
                src={user? user.photoURL :Avatar } 
                alt="userProfile" 
                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                />
                {
                    menu && (
                        <motion.div 
                        initial={{opacity:0,scale:0.6}}
                        animate={{opacity:1,scale:1}}
                        exit={{opacity:0,scale:0.6}}
                        className='w-40 bg-gray-50 top-12 right-[-20px]  shadow-xl rounded-md absolute flex flex-col '>
                {
                user && user.email==='shobhnikw@gmail.com' &&(
                    <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center justify-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor'>New item <MdAdd/> </p>
                    </Link>
                ) 
                }
                <p className='px-4 py-2 flex items-center justify-center gap-3  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor'>Logout <MdLogout/></p>
                </motion.div>
                    )
                }
                </div>
            </div>
        </div>
            {/* mobile menu  */}
    <div className='flex md:hidden w-full  h-full p-4'>

    </div>
    </header>
  )
}

export default Header