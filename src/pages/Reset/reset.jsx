import React,{useEffect , useState} from "react";
import "../Login/login.css";
import "../../theme/global.css"
import Background from "../../Components/background/background";
import FormGroup from "../../Components/form/form";
import Button from "../../Components/button/button";

function Reset() {
    const[form, setForm]=useState({
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
                    <h1> Reset</h1>
                    <form 
                    onSubmit={(e)=>{
                        // console.clear();
                        // e.preventDefault();
                        console.log("e" ,e );
                    }}
                    
                    >
                    <FormGroup label="Email"
                     type="text"
                     id="Email"
                     className="Email"
                     onChange={onChangeHandler}/>
                       <Button label="RESET"/>
                    </form>
                </div>
               
             

                </Background>
    )
}

export default Reset;