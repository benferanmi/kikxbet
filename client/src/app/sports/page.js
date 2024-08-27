
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SportType from '../components/SportType';
import PageLayout from '../pageLayout';
import './css/sports.css';

export default function Sports() {
    const leagueTypeOfJson = [
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
                            <h2>Sports</h2>
                            <span><p>Home</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                                <p>Sports</p></span>
                        </div>

                        
                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Prematch 14.10.2023</h1>
                            </div>
                            <SportType leagueTypeOfJson={leagueTypeOfJson} svg='mma' leagueName='Mixed Martial Arts. KSW' />
                        </div>
                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Prematch 15.10.2023</h1>
                            </div>
                            <SportType leagueTypeOfJson={leagueTypeOfJson} svg='mma' leagueName='Mixed Martial Arts. KSW' />
                        </div>
                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Prematch 16.10.2023</h1>
                            </div>
                            <SportType leagueTypeOfJson={leagueTypeOfJson} svg='mma' leagueName='Mixed Martial Arts. KSW' />
                        </div>
                        <div>
                            <div className="hkik-oddline-head">
                                <h1>Prematch 17.10.2023</h1>
                            </div>
                            <SportType leagueTypeOfJson={leagueTypeOfJson} svg='mma' leagueName='Mixed Martial Arts. KSW' />
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
