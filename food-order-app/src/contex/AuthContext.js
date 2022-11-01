import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props)=>{
    const[isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("login")){
            setIsLoggedIn(true);
        }
    },[])

    const loginHandler = ()=>{
        localStorage.setItem("login",true)
        setIsLoggedIn(true);
    }
    const logoutHandler = ()=>{
        localStorage.removeItem("login")
        setIsLoggedIn(false);
    }
    return(
        <AuthContext.Provider value={{
            isLoggedIn:isLoggedIn,
            loginHandler:loginHandler,
            logoutHandler:logoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;