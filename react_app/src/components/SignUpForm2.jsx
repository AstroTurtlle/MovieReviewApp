import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaCircleUser} from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import TextField from '@mui/material/TextField';
import axios from "axios";


export const SignUpForm = () => {
    const [userName, setUsername] = React.useState("");
    const [userEmail, setEmail] = React.useState("");
    const [userPassword, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    function changeUsername(event) {

        setUsername(event.target.value);
    }
    
    function changeEmail(event) {

        setEmail(event.target.value);
    }
    function changePassword(event) {
        setPassword(event.target.value);
    }
  
    function passVer(ev1) {
        setRePassword(ev1.target.value);
        
    }
    
    function submit(event) {
        if (userEmail!="" && userPassword!=""  && userName!="" && rePassword === userPassword)
            axios.post("http://localhost:8080/register", {
                userName: userName,
                userPassword: userPassword,
                userEmail: userEmail
            }).then((response) => {
                const {data, status} = response;
                console.log(response);
            })
        else
            console.log("false")
    }

    useEffect(() => {
        if(rePassword !== userPassword)
            setPasswordError(true);
        else{
            setPasswordError(false);
        }
    }, [rePassword])

    return <>
        <div className="wrapper">
            <form action="" >
                <h1>Sign up</h1>    
                    <div className="input-box">
                        <TextField type="email" placeholder='Email' id="email" onChange={changeEmail} sx={{border: 'none',"& fieldset": { border: 'none' },}} required/>
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <TextField type="text" placeholder='Username' id="name" onChange={changeUsername} sx={{border: 'none',"& fieldset": { border: 'none' },}} required/>
                        <FaCircleUser className='icon' />
                    </div>
                    <div className="input-box">
                        <TextField type="password" placeholder='Password'id="password" onChange={changePassword} sx={{border: 'none',"& fieldset": { border: 'none' },}} required/>
                        <TbPasswordUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <TextField type="password" placeholder='Confirm Password' id="rePassword"  error={passwordError} helperText={passwordError ? "Passwords don't match" : null}  onChange={passVer} sx={{border: 'none',"& fieldset": { border: 'none' },}} required/>
                        <TbPasswordUser className='icon'/>

                    </div>
                    {
                    passwordError ? 
                                    <button disabled type="submit" className="registerbtn" onClick={submit}>Register</button>
                                  :
                                    <button type="submit" className="registerbtn" onClick={submit}>Register</button>
                }
                    <div className="register-link">
                        <p>
                            Already have an account?  
                            <a href="./login"> 
                                Login here
                            </a>
                        </p>
                    </div>             
            </form>
        </div>
    </>
};

