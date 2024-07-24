
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LiveSportType from '../components/odd/LiveSportType';
import SportType from '../components/SportType';
import PageLayout from '../pageLayout';
import './virtual.css';



// src/app/promotion/page.js
export default function Virtual() {
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

    const tomorrowEvents = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    return (
        <>
            <Header />
            <PageLayout >
                <main>
                    <div>
                        <div className="sport324-head">
                            <h2>V-Sports</h2>
                            <span><p>Home</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                                <p>V-Sports</p></span>
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

                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Tomorrow</h1>
                            </div>
                            <SportType svg='rocketleague' leagueTypeOfJson={tomorrowEvents} leagueName='Saturday Championship League' />
                        </div>

                        <div>
                            <BankImagesContainer />
                        </div>
                    </div>
                </main>
            </PageLayout>
            <Footer />
        </>
    );
};
