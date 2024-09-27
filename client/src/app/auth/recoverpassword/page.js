'use client';
import '../register.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RecoverPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleCancel = () => {
        router.push('./login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('Forgot password email sent');
                setSubmitted(true);
            } else {
                const errorData = await response.json();
                setError(errorData.error.message || 'Failed to send forgot password email. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <section>
            <div className='reg-spec-head'>
                <h2>Forget Your Password</h2>
            </div>

            <div className='reg-reg-form'>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className='reg-input-group'>
                            <label>Email Address</label>
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='johndoe123@gmail.com' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>

                        <div className='forgotPassword-button'>
                            <span>
                                <div className='reg-forgot-cancel'>
                                    <button type='button' onClick={handleCancel}>Cancel</button>
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
                )}
            </div>
        </section>
    );
};

export default RecoverPassword;