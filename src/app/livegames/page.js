import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveSportType from "../components/odd/LiveSportType";
import { BaseballSvg, BasketballSvg, CricketSvg, CsgoSvg, EHockey, EtennisSvg, FrustalSvg, IceHockeySvg, MenuSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from "../components/Svgs";
import PageLayout from "../pageLayout";
import './livegames.css'
import Image from "next/image";



// src/app/promotion/page.js
export default function LiveGames() {

    const leagueTypeOfJson = [
        {},

    ]
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
                                {">"}
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
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Australian Championship. NBL' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of the Philippines. UAAP' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of the Turkey. UAAP' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of the Philippines. UAAP' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Championship of Turkey. BSL' />
                    </div>

                    <div>
                        <div className="hkik-oddline-head">
                            <h1>eHockey</h1>
                        </div>
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Basketball. NBA (5x5)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Football. UEFA Champions League (11x11)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                    </div>
                    <div>
                        <div className="hkik-oddline-head">
                            <h1>eFootball</h1>
                        </div>
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Basketball. NBA (5x5)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Football. UEFA Champions League (11x11)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                    </div>

                    <div>
                        <div className="hkik-oddline-head">
                            <h1>Cricket</h1>
                        </div>
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Basketball. NBA (5x5)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Football. UEFA Champions League (11x11)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                        <LiveSportType leagueTypeOfJson={leagueTypeOfJson} leagueName='Cyberhockey. EHC CUP (3x4 MиH.)' />
                    </div>


                    <div className="bankIcons">
                        <div className="bankIcon">
                            <div className="bankIconImg" >
                                <Image
                                    src="/assets/visa.png"
                                    alt="des"
                                    width={62}
                                    height={20}
                                />

                                <Image
                                    src="/assets/mastercard.png"
                                    alt="des"
                                    width={39}
                                    height={31}
                                />

                                <Image
                                    src="/assets/skrill.png"
                                    alt="des"
                                    width={62}
                                    height={22}
                                />

                                <Image
                                    src="/assets/maestro.png"
                                    alt="des"
                                    width={50}
                                    height={31}
                                />

                                <Image
                                    src="/assets/paysafe.png"
                                    alt="des"
                                    width={62}
                                    height={11}
                                />

                                <Image
                                    src="/assets/webmoney.png"
                                    alt="des"
                                    width={62}
                                    height={16}
                                />

                                <Image
                                    src="/assets/net.png"
                                    alt="des"
                                    width={62}
                                    height={11}
                                /><Image
                                    src="/assets/debit.png"
                                    alt="des"
                                    width={62}
                                    height={29}
                                /><Image
                                    src="/assets/netent.png"
                                    alt="des"
                                    width={62}
                                    height={16}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </PageLayout>
            <Footer />
        </>
    );
}
