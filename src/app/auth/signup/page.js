
import Image from 'next/image';
import Link from 'next/link';
import '../register.css';

const page = () => {
    return (
        <main>
            <div className='reg-spec-head'>
                <h2>Signup</h2>
            </div>

            <div className='reg-reg-form'>
                <form>
                    <div className='reg-input-group'>
                        <label>Email Address</label>
                        <input type='email' name='email' placeholder='johndoe123@gmail.com' />
                    </div>
                    <div className='reg-input-group'>
                        <label>Username</label>
                        <input type='text' name='username' placeholder='John Doe' />
                    </div>
                    <div className='reg-input-group'>
                        <label>Password</label>
                        <input type='password' name='password' placeholder='**********' />
                    </div>
                    <div className='reg-input-group'>
                        <label>Confirm Password</label>
                        <input type='password' name='password' placeholder='**********' />
                    </div>
                    <div className='reg-input-group'>
                        <label>Country of Residence </label>
                        <input type='password' name='country' placeholder='Germany' />
                    </div>

                    <div className="reg-ref-code">
                        <div className='reg-input-group'>
                            <label>Referal Code</label>
                            <input type='text' name='referralCode' placeholder='Optional' />
                        </div>
                        <p>Apply</p>

                    </div>


                    <div className="reg-check-group">
                        <div className="reg-check-g">
                            <input type="checkbox" name="accept" />
                            <p>I agree to <Link href='/terms'>terms of services</Link> to the privacy policy and to <Link href='policy' >regulations.</Link></p>
                        </div>

                    </div>


                    <div className='reg-sub-button'>
                        <button type='submit'>Signup</button>
                    </div>

                    <div className='reg-quests'>
                        <div className='reg-reg-question'>
                            <p>Already have an account?</p> <span><Link href='./login'>Login</Link></span>
                        </div>
                    </div>
                </form>
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
            </div>
        </main>
    );
};

export default page;