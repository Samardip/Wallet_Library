import React from "react";
import "./SignInOutButton.css";

interface SignInOutButtonProps{
    user:{
        loggedIn:boolean;
    }
    onClick:()=> void;
}

const SignInOutButton = (props:SignInOutButtonProps) => {
    

    return (
        <button onClick={props.onClick} className="pay-btn">
            {props.user?.loggedIn ? "Paying With Blocto" : "Pay with Blocto"}
        </button>
    );
};
export default SignInOutButton;