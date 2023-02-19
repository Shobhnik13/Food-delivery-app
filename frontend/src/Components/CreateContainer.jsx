import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import {MdFastfood,MdCloudUpload,MdDelete,MdFoodBank,MdAttachMoney} from 'react-icons/md'
import { categories } from '../Utils/Data';
import Loader from './Loader';
import { deleteObject, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../Firebase';
import { saveItem } from '../Utils/FirebaseFunctions';
import { useStateValue } from '../Context/StateProvider';
import { useEffect } from 'react';
import { getItem } from '../Utils/FirebaseFunctions';
import { actionType } from '../Context/Reducer';
const CreateContainer = () => {
  //getting the food items data state from initial state and context provider
  const [{fooditems},dispatch]=useStateValue()
  //fetch data function firebase
  const fetchData=async()=>{
    await getItem().then((data)=>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        fooditems:data,
      }) 
    })
  }
 
  //upload image function
  const uploadImage=(e)=>{
      setLoading(true)
      const imageFile=e.target.files[0]
      // console.log(imageFile)
      const storageRef=ref(storage,`images/${Date.now()}-${imageFile.name}`)
      const uploadTask=uploadBytesResumable(storageRef,imageFile)
      // meking progressing bar 
      uploadTask.on('state_changed',(snapshot)=>{
        const uploadProgress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
      },
      (error)=>{
        console.log(error)
        setFields(true)
        setMsg('OOPS!! There is an error while uploading:Please try again')
        setAlert('danger')
        //now removing that alert status after showing it 1 time
        setTimeout(() => {
          setFields(false);
          setLoading(false)
        }, 4000);
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{
          setImageAsset(downloadURL)
          setLoading(false)
          setFields(true)
          setMsg('WOHOO!! Image uploaded successfully')
          setAlert('success')
          setTimeout(() => {
            setFields(false)
          }, 4000);
        })
      })
  }
  //del image func
  const delImage=()=>{
      setLoading(true)
      const deleteRef=ref(storage,imageAsset)
      deleteObject(deleteRef).then(()=>{
        setImageAsset(null)
        setLoading(false)
        setFields(true)
        setAlert('success')
        setMsg('Image Deleted successfully!')
        setTimeout(() => {
          setFields(false)
        }, 4000);
      })
  }
  //save details function
  const saveDetails=()=>{
      setLoading(true)
      try{
        // if any of the required fields are missing show an error
            if(!title || !calories || !imageAsset || !price || !category){
              setFields(true)
               setMsg('Required fields cannot be empty')
               setAlert('danger')
               setTimeout(() => {
                setFields(false)
                setLoading(false)
               }, 4000);
              }
               else{
                //means all the required fields are filled and we just need to pass and update the data
                const data={
                 id:`${Date.now()}`,
                 title:title,
                 imageURL:imageAsset,
                 category:category,
                 calories:calories,
                 qty:1,
                 price:price
                }
                //calling the save item data func from firebase/utils
                saveItem(data)
                //clearing the data after submitting it
                clearData()
                setLoading(false)
                setFields(true)
                setMsg('YAYY!! Data uploaded successfully ')
                setAlert('success')
                setTimeout(() => {
                  setFields(false)
                  setLoading(false)
                }, 4000);
              }
              // calling the fetch data function which is dispatching the actiontype and getting data from getitems func 
             
      }
      catch(error){
          console.log(error)
          setFields(true)
          setMsg('OOPS!! Error while uploading:Please try again')
          setAlert('danger')
          setTimeout(() => {
            setFields(false)
            setLoading(false)
          },4000);
      }
      fetchData()
  }
  //clear data func-called after submitting the entered data by user after getting uploaded by setItem(data)
  const clearData=()=>{
      setImageAsset(null)
      setTitle('')
      setCalories('')
      setPrice('')
      setCategory('Select a category')
  }
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
      <div className='w-[90%] md:w-[75%] border border-gray-300 gap-4 rounded-lg p-4 flex flex-col justify-center items-center'>
        {
          fields &&(
            // p/div for alert message only renders when fields is true 
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
           {/* input div for title uploading  */}
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
          {/* select tags div  */}
          <div className='w-full'>
              <select required name="" id=""  onChange={(e)=>setCategory(e.target.value)} className='border-b-2 outline-none p-2 rounded-md cursor-pointer w-full border-gray-200 ' >
                <option value="other" className='bg-white'>Select Category</option>
                {/* rendering teh other option cats from data  */}
                {categories.map((item)=>{
                  return(
                    <option 
                    value={item.urlParamName}
                    key={item.id}
                    className='bg-white text-headingColor text-base border-0 outline-none capitalize'
                    >
                      {item.name}
                    </option>
                  )
                })}
              </select>
          </div>
          {/* div for image uploading  */}
          <div className='flex flex-col justify-center items-center border-2 border-dotted border-gray-300 w-full rounded-lg h-225 md:h-420 cursor-pointer'>
            {/* adding a loader by tailwind css  */}
          {loading
          ?(<Loader/>)
          :(<>
            {
              // if not-imageasset is true means when image is not present  
            !imageAsset
            ?(<>
            {/* main label div  */}
            <label className='w-full h-full flex flex-col justify-center items-center cursor-pointer '>
                {/* div for upload logo and headline  */}
                <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                  <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
                  <p className='text-gray-500'>Clich here to upload</p>
                </div>
                {/* /inpu div  */}
                  <input required type="file" className='hidden' name="uploadImage" id="" accept='image/*' onChange={uploadImage} />
            </label>
            </>)
            :(<>
              <div className="relative h-full">
                  <img src={imageAsset} alt="uploadedImage" className='w-full h-full object-cover' />
                  <button onClick={delImage} className='absolute  bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl outline-none cursor-pointer hover:shadow-md transition-all duration-100 ease-in-out'><MdDelete className='text-white'/></button>
              </div>
            </>)
            }
          </>)
          }
          </div>
          {/* main div for calorie input and price input */}
          <div className='w-full flex flex-col md:flex-row items-center gap-3'>
            {/* calorie div  */}
            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
              <MdFoodBank className='text-gray-700 text-2xl'/>
              <input type="text"
               required 
               value={calories}
               onChange={(e)=>setCalories(e.target.value)}
               placeholder='Calories'
                className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-600 text-textColor' 
                />
            </div>
            {/* price div  */}
            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
              <MdAttachMoney className='text-gray-700 text-2xl'/>
              <input type="text"
               required 
               value={price}
               onChange={(e)=>setPrice(e.target.value)}
               placeholder='Price'
                className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-600 text-textColor' 
                />
            </div>
          </div>
          {/* button for submitting details NOT INCLUDES IN CALS OR PRICE DIV BUT IN EXTERNAL DIV AS ANOTHER PART JUST LIKE CALS/PRICE ONLY */}
          <div className='flex items-center w-full'>
              <button onClick={saveDetails} className='md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-white text-lg font-semibold'>Save</button>
          </div>
      </div>
    </div>
  )
}
export default CreateContainer