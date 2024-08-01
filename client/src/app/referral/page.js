
'use client';
import Image from 'next/image';
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageLayout from '../pageLayout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './referral.css';
import { useState } from 'react';

const ReferralPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5);

    const data = [
        { date: '16 Apr', level: 'Level 1', username: 'john_doe', email: 'john@example.com' },
        { date: '17 Apr', level: 'Level 2', username: 'jane_smith', email: 'jane@example.com' },
        { date: '18 Apr', level: 'Level 1', username: 'alice_jones', email: 'alice@example.com' },
        { date: '19 Apr', level: 'Level 5', username: 'bob_brown', email: 'bob@example.com' },
        { date: '20 Apr', level: 'Level 3', username: 'charlie_black', email: 'charlie@example.com' },
        { date: '21 Apr', level: 'Level 2', username: 'david_white', email: 'david@example.com' },
        { date: '22 Apr', level: 'Level 4', username: 'eve_green', email: 'eve@example.com' },
        { date: '23 Apr', level: 'Level 1', username: 'frank_yellow', email: 'frank@example.com' },
        { date: '24 Apr', level: 'Level 5', username: 'grace_purple', email: 'grace@example.com' },
        { date: '25 Apr', level: 'Level 3', username: 'hank_red', email: 'hank@example.com' },
        { date: '26 Apr', level: 'Level 2', username: 'iris_blue', email: 'iris@example.com' },
        { date: '27 Apr', level: 'Level 4', username: 'jack_orange', email: 'jack@example.com' },
        { date: '28 Apr', level: 'Level 1', username: 'karen_pink', email: 'karen@example.com' },
        { date: '29 Apr', level: 'Level 5', username: 'leo_gray', email: 'leo@example.com' },
        { date: '30 Apr', level: 'Level 3', username: 'mona_cyan', email: 'mona@example.com' },
        { date: '01 May', level: 'Level 2', username: 'nina_magenta', email: 'nina@example.com' },
        { date: '02 May', level: 'Level 4', username: 'oliver_lime', email: 'oliver@example.com' },
        { date: '03 May', level: 'Level 1', username: 'paul_teal', email: 'paul@example.com' },
        { date: '04 May', level: 'Level 5', username: 'quinn_brown', email: 'quinn@example.com' },
        { date: '05 May', level: 'Level 3', username: 'rachel_olive', email: 'rachel@example.com' },
        { date: '06 May', level: 'Level 2', username: 'sam_silver', email: 'sam@example.com' },
    ];


    const handleShowMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 5, data.length));
    };

    return (
        <>
            <Header />

            <PageLayout>
                <div className='kikx-rewards'>
                    <div className='kikx-reward'>
                        <div className='kikx-reward-heros'>
                            <div className='kikx-reward-hero'>
                                <div className='kikx-reward-hero-cont'>
                                    <div className='kikx-rhc-left'>
                                        <h1>Referral a Friend and Earn $6 for 1 Sign-up</h1>
                                    </div>
                                    <div className='mobile-hidden kikx-rhc-right'>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='kikx-reward-reflinks'>
                            <div className='kikx-reward-reflink'>
                                <div className='kikx-reward-reflink-cont'>
                                    <div className='kikx-reward-reflink-cleft'>
                                        <span className='kikx-rrcs'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height='20px' width='20px' >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                        </span>

                                        <h2>Referral Link:</h2> <p>{ }https://www.spovest.com?ardf0u4803</p>
                                    </div>
                                    <div className='kikx-reward-reflink-cright'>
                                        <button>Copy Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='kikx-reward-refearned'>
                            <div className='kikx-reward-refearn'>
                                <div className='kikx-reward-re-cont'>
                                    <div className='kikx-reward-re-eachs'>
                                        <div className='kikx-reward-re-each'>
                                            <span>
                                                <Image
                                                    src='/assets/referralearn.png'
                                                    height={50}
                                                    width={50}
                                                    alt='des'
                                                />

                                                <h3>
                                                    $2956.00
                                                    <p>Earned Refferal</p>
                                                </h3>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='kikx-reward-re-eachs'>
                                        <div className='kikx-reward-re-each'>
                                            <span>
                                                <Image
                                                    src='/assets/lastmonth.png'
                                                    height={50}
                                                    width={50}
                                                    alt='des'
                                                />

                                                <h3>
                                                    $260.00
                                                    <p>Last Month</p>
                                                </h3>
                                            </span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className='kikx-reward-myref-bodys'>
                            <div className='kikx-reward-myref-body'>
                                <div className='kikx-remyb-each'>
                                    <h2>Date</h2>
                                    <h2>Level</h2>
                                    <h2>Username</h2>
                                    <h2>Email</h2>
                                </div>
                                {data.slice(0, visibleCount).map((item, index) => (
                                    <div key={index} className='kikx-remyb-each'>
                                        <p>{item.date}</p>
                                        <p>{item.level}</p>
                                        <p>{item.username}</p>
                                        <p>{item.email}</p>
                                    </div>
                                ))}
                                {visibleCount < data.length && (
                                    <div className='kikx-remyb-button'>
                                        <button onClick={handleShowMore}>Show More</button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </PageLayout>
            <div className='bankimagecont'>
                <BankImagesContainer />

            </div>
            <Footer />
        </>
    );
};

export default ReferralPage;