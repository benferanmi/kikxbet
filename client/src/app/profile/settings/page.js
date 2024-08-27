'use client';
import { useRef, useState } from 'react';
import ProfileLayout from '../ProfileLayout';
import './settings.css';

const Settings = () => {
    const [userFacebook, setUserFacebook] = useState('');
    const [userInstagram, setUserInstagram] = useState('');
    const [userTwitter, setUserTwitter] = useState('');

    const currentPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSocialMedia = (e) => {
        e.preventDefault();
    };

    function handlePasswordChange(e) {
        e.preventDefault();

        const currentPassword = currentPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (newPassword !== confirmPassword) {
            window.alert('Password are not the same');
        } else {
            console.log(newPassword);
            console.log(currentPassword);
        }
    };


    return (
        <ProfileLayout>
            <div className='profile_settings'>
                <div className='profile_set_lang'>
                    <span>
                        <h2>Language</h2>
                        <select>
                            <option>English</option>
                        </select>
                    </span>
                </div>

                <div className='profile_set_oth'>
                    <div className='profile_set_not'>
                        <h2 className='psn_head'>Notifications</h2>

                        <form method='' action=''>
                            <div className='psnf_each'> <input type='checkbox' name='newsletters' />
                                <label>News letters & updates <br /> <span>Enable all updates</span> </label>
                            </div>

                            <div className='psnf_each'> <input type='checkbox' name='newsletters' />
                                <label>Enable Bonuses News <br /> <span>Enable all updates</span> </label>
                            </div>
                            <div className='psnf_each'> <input type='checkbox' name='newsletters' />
                                <label>Live Tournaments <br /> <span>Enable all updates</span> </label>
                            </div>
                        </form>
                    </div>


                    <div className='profile_set_social'>
                        <h2>Social Media Links</h2>
                        <form onClick={handleSocialMedia}>
                            <div className='pss_each'>
                                <label>Facebook</label>
                                <span className='psse_hr'></span>
                                <input type='text'
                                    name='facebook'
                                    value={userFacebook}
                                    onChange={(e) => setUserFacebook(e.target.value)}
                                    placeholder='https://www.facebook.com/myprofile' />
                            </div>
                            <div className='pss_each'>
                                <label>Instagram</label>
                                <span className='psse_hr'></span>
                                <input type='text'
                                    name='instagram'
                                    value={userInstagram}
                                    onChange={(e) => setUserInstagram(e.target.value)}
                                    placeholder='https://www.instagram.com/myprofile' />
                            </div>

                            <div className='pss_each'>
                                <label>Twitter</label>
                                <span className='psse_hr'></span>
                                <input type='text'
                                    name='twitter'
                                    value={userTwitter}
                                    onChange={(e) => setUserTwitter(e.target.value)} placeholder='https://www.twitter.com/myprofile' />
                            </div>
                        </form>
                    </div>

                    <div className='profile_set_password'>
                        <h2>Change Password</h2>
                        <br />
                        <form onClick={handlePasswordChange}>
                            <div className='psp_each'>
                                <label>Current Password</label>
                                <input type='password' name='currentPassword' ref={currentPasswordRef} placeholder='Enter your current Password' />
                            </div>

                            <div className='psp_each'>
                                <label>Current Password</label>
                                <input type='password' name='currentPassword' ref={newPasswordRef} placeholder='Enter your New Password' />
                            </div>

                            <div className='psp_each'>
                                <label>Current Password</label>
                                <input type='password' ref={confirmPasswordRef} placeholder='Enter your Password Again' />
                            </div>
                            <br />

                            <button type='submit'>Change Password Now
                            </button>
                        </form>
                    </div>


                    <div className='profile_set_delete'>
                        <span>
                            <p>Delete My Account</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width='12px' height='15px'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>
                </div>

            </div>
        </ProfileLayout>
    );
};

export default Settings;