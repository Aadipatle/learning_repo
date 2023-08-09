import React from "react";
import { Apple, Facebook, Google } from "../../assets/svg";

function Icon(props) {
    return (
        <div className="icon">
            <a href="fecebook.com"><Facebook /></a>
            <a href="fecebook.com"><Google /></a>
            <a href="fecebook.com"><Apple /></a>
        </div>
    );
}
export default Icon;
