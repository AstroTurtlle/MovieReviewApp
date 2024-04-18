import React from "react";
import './SignupForm.css';
import { MdEmail } from "react-icons/md";
import { FaCircleUser} from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";


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
                                Login here
                            </a>
                        </p>
                    </div>             
            </form>
        </div>
    );
};

export default SignupForm;   