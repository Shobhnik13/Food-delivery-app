import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { db } from './Firebase'
import { auth } from './Firebase'
import { Route,Routes } from 'react-router-dom'
import { CreateContainer,MainContainer } from './Components'
import { AnimatePresence } from 'framer-motion'
function App() {
  

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App flex h-auto flex-col w-screen bg-primary">
      <Header/>
      <main className='mt-24 p-8 w-full'>
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
