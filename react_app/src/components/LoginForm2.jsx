
import { FaCircleUser,FaLock } from "react-icons/fa6";
import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


export const  LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();
    const [ver, setVer] = React.useState(false);
    
    function changeUsername(event) {

        setUsername(event.target.value);
    }
    function changePassword(event) {
        setPassword(event.target.value);
    }

    // useEffect(() => {
    //     if (localStorage.getItem("email") !== null)
    //       navigate("/")
    //   }, [])
    //   useEffect(() => {
    //     if (ver === true)
    //       navigate("/Homepage")
    //   }, [ver])
    
    //   const login = (event) => {
    //     axios.post("http://192.168.35.185:8080/User/login",
    //       {
    //         email: inputEmail,
    //         password: inputPassword
    //       }
    //     ).then((response) => {
    //       const { data, status } = response;
    //       if (status === 200) {
    //         console.log("AM PRIMIT PACHET");
    //         setVer(true);
    //         localStorage.setItem("username", data.username);
    //         localStorage.setItem("id", data.id);
    //         localStorage.setItem("name", data.name);
    //         localStorage.setItem("email", data.email);
    //         localStorage.setItem("password", data.password);
    //        // window.location.reload();
    //       }
    //       else {
    //         setError(true);
    //       }
    //     }).catch((error) => {
    //       console.log(error)
    //       set or(true);
    //     });
    
    
    //   }
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
                    <button type="submit">Login</button>
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

