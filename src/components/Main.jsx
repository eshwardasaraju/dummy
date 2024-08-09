import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Nav'
// import Mic from './Mic'
import Body from './Body'

const Main = () => {
    
  return (
    <div>
         <BrowserRouter>
         <Nav  />
         <Body/>
         <Routes>
            {/* <Route path='.body' element={<Body/>} /> */}
         </Routes>
         
         
         
         
         
         </BrowserRouter>
    </div>
  )
}

export default Main