import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-5 bg-gray-00">
        <div>Logo</div>
        <div className="flex gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/help"}>Help</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
