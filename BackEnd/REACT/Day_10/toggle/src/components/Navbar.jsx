import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between p-5 bg-blue-500 text-white">
        <div>Toggle</div>
        <div className="flex gap-8">
            <Link to={'/'}>Array </Link>
            <Link to={'/object'}>Object</Link>
            <Link to={'/toggle'}>Toggle</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
