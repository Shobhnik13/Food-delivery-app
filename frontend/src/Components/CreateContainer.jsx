import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import {MdFastfood} from 'react-icons/md'
const CreateContainer = () => {
  //creating all states
  const [title,setTitle]=useState('');
  const [calories,setCalories]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState(null);
  const [imageAsset,setImageAsset]=useState(null)
  const [fields,setFields]=useState(false);
  const [alert,setAlert]=useState('')
  const [msg,setMsg]=useState(null)
  const [loading,setLoading]=useState(false)
  return (
    // main div 
    <div className='w-full h-auto flex items-center justify-center min-h-screen'>
      {/* div that contains the structure for the inner divs  */}
      <div className='w-[90%] md:w-[75%] border border-gray-300  rounded-lg p-4 flex flex-col justify-center items-center'>
        {
          fields &&(
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className={`w-full p-2 text-center rounded-lg font-semibold ${
              alert==='danger'
              ?` bg-red-400 text-red-800`
              :` bg-emerald-400 text-emerald-800`
          } `}>{msg}</motion.p>
          )}
           {/* input div which will be inside the outer structured div  */}
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2 '>
            <MdFastfood className='text-gray-700 text-xl' />
            <input type="text" 
              value={title}
              required
              placeholder='Enter a title...'
              className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 '
              onChange={(e)=>setTitle(e.target.value)}
              />
              
          </div>
      </div>
    </div>
  )
}
export default CreateContainer