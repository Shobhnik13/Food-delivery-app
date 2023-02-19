import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { db } from './Firebase'
import { auth } from './Firebase'
import { Route,Routes } from 'react-router-dom'
import { CreateContainer,MainContainer } from './Components'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './Context/StateProvider'
import { getItem } from './Utils/FirebaseFunctions'
import { useEffect } from 'react'
import { actionType } from './Context/Reducer'
function App() {
  const [{fooditems},dispatch]=useStateValue()
  const fetchData=async()=>{
    await getItem().then((data)=>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        fooditems:data,
      }) 
    })
  }
 
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App flex h-auto flex-col w-screen bg-primary">
      <Header/>
      <main className='mt-16 md:mt-22 px-8 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer/>} />
          <Route path='/createItem' element={<CreateContainer/>} />
        </Routes>
      </main>
      </div>
      </AnimatePresence>
  )
}

export default App
