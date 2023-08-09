import React,{useEffect,useState} from "react";
import "../Login/login.css";
// import "../../theme/globa.css"
import Background from "../../Components/background/background";
import Button from "../../Components/button/button";
import FormGroup from "../../Components/form/form";

function Repass() {
    const[form, setForm]=useState({
        username: "",
        password:"",
    });
    const onChangeHandler = (e) => {
        console.log({ e });
        const inputName = e.target.password; // username, password
        const inputValue = e.target.value; // azhar. ap
    
        setForm((prev) => {
          console.log("user>>", prev);
          return {
            ...prev,
            [inputName]: inputValue, // pass or username
          };
        });
      };
    return (
      <Background>
            <div className="card">
                <h1> Reset</h1>
                <form   onSubmit={(e) => {
                    console.clear();
                    e.preventDefault();
                    console.log("e",e);
                }}
                >
                <FormGroup
                label="new-password"
                type="password"
                id="new-password"
                className="new-password" 
                onChangeHandler={onChangeHandler}
                />
                <FormGroup 
                label="passwprd"
                   type="password"
                   id="password"
                   className="password"
                   onChangeHandler={onChangeHandler}
                   />
                    <Button label="submit"/>
                </form>
            </div>
           
        
</Background>
    )
}

export default Repass;