import React, { Children } from "react";
import ChildrenComponent from "./ChildrenComponent";

const Main = ()=>{
    console.log("Main")
    return(
        <>
        <h1>Main</h1>
        <ChildrenComponent/>
        </>
    )
}

export default Main;