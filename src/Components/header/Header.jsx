import React from "react";
import "../header/Header.css";
import S from "../../assets/svg/shoping.png";
function Header() {
  return (
    <div class="header">
    <h1>T<span>E</span>CHGICUS</h1>
    <div class="header-right">
      <a class="active" href="/landing">Home</a>
 
      <a href="/course">Course</a>
   
    </div>
  </div>
  
  );
}

export default Header;
