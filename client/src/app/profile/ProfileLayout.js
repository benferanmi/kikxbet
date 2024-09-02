
'use client';
import Link from 'next/link';
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageLayout from '../pageLayout';
import './profilelayout.css';
import { usePathname } from 'next/navigation';

const ProfileLayout = ({ children }) => {
    const pathname = usePathname();

    const handleLogout = () => {
        
    };


    return (
        <div>
            <Header />
            <PageLayout>
                <main>
                    <div>
                        <div className="sport324-head">
                            <h2 style={{ textTransform: 'capitalize' }}>Profile</h2>
                            <span><p>Home</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                                <p>Profile</p></span>
                        </div>

                        <div className="kik-profile-menus">
                            <div className="kik-profile-menu">
                                <span> <Link href='/profile'>Profile</Link>
                                    <div className={`kik-paymid-each ${pathname === '/profile' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>

                                <span> <Link href='/profile/mybets'>Bet History</Link>
                                    <div className={`kik-paymid-each ${pathname === '/profile/mybets' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>

                                <span> <Link href='/profile/settings'>Settings</Link>
                                    <div className={`kik-paymid-each ${pathname === '/profile/settings' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>

                                <span> <Link href='/profile/wallets'>Wallets</Link>
                                    <div className={`kik-paymid-each ${pathname === '/profile/wallets' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>

                                <span> <Link href='/profile/rewards'>Rewards</Link>
                                    <div className={`kik-paymid-each ${pathname === '/profile/rewards' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>

                                <span> <Link href='/profile/verification'>Verification</Link>
                                    <div className={`kik-paymid-each ${pathname === '/profile/verification' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>

                                <span> <button className='pointer' onClick={handleLogout}>Log Out</button>
                                    <div className={`kik-paymid-each ${pathname === '/logout' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                </span>
                            </div>
                        </div>
                        <div>
                            {children}
                        </div>

                    </div>
                </main>

            </PageLayout>
            <BankImagesContainer />
            <Footer />



        </div>
    );
};

export default ProfileLayout;