
'use client';
import { useState } from 'react';
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LiveSportType from '../components/odd/LiveSportType';
import { BaseballSvg, BasketballSvg, CricketSvg, CsgoSvg, EHockey, EtennisSvg, FrustalSvg, IceHockeySvg, MenuSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from '../components/Svgs';
import PageLayout from '../pageLayout';
import './livegames.css';


export default function LiveGames() {
    const [selectedDiscipline, setSelectedDiscipline] = useState([]);
    const [showDiscipline, setShowDiscipline] = useState(false);

    const disciplines = [
        { name: 'Basketball', icon: <BasketballSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'eBasketball', icon: <BasketballSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'CS:GO', icon: <CsgoSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'BaseBall', icon: <BaseballSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'Tennis', icon: <TennisSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'eTennis', icon: <EtennisSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'TableTennis', icon: <TableTennisSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'Ice Hockey', icon: <IceHockeySvg color='#ffffff' height="16" width='16px' /> },
        { name: 'eHockey', icon: <EHockey color='#ffffff' height="16" width='16px' /> },
        { name: 'Volleyball', icon: <VolleyBallSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'Futsal', icon: <FrustalSvg color='#ffffff' height="16" width='16px' /> },
        { name: 'Cricket', icon: <CricketSvg color='#ffffff' height="16" width='16px' /> },
    ];
    const toggleSelection = (discipline) => {
        setSelectedDiscipline(prevSelected => {
            if (prevSelected.includes(discipline)) {
                return prevSelected.filter(item => item !== discipline);
            } else {
                return [...prevSelected, discipline];
            }
        });
    };
    const handleSelectedDisciplineDropDown = () => {
        !showDiscipline ? setShowDiscipline(true) : setShowDiscipline(false);
    };
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
                                <h3>Selected disciplines: <span>{selectedDiscipline.length}/{disciplines.length}</span></h3>
                            </div>
                            <div className="l-selected-hright" onClick={handleSelectedDisciplineDropDown}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="#ffffff" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                        </div>

                        <div className={`l-selected-body ${showDiscipline ? 'showSelectedBody' : 'hideSelectedBody'}`} >
                            <div className="l-selected-flex">
                                {disciplines.map((discipline, index) => (
                                    <div key={index} className={`l-selected-each ${selectedDiscipline.includes(discipline.name) ? 'l-selected-mychoice' : ''}`}>
                                        <button onClick={() => toggleSelection(discipline.name)}>
                                            {discipline.icon}
                                            <p>{discipline.name}</p>
                                        </button>
                                    </div>
                                ))}
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
