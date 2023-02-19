// here we will just saving the new items/details that the user will enter
import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../Firebase'
//function to save item
export const saveItem=async(data)=>{
    await setDoc(doc(db,'fooditems',`${Date.now()}`),data,{merge:true,})
}
//getting all the save fooditems data
export const getItem=async()=>{
    const items=await getDocs(
        query(collection(db,'fooditems'),orderBy('id','desc'))
    );
    //now we got all the data in items by order 
    //we just need to return this data now by mapping
    return items.docs.map((doc)=>doc.data());
}