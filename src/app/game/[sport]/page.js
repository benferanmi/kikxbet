
'use client';
import PageLayout from '@/app/pageLayout';
import { useParams } from 'next/navigation';
import BankImagesContainer from '@/app/components/BankImagesContainer';
import './sport5666.css';
import LiveSportType from '@/app/components/odd/LiveSportType';
import SportType from '@/app/components/SportType';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


const SportPage = () => {
    const params = useParams();
    const { sport } = params;

    const liveEvents = [
        {}
    ];
    const todayEvents = [
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    // const tomorrowEvents = [
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    // ];

    return (
        <div>
            <Header />
            <PageLayout>
                <main>
                    <div>
                        <div className="sport324-head">
                            <h2 style={{ textTransform: 'capitalize' }}>{sport}</h2>
                            <span><p>Home</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                                <p>{sport}</p></span>
                        </div>

                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Live Events</h1>
                            </div>
                            <LiveSportType svg='football' leagueTypeOfJson={liveEvents} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        </div>

                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Today</h1>
                            </div>
                            <SportType svg='rocketleague' leagueTypeOfJson={todayEvents} leagueName='Saturday Championship League' />
                        </div>

                    </div>
                </main>

            </PageLayout>

            <BankImagesContainer />
            <Footer />
        </div>
    );
};

export default SportPage;