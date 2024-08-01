
'use client';
import '../register.css';
import { useRouter } from 'next/navigation';

const RecoverPassword = () => {
    const router = useRouter();

    const handleCancel = () => {
        router.push('./login');
    };
    return (
        <main>
            <div className='reg-spec-head'>
                <h2>Forget Your Password</h2>
            </div>

            <div className='reg-reg-form'>
                <form>
                    <div className='reg-input-group'>
                        <label>Email Address</label>
                        <input type='email' name='email' placeholder='johndoe123@gmail.com' />
                    </div>

                    <div className='forgotPassword-button'>
                        <span>
                            <div className='reg-forgot-cancel'>
                                <button type='button' onClick={handleCancel}>Cancel</button>
                            </div>
                            <div className='regforbut'>
                                <button type='submit'>Login</button>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default RecoverPassword;