import { createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState((secureLocalStorage.getItem('array')) || '');

    useEffect(() => {},[])
    if(user) { 
        secureLocalStorage.setItem('array', user)
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}