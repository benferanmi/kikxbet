
'use client';

import ProfileLayout from './ProfileLayout';
import { useRef } from 'react';
import './profile.css';
import ProgressBar from '../components/ProgressBar';

const ProfilePage = () => {
    const fileInputRef = useRef(null);

    const handleProfilePicsUpload = () => {
        fileInputRef.current.click();
    };

    const handleProfilePicsChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
        }
    };

    return (
        <div>
            <ProfileLayout>
                <div className='profilepage'>
                    <div className='profile_page'>
                        <div className='profile_page_flex'>
                            <div className='profile_pf_right'>
                                <div className='profile_pfr_body'>
                                    <div className='profile_pfr_top'>
                                        <p>Account</p>
                                        <h2>Login Username: John Doe</h2>
                                        <button>RESET NET PROFIT</button>
                                    </div>

                                    <div className='profile_pfr_top profile_pfr_middle'>
                                        <p>Details</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height='14px' width='14px'>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                            <p>John Doe</p></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height='14px' width='14px'>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                            <p>johndoe@gmail.com</p></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height='14px' width='14px'>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                            <p>+235 546 767 98</p></span>
                                    </div>

                                    <div className='profile_pfr_top profile_pfr-bottom'>
                                        <p>Change Profile Picture</p>

                                        <div className='profile_pfr_picture'>
                                            <input type='file' name='profilePicture'
                                                ref={fileInputRef}
                                                onChange={handleProfilePicsChange}
                                                style={{ display: 'none' }} />

                                            <div type="button" onClick={handleProfilePicsUpload} className="profile_pfr_file">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height='40px' width='40px' >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                                </svg>
                                                <h3>Choose file to upload</h3>
                                                <span>
                                                    Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF
                                                    with a max size of 5 ME
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='profile_pf_left'>
                                <div className='profile_pfl_body'>
                                    <div className='profile_pfl_content'>
                                        <h3>Verification</h3>
                                        <p className='pfl-des'>In consectetur pharetra ipsum id aliquam. Ut
                                            viverra enim a arcu accumsan, at vehicula nulla
                                            malesuada.</p>
                                        <div className='pfl-tasks'><span></span> tasks completed out of 3</div>
                                        <ProgressBar progress={20} />
                                        <div className='pfl-levels'>
                                            <span>
                                                <p>Level One</p>
                                                <button style={{ color: 'var(--green)' }}>Click here to complete</button>
                                            </span>
                                            <span>
                                                <p style={{ color: '#D75C5C' }}>Level Two</p>
                                                <button style={{ color: '#8E5858' }}>Complete Level One first</button>
                                            </span>
                                            <span>
                                                <p style={{ color: '#D75C5C' }}>Level Three</p>
                                                <button style={{ color: '#8E5858' }}>Complete Level Two First.</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileLayout>
        </div>
    );
};

export default ProfilePage;