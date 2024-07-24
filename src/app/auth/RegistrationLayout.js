
import Image from 'next/image';
import './registrationlayout.css';

const RegistrationLayout = ({ children }) => {
    return (
        <div className='reg-layout'>
            <div className='reg-position'>
                <div className='reg-body'>
                    <div className='reg-content'>
                        <div className='reg-cont-tih'>
                            <div className='reg-cont-head'>
                                <Image
                                    src={'/assets/logo.png'}
                                    alt="des"
                                    height={40}
                                    width={40}
                                />
                                <h2>KIKXBET</h2>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationLayout;