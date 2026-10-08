import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import Object from "../pages/Object"
import Toggle from "../pages/Toggle"


const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/object" element={<Object/>} />
        <Route path="/toggle" element={<Toggle/>} />
    </Routes>
    </>
  )
}

export default AppRoutes
