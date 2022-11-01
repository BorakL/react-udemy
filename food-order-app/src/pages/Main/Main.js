import React, { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

const Main = ()=> {
    const AuthCtx = useContext(AuthContext)
    console.log("autCtx", AuthCtx)
    return(
        <>
        <h1>Main</h1>
        <button onClick={AuthCtx.logoutHandler}>Logged Out</button>
        </>
    )
}

export default Main;