import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Layouts from './Layouts'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      
      <Route element={<Layouts/>}>
        <Route path='/home' element={<Home/>}/>
      </Route>
    
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    </>
  )
}

export default AppRoutes
