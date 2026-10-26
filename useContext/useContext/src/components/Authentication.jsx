import { useContext } from "react"
import AuthContext from '../context/AuthContext'


const Authentication = () => {
  const {regUser,checkLoggedIn} = useContext(AuthContext)
    return (
    <div>
        <button onClick={regUser}>Register</button>
        <button onClick={checkLoggedIn}>Login</button>
    </div>
  )
}

export default Authentication