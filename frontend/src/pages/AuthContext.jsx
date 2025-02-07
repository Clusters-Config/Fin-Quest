
import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false); 
    const [useremail,setuseremail] = useState("");  // Global state for login

    return (
        <AuthContext.Provider value={{ login, setLogin , useremail , setuseremail}}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
