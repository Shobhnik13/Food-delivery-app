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
import { StateContext, useStateValue } from '../Context/StateProvider'
import { actionType } from '../Context/Reducer'
const Header = () => {
    // state for drop down menu 
    const [menu, setMenu] = useState(false)
    
    // auth provider 
    const provider = new GoogleAuthProvider();

    // state management using use reducer
    const[{user,cartShow,cartItems},dispatch]=useStateValue()
    
    //logout function
    const logout=()=>{
        //disabling the menu 
        setMenu(false)
        //clearing the local storage
        localStorage.clear()
        dispatch({
            type:actionType.SET_USER,
            user:null
        })
    }
//show cart func
const showCart=()=>{
    dispatch({
        type:actionType.SET_CART_SHOW,
        cartShow:!cartShow,
    });
}
    //login function
    const login=async ()=>{
            if(!user){  {/* if user is not present then fetch user and dispatch the action and user data*/ }
                const {user:{refreshToken,providerData}}=await signInWithPopup(auth,provider)
            dispatch({
                type:actionType.SET_USER,
                user:providerData[0]
            })
            localStorage.setItem('user',JSON.stringify(providerData[0]))
        }
        else{ {/* if user already exists then show the drop down menu on clicking the button*/ }
               setMenu(prevMenu=>!prevMenu) 
        }
            }

  return (
    <header className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary'>
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
                <div className='flex items-center justify-center relative' onClick={showCart}>
                    <MdShoppingBasket className='text-textColor cursor-pointer' size={30}/>
                     {
                        cartItems && cartItems.length>0&&(
                            <div className='absolute top-[-6px] left-[22px] bg-cartNumBg rounded-full w-5 h-5 flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                    </div>
                        )
                     }
                </div>
                {/* user auth logo  */}
                <div className='relative'> {/*div for user image and the drop sown menu of user we need to set this div as relative to set the absolute div of drop down menu */ } 
                <motion.img 
                onClick={login}
                whileTap={{scale: 0.6}}
                src={user? user.photoURL :Avatar } 
                alt="error" 
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
                user && user.email &&(
                    <Link to={'/createItem'}>
                    <p onClick={()=>setMenu(false)} className='px-4 py-2 flex items-center justify-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor'>New item <MdAdd/> </p>
                    </Link>
                ) 
                }
                <p onClick={logout} className='px-4 py-2 flex items-center justify-center gap-3  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor'>Logout <MdLogout/></p>
                </motion.div>
                    )
                }
                </div>
            </div>
        </div>


            {/* mobile menu  */}
    <div className='flex md:hidden w-full items-center justify-between  h-full p-4'>
        {/* mobile div will contain 3 sides */}
        {/* 1->left side contains cart and circle  */}

        <div className='flex items-center justify-center relative' onClick={showCart}>
                    <MdShoppingBasket className='text-textColor cursor-pointer' size={30}/>
                    {
                        cartItems && cartItems.length>0&&(
                            <div className='absolute top-[-6px] left-[22px] bg-cartNumBg rounded-full w-5 h-5 flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                    </div>
                        )
                     }
                </div>
                
        {/* 2-> middle side contains logo and name  */}

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-8 object-cover' alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                {/* 3->contains the user auth img, and the drop down menu at the right side */}

                <div className='relative'> {/*div for user image and the drop sown menu of user we need to set this div as relative to set the absolute div of drop down menu */ } 
                <motion.img 
                onClick={login}
                whileTap={{scale: 0.6}}
                src={user? user.photoURL :Avatar } 
                alt="userProfile" 
                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                />
                
                {
                    // menu will only be shown when menu state will be true 
                    menu && (
                        <div className='w-40 bg-gray-50 top-12 right-[-20px]  shadow-xl rounded-md absolute flex flex-col '>
                {/* menu consist of 3 things in mobile view */}
                
                {/* these 3 things will be opened and closed whenever the menu state will be rendered */}
                
                {/* 1->the create item option  */}

                {
                user && user.email && (
                    <Link to={'/createItem'}>
                    <p onClick={()=>setMenu(false)} className='px-4 py-2 flex items-center  gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor'>New item <MdAdd/> </p>
                    </Link>
                ) 
                }
                {/* 2->the ul of the laptop view  */}
                
                <ul className='flex flex-col  '>
                    <li  onClick={()=>setMenu(false)} className=' text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li onClick={()=>setMenu(false)} className='text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li onClick={()=>setMenu(false)} className='text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li onClick={()=>setMenu(false)} className='text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                {/* 3->the logout option  */}
                
                <p onClick={logout} className='px-4 py-2 shadow-md m-2 flex items-center  gap-3 bg-gray-200  hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor'>Logout <MdLogout/></p>
                </div>
                    )
                }
                </div>
                
    </div>
    </header>
  )
}

export default Header