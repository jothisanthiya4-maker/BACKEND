import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import ProductDetails from '../pages/ProductDetails'

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/productdeatils/:id' element={<ProductDetails/>} />
      </Routes>
    </>
  )
}

export default Rout
