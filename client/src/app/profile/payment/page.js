
'use client';

import LeftSideBar from '@/app/components/LeftSideBar';
import './kikpayment.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const PaymentPage = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <main className="kik-payments">
            <Header />
            <div className="kik-payment">
                <div className="kik-payment-flex">
                    <div className="kik-payflex-left">
                        <LeftSideBar />
                    </div>

                    <div className="kik-payflex-mid">
                        <div className="kik-paymid">
                            <div className="kik-paymid-content">
                                <Link href='/profile/payment' className={`kik-paymid-each ${pathname === '/payment' ? 'active' : ''}`}>
                                    <p> Deposit</p>
                                </Link>

                                <Link href='/profile/withdraw' className={`kik-paymid-each ${pathname === '/withdraw' ? 'active' : ''}`}>
                                    <p>Withdrawal</p>
                                </Link>
                                <Link href='/' className={`kik-paymid-each ${pathname === '/cancelwithdrawal' ? 'active' : ''}`}>
                                    <p> Cancel Withdrawal</p>
                                </Link>
                                <Link href='/' className={`kik-paymid-each ${pathname === './profile' ? 'active' : ''}`}>
                                    <p> Profile</p>
                                </Link>
                                <Link href='/' className={`kik-paymid-each ${pathname === '/settings' ? 'active' : ''}`}>
                                    <p> Settings</p>
                                </Link>
                                <Link href='/' className={`kik-paymid-each ${pathname === '/logout' ? 'active' : ''}`}>
                                    <p> Logout</p>
                                </Link>
                            </div>
                        </div>
                    </div>



                    <div className="kik-payflex-right">

                        <div className="kik-payrflex">
                            <h2>Payment Methods</h2>
                            <div className="kik-payright">
                                <div className="kik-payright-imgs">
                                    <button>
                                        <Image
                                            src='/assets/visacard2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/mastercard2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/skrill2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/neteller2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/payz.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/astropay2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/jeton.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/mifinity.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/tethersol.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/tethererc20.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/tethertrc20.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/bitcoin2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/litecoin2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/ethereum2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/ripple.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <Image
                                            src='/assets/usdcoin.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>
                                    <button>
                                        <Image
                                            src='/assets/dogecoin.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>


                                    <button>
                                        <Image
                                            src='/assets/visacard2.png'
                                            height={40}
                                            width={98}
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PaymentPage;