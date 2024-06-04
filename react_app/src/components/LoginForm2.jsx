import { FaCircleUser, FaLock } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export const  LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function changeUsername(event) {
        setUsername(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem("email") !== null)
            navigate("/");
    }, []);

    const submit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            console.log(response.data); // Log the response data
            navigate("/");
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Invalid username or password');
        }
    };
    return <>
        <div className="wrapper">
            <form>
                <h1>Login</h1>    
                    <div className="input-box" >
                        <TextField type="text" placeholder='Username' id='name' sx={{border: 'none',"& fieldset": { border: 'none' },}}  onChange={changeUsername}  required></TextField>
                        <FaCircleUser className='icon' />
                    </div>
                    <div className="input-box">
                        <TextField type="password" placeholder='Password' id='password'sx={{border: 'none',"& fieldset": { border: 'none' },}} onChange={changePassword} required></TextField>
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <TextField type="checkbox" sx={{border: 'none',"& fieldset": { border: 'none' },}}  />Keep me logged in
                        </label>
                        <a href="#"> Forgot password? </a>
                    </div>
                    <button type="submit" onClick={submit}>Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?  
                            <a href="./signup"> 
                                Sign up here
                            </a>
                        </p>
                    </div>
                    
            </form>
        </div>
    </>

};