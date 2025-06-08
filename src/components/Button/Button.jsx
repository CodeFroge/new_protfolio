import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
    return (
        <button className={`custom-button ${variant}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
