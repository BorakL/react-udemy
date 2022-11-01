import React from "react";

const Input = (props)=>{
    return(
        <div className={props.isValid ? "success" : "error"}>
            <label htmlFor={props.id}>{props.name}</label>
            <input
                type={props.type}
                value={props.value}
                id={props.id}
                onChange={props.onChange}
                ref={props.ref}
            />
        </div>
    )
}

export default Input;