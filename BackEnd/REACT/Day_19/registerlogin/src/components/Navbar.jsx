import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between p-5 bg-blue-500 text-white">
      <div>Logo</div>
      <div className="flex gap-10">
        <Link to={'/home'}>Home</Link>
        <Link to={'/'}>Register</Link>
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
