import React from "react";
import { Group } from "../../assets/svg";

function Background (props){
    return (
        <div className="login-bg"> 
        {props.children}
        <Group wt="100vw" ht="800"/>
        </div>
    );
}
export default Background;