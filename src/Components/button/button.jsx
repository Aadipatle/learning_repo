import React from "react";

const Button = (props) => {
    return (
        <div className="btn-login">
            <button type="submit" onClick={(e) =>{
                console.log('ee',e);
            }}>{props.label}</button>
        </div>

    );
}
export default Button;