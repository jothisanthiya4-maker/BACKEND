import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div className="flex justify-between p-10 bg-blue-500 text-white">
        <div className="flex gap-10 text-xl">
        <Link to={"/"}>All Sports</Link>
        <Link to={"/men"}>Mens</Link>
        <Link to={"/women"}>Womens</Link>
        <Link to={"/kids"}>kids</Link>
    </div>
    <div className="text-l">
        <Link to={"/location"}>Location : Bangalore Central, Bangalore, 560001, Karnataka</Link>
    </div>
    </div>
    
    </>
  )
}

export default NavBar
