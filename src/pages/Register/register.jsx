import React,{useEffect, useState} from "react";
import Background from "../../Components/background/background";
import FormGroup from "../../Components/form/form";
import Button from "../../Components/button/button";
import Icon from "../../Components/Social/svg";
import "../Login/login.css";

function Register() {
    const[form, setForm]=useState({
        username:"",
        email:"",
        password:"",
    });
    const onChangeHandler = (e) => {
        console.log({ e });
        const inputName = e.target.name; // username, password
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
                <h1> Signup</h1>
                <form 
                onSubmit={(e) => {
                    // console.clear();
                    // e.preventDefault();
                    console.log("e",e);
                }}
                >
                    <FormGroup label="username"
                     type="text"
                     id="username"
                     className="username" 
                     onChangeHandler={onChangeHandler}
                      />
                    <FormGroup label="email"
                     type="text"
                     id="email"
                     className="email"
                     onChangeHandler={onChangeHandler} />
                    <FormGroup label="password"
                     type="password"
                     id="pasword" 
                     className="password"
                     onChangeHandler={onChangeHandler}/>
                    <Button label="REGISTER" />
                    <Icon/>
                    <div className="p"> <a href="/"> Do You Have An Account </a></div>
                </form>
            </div>

        </Background>
    );
}
export default Register;