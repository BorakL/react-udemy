import React, { useState } from "react";

const ChildrenComponent = ()=>{
    const[x,setX]=useState(false)
    console.log("x",x)

    return(
        <>
        <h1>ChildrenComponent</h1>
        {x && <p>asdf</p>}
        <button onClick={()=>setX(!x)}>Click</button>
        </>
    )
}

export default ChildrenComponent;