import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import Input from "../../components/Input/Input";
import AuthContext from "../../contex/AuthContext";

const Login = ()=>{

    const emailRef = useRef();
    const passwordRef = useRef();
    const AuthCtx = useContext(AuthContext);


    const emailReducer = (state, action)=>{
        if(action.type="USER_INPUT"){
            // const reg = new RegExp("^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$");
            return {value: action.value, isValid: action.value.includes("@")}
        }
        else if(action.type="INPUT_BLUR"){
            return {value: state.value, isValid: state.isValid}
        }
        return {value:null, isValid:false}
    }

    const passwordReducer = (state, action)=>{
        if(action.type==="USER_INPUT"){
            return {value: action.value, isValid: action.value.trim().length > 6}
        }
        else if(action.type==="INPUT_BLUR"){
            return {value: state.value, isValid: state.isValid}
        }
        return {value:null, isValid:false}
    }

    const[isValid, setIsValid] = useState();
    const[emailState, dispatchEmail] = useReducer(emailReducer, {value:null, isValid:null});
    const[passwordState, dispatchPassword] = useReducer(passwordReducer, {value:null, isValid:null});

    useEffect(()=>{
        setTimeout(()=>{
            setIsValid(emailState.isValid && passwordState.isValid)
        },500);
    },[emailState.isValid, passwordState.isValid]);

    const emailHandler = (event)=>{
        dispatchEmail({type:'USER_INPUT', value:event.target.value})
    }
    const passwordHandler = (event)=>{
        dispatchPassword({type:"USER_INPUT", value:event.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(isValid){
            AuthCtx.loginHandler()
        }
    }

    return(
        <>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
            <Input 
                id={"email"}
                type={"email"}
                isValid={emailState.isValid}
                onChange={emailHandler}
                ref={emailRef}
            />
             <Input 
                id={"password"}
                type={"password"}
                isValid={passwordState.isValid}
                onChange={passwordHandler}
                ref={passwordRef}
            />
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;