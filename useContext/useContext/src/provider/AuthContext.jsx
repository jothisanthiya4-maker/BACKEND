import { useState } from "react"

const AuthContext = ({children}) => {
    const [user,setUser] = useState({isLoggedIn: false,username: "Bala"})
    const checkLoggedIn = ()=>{
        if(user.isLoggedIn){
            alert("Welcome Divya")
        }
        else{
            alert("Please Login")
        }
    }
    const regUser = ()=>{
        if(user.isLoggedIn){
            alert("Already Registered")
        }
        else{
            const data = {...user,isLoggedIn:true}
            setUser(data)
            alert("Registered Successfully")
        }
    }
    return (
    <div>
        <AuthContext values = {{user,setUser,regUser,checkLoggedIn}}>
            {children}
        </AuthContext>
    </div>
  )
}

export default AuthContext