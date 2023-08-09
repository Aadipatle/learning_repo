import React, {useEffect, useState } from "react";
import "./login.css";
import Background from "../../Components/background/background";
import FormGroup from "../../Components/form/form.jsx";
import Button from "../../Components/button/button";
import Icon from "../../Components/Social/svg";
import Loader from "../../Components/loder/loder.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
    // Destructing -> extract the values one by one from array and object
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState("");
    const [passErr, setPassErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    console.clear();
    // console.log(navigate());
  
    const onChangeUserHandler = (e) => {
      const value = e.target.value;
      setUser(value);
      setUserErr("");
    };
  
    const onChangePassHandler = (e) => {
      const value = e.target.value;
      setPassword(value);
      setPassErr("");
    }; 
  
    return (
      <Background>
        <div className="card">
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // validation
              // const isUser = user.length === 0;
              const isUser = user.trim() === ""; //trim() is used to remove the space
              const isPass = password.trim() === "";
  
              if (isUser) {
                setUserErr("Please, enter your username");
              }
  
              if (isPass) {
                setPassErr("Please, enter your password");
              }
  
              if (isUser === false && isPass === false) {
                // navigate to home
                setIsLoading(true);
                // Web Api -> async
                setTimeout(() => {
                  navigate("/landing");
                  setIsLoading(false);
                }, 2000);
              }
            }}
          >
            <FormGroup
              label="Username"
              type="text"
              id="username"
              name="username"
              onChange={onChangeUserHandler}
              error={userErr}
              value={user}
            />
            <FormGroup
              label="Password"
              type="password"
              id="password"
              name="password"
              onChange={onChangePassHandler}
              error={passErr}
              value={password}
            />
            <div className="forgot-link">
              <a href="/reset">forgot Password</a>
            </div>
            <Button label="login" type="submit" />
          </form>
          <Icon />
          <div className="create-account-wrapper">
            <a href="/register">
              <span>create an account</span>
            </a>
          </div>
        </div>
        {isLoading && <Loader />}
      </Background>
    );
  }
  
  export default Login;
  