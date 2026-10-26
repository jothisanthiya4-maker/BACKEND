import UserContext from "../context/UserContext";

const UserProvider = ({children}) => {
  const user = {name: "Bala",role: "Developer"}
  return (
    <div>
        <UserContext value={user}>
          {children}
        </UserContext>
    </div>
  )
}

export default UserProvider