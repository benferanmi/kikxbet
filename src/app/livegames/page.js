
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LiveSportType from '../components/odd/LiveSportType';
import { BaseballSvg, BasketballSvg, CricketSvg, CsgoSvg, EHockey, EtennisSvg, FrustalSvg, IceHockeySvg, MenuSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from '../components/Svgs';
import PageLayout from '../pageLayout';
import './livegames.css';


export default function LiveGames() {

    const leagueTypeOfJson = [
        {},
    ];

    return (
        <>
            <Header />
            <PageLayout >
                <main>

                    <div className="l-selected-dis">
                        <div className="l-selected-head">
                            <div className="l-selected-hleft">
                                <MenuSvg color='#ffffff' height='15px' width='15px' />
                                <h3>Selected disciplines: <span>3/14</span></h3>
                            </div>
                            <div className="l-selected-hright">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#ffffff" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                        </div>

                        <div className="l-selected-body">
                            <div className="l-selected-flex">
                                <div className="l-selected-each">
                                    <button><BasketballSvg color='#ffffff' height="16" width='16px' /><p> Basketball</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><BasketballSvg color='#ffffff' height="16" width='16px' /><p> eBasketball</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><CsgoSvg color='#ffffff' height="16" width='16px' /><p> CS:GO</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><BaseballSvg color='#ffffff' height="16" width='16px' /><p> BaseBall</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><TennisSvg color='#ffffff' height="16" width='16px' /><p> Tennis</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><EtennisSvg color='#ffffff' height="16" width='16px' /><p> eTennis</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><TableTennisSvg color='#ffffff' height="16" width='16px' /><p> TableTennis</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><IceHockeySvg color='#ffffff' height="16" width='16px' /><p> Ice Hockey</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><EHockey color='#ffffff' height="16" width='16px' /><p> eHockey</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><VolleyBallSvg color='#ffffff' height="16" width='16px' /><p> Volleyball</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><FrustalSvg color='#ffffff' height="16" width='16px' /><p> Futsal</p> </button>
                                </div>

                                <div className="l-selected-each">
                                    <button><CricketSvg color='#ffffff' height="16" width='16px' /><p> Cricket</p> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hkik-oddline-head">
                            <h1>eBasketball</h1>
                        </div>
                        <LiveSportType svg='basketball' leagueTypeOfJson={leagueTypeOfJson} leagueName='Australian Championship. NBL' />
                        <LiveSportType svg='basketball' leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of the Philippines. UAAP' />
                        <LiveSportType svg='basketball' leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of the Turkey. UAAP' />
                        <LiveSportType svg='basketball' leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of the Philippines. UAAP' />
                        <LiveSportType svg='basketball' leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of Turkey. BSL' />
                    </div>

                    <div>
                        <div className="hkik-oddline-head">
                            <h1>eHockey</h1>
                        </div>
                        <LiveSportType svg='ehockey' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='ehockey' leagueTypeOfJson={leagueTypeOfJson} leagueName='Basketball. NBA (5x5)' />
                        <LiveSportType svg='ehockey' leagueTypeOfJson={leagueTypeOfJson} leagueName='Football. UEFA Champions League (11x11)' />
                        <LiveSportType svg='ehockey' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='ehockey' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='ehockey' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                    </div>
                    <div>
                        <div className="hkik-oddline-head">
                            <h1>eFootball</h1>
                        </div>
                        <LiveSportType svg='football' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='football' leagueTypeOfJson={leagueTypeOfJson} leagueName='Basketball. NBA (5x5)' />
                        <LiveSportType svg='football' leagueTypeOfJson={leagueTypeOfJson} leagueName='Football. UEFA Champions League (11x11)' />
                        <LiveSportType svg='football' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='football' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='football' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                    </div>

                    <div>
                        <div className="hkik-oddline-head">
                            <h1>Cricket</h1>
                        </div>
                        <LiveSportType svg='cricket' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='cricket' leagueTypeOfJson={leagueTypeOfJson} leagueName='Basketball. NBA (5x5)' />
                        <LiveSportType svg='cricket' leagueTypeOfJson={leagueTypeOfJson} leagueName='Football. UEFA Champions League (11x11)' />
                        <LiveSportType svg='cricket' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='cricket' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType svg='cricket' leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                    </div>


                    <BankImagesContainer />
                </main>
            </PageLayout>
            <Footer />
        </>
    );
};
