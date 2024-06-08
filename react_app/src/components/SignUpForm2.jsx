import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaCircleUser} from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const SignUpForm = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [usernameError, setUsernameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordFormatError, setPasswordFormatError] = React.useState(false);
    const navigate = useNavigate();

    function changeUsername(event) {
        const value = event.target.value;
        if (
            value.length > 15 ||
            /\s/.test(value) ||
            /[^a-zA-Z0-9_]/.test(value)
        ) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        setUsername(value);
    }
    
    function changeEmail(event) {
        const value = event.target.value;
        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 
            /[!#$%^&*()_\-+={}[\]:;'"<>,\\|/]/.test(value) ||
            !/\.com$/.test(value)
        ) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(value);
    }
    function changePassword(event) {
        const value = event.target.value;
        if (
            !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])(?!.*[<>\/\\|{}[\];:'"?\-+~\s])[A-Za-z\d!@#$%^&*_]{8,}/.test(value)
        ) {
            setPasswordFormatError(true);
        } else {
            setPasswordFormatError(false);
        }
        setPassword(value);
    }
  
    function passVer(ev1) {
        setRePassword(ev1.target.value);
        
    }
    
    async function submit(event) {
        event.preventDefault();
        try {
            if (email !== "" && !passwordError && username !== "" && !passwordFormatError && rePassword === password) {
                const response = await axios.post("http://localhost:8080/register", {
                    username: username,
                    email: email,
                    password: password
                });
                console.log(response);
            } else {
                console.log("Validation failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    useEffect(() => {
        if(rePassword !== password)
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
                        <TextField type="email" placeholder='Email' id="email" onChange={changeEmail} sx={{border: 'none',"& fieldset": { border: 'none' },}} required error={emailError} helperText={emailError ? "Invalid email format" : null}/>
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <TextField type="text" placeholder='Username' id="name" onChange={changeUsername} sx={{border: 'none',"& fieldset": { border: 'none' },}} required error={usernameError} helperText={usernameError ? "Invalid username format" : null}/>
                        <FaCircleUser className='icon' />
                    </div>
                    <div className="input-box">
                        <TextField type="password" placeholder='Password'id="password" onChange={changePassword} sx={{border: 'none',"& fieldset": { border: 'none' },}} required error={passwordFormatError} helperText={
                                passwordFormatError
                                    ? "Password must contain at least 8 characters, one uppercase letter, one digit, and no spaces or special characters"
                                    : null
                            }/>
                        <TbPasswordUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <TextField type="password" placeholder='Confirm Password' id="rePassword"  error={passwordError} helperText={passwordError ? "Passwords don't match" : null}  onChange={passVer} sx={{border: 'none',"& fieldset": { border: 'none' },}} required/>
                        <TbPasswordUser className='icon'/>

                    </div>
                    
                   { passwordError || usernameError || emailError || passwordFormatError ? (
                                    <button disabled type="submit" className="registerbtn" onClick={submit}>Register</button>
                   ):(
                                    <button type="submit" className="registerbtn" onClick={submit}>Register</button>
                )}
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
