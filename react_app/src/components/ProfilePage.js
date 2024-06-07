import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const ProfilePage = () => {

    const [isChangePassHidden, setChangePassHidden] = useState(false);

    const onClickHide = () => setChangePassHidden(!isChangePassHidden);

    const [isActive, setisActive] = useState(false);

    const handleClickChange = () => {
        setisActive(isActive => !isActive)
    }
    return(
        <div className='pagina-profil-full'>
        <div className='pagina-profil'>
            <div className='profil-header'>
                <div className='container-profil-header'>
                    <div className='ph-titlu'>Hello, Drwpa</div>
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
                                        <input type='email' class='control-form' disabled readOnly value={"50Cent@whyyoufackmefor.com"}></input>
                                    </div>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                    <div className='form-group'>
                                    <label className='form-label'>Username</label>
                                        <input type='' class='control-form' required defaultValue={"50Cent"}></input>
                                    </div>
                                </div>
                                <div className='col-xl-12 cl-lg-12 col-md-12'>
                                    <div className='form-group'>
                                    <label className='form-label'>Join date</label>
                                        <input type='text' class='control-form' disabled value={"Old ASF"}></input>
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
                                                <input type='password' class='control-form' required></input>   
                                            </div>
                                            <div className='form-group'>
                                            <label className='form-label'>New password</label>
                                                <input type='password' class='control-form' required></input>   
                                            </div>
                                            <div className='form-group'>
                                            <label className='form-label'>Confirm new password</label>
                                                <input type='password' class='control-form' required></input>   
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                        <div class='form-group'>
                                            <div className='mt-4'>
                                                <button class='btn-save' style={{backgroundColor: isActive ? '#979797' : '', color: isActive ? '#333' : ''}} onMouseDown={handleClickChange} onMouseUp={handleClickChange}>Save</button>
                                            </div>
                                        </div>
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