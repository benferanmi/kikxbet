'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import '../../register.css';

const ResetPassword = () => {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);
    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/validate-token?token=${token}`);
                if (res.ok) {
                    setIsTokenValid(true);
                } else {
                    setError('Invalid or expired token. Please try again.');
                }
            } catch (error) {
                setError('An error occurred while verifying the token. Please try again later.');
            }
        };

        if (token) {
            verifyToken();
        } else {
            setError('No token provided. Please try again.');
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword: password }),
            });

            if (response.ok) {
                const result = await response.json();
                const { authToken, ...userData } = result.data;

                // Save token and user data in cookies
                Cookies.set('authToken', authToken, { expires: 7 });
                Cookies.set('userData', JSON.stringify(userData), { expires: 7 });

                setMessage('Password reset successfully');
                setSubmitted(true);

                // Redirect to the dashboard or another authenticated page
                router.push('/');
            } else {
                const errorData = await response.json();
                setError(errorData.error.message || 'Failed to reset password. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <section>
            <div className='reg-spec-head'>
                <h2>Change Your Password</h2>
            </div>

            <div className='reg-reg-form'>
                {isTokenValid ? (
                    !submitted ? (
                        <form onSubmit={handleSubmit}>
                            <div className='reg-input-group'>
                                <label>Password</label>
                                <input 
                                    type='password' 
                                    name='password' 
                                    placeholder='**********' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <div className='reg-input-group'>
                                <label>Confirm Password</label>
                                <input 
                                    type='password' 
                                    name='confirmPassword' 
                                    placeholder='**********' 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                />
                            </div>

                            <div className='forgotPassword-button'>
                                <span>
                                    <div className='reg-forgot-cancel'>
                                        <button type='button' onClick={() => router.push('/auth/login')}>Cancel</button>
                                    </div>
                                    <div className='regforbut'>
                                        <button type='submit'>Submit</button>
                                    </div>
                                </span>
                            </div>
                            {error && <p className='error'>{error}</p>}
                        </form>
                    ) : (
                        <p className='success'>{message}</p>
                    )
                ) : (
                    <p className='error'>{error}</p>
                )}
            </div>
        </section>
    );
};

export default ResetPassword;
