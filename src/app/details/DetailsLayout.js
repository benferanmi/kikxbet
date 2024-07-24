
'use client';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageLayout from '../pageLayout';
import './detailslayout.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function DetailsLayout({ children }) {
    const pathname = usePathname();

    return (
        <>
            <Header />
            <PageLayout >
                <main>
                    <div>
                        <div className="sport324-head">
                            <h2>Details</h2>
                            <span><p>Home</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                                <p>Details</p></span>
                        </div>

                        <div className='details_hero'>

                            <div className='details_hero_head'>
                                <Image
                                    src='/assets/scoreboard.png'
                                    height={30}
                                    width={30}
                                    alt='des'
                                />
                                <p>Scoreboard</p>
                            </div>

                            <div className='detaile_hero_teamscore'>
                                <div className='details_h_tscontent'>
                                    <div className='dhtsc-left'>
                                        <div className='dhtsc-cont-left'>
                                            <Image
                                                src='/assets/changchun.png'
                                                height={60}
                                                width={60}
                                                alt='des'
                                            />
                                        </div>

                                    </div>

                                    <div className='dhtsc-mid'>
                                        <div className='dhtsc-cont-mid'>
                                            <h4>Break 1&quot;45</h4>

                                            <div className='dhtsc-scores'>
                                                <p>1</p>
                                                <span>

                                                    <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M84.4222 84.2422C85.4788 85.2989 87.1979 85.3035 88.1959 84.1913C94.1746 77.528 98.2663 69.3673 100.019 60.5546C101.949 50.8555 100.958 40.8022 97.174 31.6658C93.3896 22.5295 86.981 14.7206 78.7585 9.22657C70.5361 3.7325 60.8691 0.800049 50.98 0.800049C41.0909 0.800048 31.4239 3.7325 23.2015 9.22657C14.979 14.7206 8.57041 22.5295 4.78602 31.6658C1.00165 40.8022 0.0114782 50.8555 1.94074 60.5546C3.69371 69.3673 7.78542 77.528 13.7641 84.1913C14.7621 85.3035 16.4812 85.2989 17.5378 84.2422C18.5944 83.1856 18.5875 81.4777 17.5969 80.359C12.3711 74.4573 8.79207 67.2618 7.24793 59.4988C5.52746 50.8495 6.41047 41.8841 9.78529 33.7366C13.1601 25.589 18.8752 18.6252 26.2078 13.7257C33.5404 8.82631 42.1612 6.21122 50.98 6.21122C59.7988 6.21122 68.4196 8.82631 75.7522 13.7257C83.0848 18.6252 88.7999 25.589 92.1747 33.7366C95.5495 41.8841 96.4325 50.8495 94.7121 59.4989C93.1679 67.2618 89.5889 74.4573 84.3631 80.359C83.3725 81.4777 83.3656 83.1856 84.4222 84.2422Z" fill="#D9D9D9" />
                                                        <path d="M16.4409 18.4919C15.3497 17.4711 13.6312 17.5239 12.6709 18.6687C4.95444 27.8681 0.785904 39.5672 0.986927 51.6329C1.18795 63.6986 5.74389 75.2523 13.7625 84.1896C14.7604 85.3018 16.4797 85.2972 17.5363 84.2406C18.593 83.1841 18.586 81.4762 17.5954 80.3574C10.5657 72.4181 6.57498 62.2046 6.39734 51.5428C6.21971 40.881 9.86799 30.5402 16.6293 22.3711C17.5821 21.22 17.5322 19.5127 16.4409 18.4919Z" fill="url(#paint0_linear_251_2845)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_251_2845" x1="1.03251" y1="95.5601" x2="18.7213" y2="95.4718" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#AAFF00" />
                                                                <stop offset="1" stopColor="#FFAA1D" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <h5>Vs</h5>
                                                </span>
                                                <p>2</p>

                                            </div>


                                            <div className='dhtsc-results'>
                                                <div className='dhtsc-result'>
                                                    <div className='dhtsc-result-cont'>
                                                        <span>
                                                            <Image
                                                                src='/assets/changchun.png'
                                                                height={20}
                                                                width={15}
                                                                alt='des'
                                                            />
                                                            <p>1</p>
                                                            <p>0</p>
                                                        </span>
                                                        <span>

                                                            <p>1</p>
                                                            <p>0</p>
                                                            <Image
                                                                src='/assets/red.png'
                                                                height={12}
                                                                width={8}
                                                                alt='des'
                                                            />
                                                        </span>
                                                        <span>
                                                            <Image
                                                                src='/assets/zall.png'
                                                                height={20}
                                                                width={15}
                                                                alt='des'
                                                            />
                                                            <p>1</p>
                                                            <p>0</p>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='dhtsc-left'>
                                        <div className='dhtsc-cont-left'>
                                            <Image
                                                src='/assets/zall.png'
                                                height={60}
                                                width={60}
                                                alt='des'
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="kik-profile-menus">
                                <div className="kik-profile-menu">
                                    <span> <Link href='/details'>All Markets</Link>
                                        <div className={`kik-paymid-each ${pathname === '/details' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                    </span>

                                    <span> <Link href='/details/winner'>Winner</Link>
                                        <div className={`kik-paymid-each ${pathname === '/details/winner' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                    </span>

                                    <span> <Link href='/details/total'>Total</Link>
                                        <div className={`kik-paymid-each ${pathname === '/details/total' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                    </span>

                                    <span> <Link href='/details/handicap'>Hanicap</Link>
                                        <div className={`kik-paymid-each ${pathname === '/details/handicap' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                    </span>

                                    <span> <Link href='/details/correctscore'>Correct Score </Link>
                                        <div className={`kik-paymid-each ${pathname === '/details/correctscore' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                    </span>

                                    <span> <Link href='/details/others'>Others</Link>
                                        <div className={`kik-paymid-each ${pathname === '/profile/others' ? 'kikpfemn' : 'jkkjk'}`}></div>
                                    </span>
                                </div>
                            </div>

                            <div>
                                {children}
                            </div>


                        </div>
                    </div>
                </main>
            </PageLayout>
            <Footer />
        </>
    );
};
