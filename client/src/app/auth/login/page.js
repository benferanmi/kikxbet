
import Link from 'next/link';
import '../register.css';
import Image from 'next/image';


const page = () => {
    return (
        <main>
            <div className='reg-spec-head'>
                <h2>Login</h2>
            </div>

            <div className='reg-reg-form'>
                <form>
                    <div className='reg-input-group'>
                        <label>Email Address</label>
                        <input type='email' name='email' placeholder='johndoe123@gmail.com' />
                    </div>
                    <div className='reg-input-group'>
                        <label>Password</label>
                        <input type='password' name='password' placeholder='**********' />
                    </div>
                    <div className='reg-forgotpass'><Link href='./recoverpassword'>Forgot Password</Link></div>

                    <div className='reg-sub-button'>
                        <button type='submit'>Login</button>
                    </div>

                    <div className='reg-quests'>
                        <div className='reg-reg-question'>
                            <p>Dont have an account?</p> <span><Link href='./signup'>Signup</Link></span>
                        </div>
                    </div>

                    <div className='reg-other-methods'>
                        <div className='reg-methods'>
                            <div className='reg-met-each'>
                                <Image
                                    src='/assets/google.png'
                                    height={20}
                                    width={20}
                                    alt='des'
                                />
                                <p> Google</p>
                            </div>

                            <div className='reg-met-each' style={{ background: 'var(--teal)' }}>
                                <Image
                                    src='/assets/facebook.png'
                                    height={20}
                                    width={11}
                                    alt='des'
                                />
                                <p style={{ color: 'white' }}>  Facebook</p>
                            </div>

                            <div className='reg-met-each'>
                                <Image
                                    src='/assets/apple.png'
                                    height={32}
                                    width={28}
                                    alt='des'
                                />
                                <p> Apple</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default page;