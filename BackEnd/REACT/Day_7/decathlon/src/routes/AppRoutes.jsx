import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Men from '../components/Men'
import Women from '../components/Women'
import Kids from '../components/Kids'

const AppRoutes = () => {
  return (
    <>
    <NavBar/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
