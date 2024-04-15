import React from "react";
import './LoginForm.css';
import { FaCircleUser,FaLock } from "react-icons/fa6";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>    
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaCircleUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required/>
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Keep me logged in
                        </label>
                        <a href="#"> Forgot password? </a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?  
                            <a href=""> 
                                Sign up here
                            </a>
                        </p>
                    </div>
                    
            </form>
        </div>
    );
};

export default LoginForm;   