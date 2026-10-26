import { useContext } from "react"
import UserContext from '../context/UserContext'

const User = () => {
   const {name,role} = useContext(UserContext)
   return (
    <>
        <div>
            <h3>Name : {name}</h3>
            <h3>Role : {role}</h3>
        </div>
    </>
   )
}

export default User