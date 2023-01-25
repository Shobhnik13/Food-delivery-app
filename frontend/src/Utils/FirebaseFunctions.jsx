// here we will just saving the new items/details that the user will enter 
import { doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../Firebase'
//function to save item
export const saveItem=async(data)=>{
    await setDoc(doc(db,'fooditems',`${Date.now()}`,),data,{merge:true})
}