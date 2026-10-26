import { useState } from "react";
import AuthContext from "../context/AuthContext";

const AuthenProvider = ({ children }) => {
    const [user, setUser] = useState({isLoggedIn: false,username: "Bala"});

    const checkLoggedIn = () => {
        if (user.isLoggedIn) {
            alert("Welcome Divya");
        } else {
            alert("Please Login");
        }
    };

    const regUser = () => {
        if (user.isLoggedIn) {
            alert("Already Registered");
        } else {
            const data = { ...user, isLoggedIn: true };
            setUser(data);
            alert("Registered Successfully");
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, regUser, checkLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenProvider;