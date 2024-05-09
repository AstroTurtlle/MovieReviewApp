<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
import './SignupForm.css';
import { MdEmail } from "react-icons/md";
import { FaCircleUser} from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
<<<<<<< HEAD


const SignupForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign up</h1>    
                    <div className="input-box">
                        <input type="email" placeholder='Email' required/>
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaCircleUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required/>
                        <TbPasswordUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="confirm_password" placeholder='Confirm Password' required/>
                        <TbPasswordUser className='icon'/>

                    </div>
                    <button type="submit">Sign up</button>
                    <div className="register-link">
                        <p>
                            Already have an account?  
                            <a href=""> 
=======
import TextField from '@mui/material/TextField';


export const SignupForm = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
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
        
        if (rePassword === password) {
           
                    // axios.post("http://192.168.35.185:8080/User/InsertData",
                    //     {
                    //         username: username,
                    //         email: email,
                    //         password: password
                    //     }
                    // ).then((response) => {
                    //     const {data, status} = response;
                    //     console.log(response);
                    // })
     
            
        } else {
            console.log("false")
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
                            <a href="./LoginForm"> 
>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
                                Login here
                            </a>
                        </p>
                    </div>             
            </form>
        </div>
<<<<<<< HEAD
    );
};

export default SignupForm;   
=======
    </>
};

>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
