import React, { useState, useEffect, useRef } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';

const ProfilePage = () => {

    const [isChangePassHidden, setChangePassHidden] = useState(false);

    const onClickHide = () => setChangePassHidden(!isChangePassHidden);

    const [isActive, setisActive] = useState(false);
    
    const userId = localStorage.getItem('userId');
    const [loading, setLoading] = useState(true);
    const [userName, setuserName] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [userPass, setuserPass] = useState('');
    const currentDate = new Date().toLocaleDateString();
    const userNameInputRef = useRef(null);
    const currentPassInputRef = useRef(null);
    const newPassInputRef = useRef(null);
    const confirmPassInputRef = useRef(null);
    const [newPassword, setNewPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [currpasswordError, setCurrPasswordError] = React.useState(false);
    const [usernameError, setUsernameError] = React.useState(false);
    const [passwordFormatError, setPasswordFormatError] = React.useState(false);

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
        if (value == "")
            setPasswordFormatError(false);
    }

    function confirmPassword(event) {
        const value = event.target.value;
        if (newPassInputRef.current.value != value) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        if (value == "")
            setPasswordError(false);
    }

    function currPassword(event) {
        const value = event.target.value;
        if (userPass != value) {
            setCurrPasswordError(true);
        } else {
            setCurrPasswordError(false);
        }
        if (value == "")
            setCurrPasswordError(false);
    }

    useEffect(() => {
        const fetchUserInfo = axios.get('http://localhost:8080/userinfo', {
            params: { userId: userId }
        });

        Promise.all([fetchUserInfo]).then((responses) => {
            const userInfoResponse = responses[0];

            if (!userInfoResponse.data.error) {
                setuserName(userInfoResponse.data[0].userName);
                setuserEmail(userInfoResponse.data[0].userEmail);
                setuserPass(userInfoResponse.data[0].userPassword);
            } else {
                console.log("No results found for user info");
            }

            setLoading(false);
        });
    }, []);

    async function handleClickChange() {
        if(isChangePassHidden) {
            if(userPass != currentPassInputRef.current.value) {
                setCurrPasswordError(true);
            } else {
                setCurrPasswordError(false);
                if(newPassInputRef.current.value != confirmPassInputRef.current.value) {
                    setPasswordError(true);
                } else {
                    setPasswordError(false);
                    if(newPassInputRef.current.value != '') {
                        try {
                            const response = await axios.post(`http://localhost:8080/editpass/${userId}/${newPassInputRef.current.value}`);
                            if (response.status === 200) {
                            console.log('User updated succesfully');
                            } else {
                            console.log('Failed to update user');
                            }
                        } catch (error) {
                            console.error('Error updating user', error);
                        }
                    }
                }
            }
        }
        if(userName != userNameInputRef.current.value && userNameInputRef.current.value != '') {
            setuserName(userNameInputRef.current.value);
            try {
                const response = await axios.post(`http://localhost:8080/edit/${userId}/${userNameInputRef.current.value}`);
                if (response.status === 200) {
                console.log('User updated succesfully');
                } else {
                console.log('Failed to update user');
                }
            } catch (error) {
                console.error('Error updating user', error);
            }
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div className='pagina-profil-full'>
        <div className='pagina-profil'>
            <div className='profil-header'>
                <div className='container-profil-header'>
                    <div className='ph-titlu'>Hello, {userName}</div>
                    <div className='ph-nav'>
                        <ul className='nav-bar'>
                            <li className='nav-item'>
                                <a className='nav-link-active' href='/profile'>
                                <i className='fas fa-user mr-2'>
                                    </i>
                                 Edit Profile
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/bookmark'>
                                <i className='fas fa-bookmark mr-2'>
                                    </i>
                                Bookmarks
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='profil-container'>
                <div className='container-profil-box'>
                    <div className='profile-box'>
                        <h2 className='h2-heading mb-4 profile-title'>
                            <i className='fas fa-user mr-3'></i>
                        Edit Profile
                        </h2>
                        <div className='content-area'>
                            <div className='rows'>
                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                    <div className='form-group'>
                                    <label className='form-label'>Email address</label>
                                        <input type='email' class='control-form' disabled readOnly value={userEmail}></input>
                                    </div>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                    <div className='form-group'>
                                    <label className='form-label'>Username</label>
                                        <input type='' class='control-form' required defaultValue={userName} ref={userNameInputRef} onChange={changeUsername}></input>
                                    </div>
                                </div>
                                <div className='col-xl-12 cl-lg-12 col-md-12'>
                                    <div className='form-group'>
                                    <label className='form-label'>Join date</label>
                                        <input type='text' class='control-form' disabled value={currentDate}></input>
                                    </div>
                                </div>
                                <div className='col-xl-12 cl-lg-12 col-md-12'>
                                    <a class="btn-pass" href='#' onClick={onClickHide} aria-controls='show-changepass' aria-expanded={isChangePassHidden}>
                                        <i class="fas fa-key mr-2"></i>
                                    Change password
                                    </a>
                                    <Collapse in={isChangePassHidden}>
                                        <div id='show-changepass' className='mt-3' >
                                            <div className='form-group'>
                                            <label className='form-label'>Curent password</label>
                                                <input type='password' class='control-form' required ref={currentPassInputRef} onChange={currPassword}></input>   
                                            </div>
                                            <div className='form-group'>
                                            <label className='form-label'>New password</label>
                                                <input type='password' class='control-form' required ref={newPassInputRef} onChange={changePassword}></input>   
                                            </div>
                                            <div className='form-group'>
                                            <label className='form-label'>Confirm new password</label>
                                                <input type='password' class='control-form' required ref={confirmPassInputRef} onChange={confirmPassword} ></input>   
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                        <div class='form-group'>
                                            <div className='mt-4'>
                                                { passwordFormatError || currpasswordError || passwordError || usernameError ? (
                                                <button disabled class='btn-save' style={{backgroundColor: '#A9A9A9'}} onClick={handleClickChange}>Save</button>
                                                ):(
                                                    <button class='btn-save' onClick={handleClickChange}>Save</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-12 col-lg-12 col-md-12'>
                                        { passwordError ? (
                                        <div style={{ color: 'red' }}>Error: Passwords do not match </div>
                                        ):(null)}
                                        { currpasswordError ? (
                                        <div style={{ color: 'red' }}>Error: Incorrect password</div>
                                        ):(null)}
                                        { passwordFormatError ? (
                                        <div style={{ color: 'red' }}>Error: Password format is incorrect</div>
                                        ):(null)}
                                        { usernameError ? (
                                        <div style={{ color: 'red' }}>Error: Incorrect username format</div>
                                        ):(null)}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default ProfilePage;