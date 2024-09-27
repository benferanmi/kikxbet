'use client';
import { useState, useEffect } from 'react';
import BankImagesContainer from '../components/BankImagesContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LiveSportType from '../components/odd/LiveSportType';
import { BaseballSvg, BasketballSvg, CricketSvg, CsgoSvg, EHockey, EtennisSvg, FrustalSvg, IceHockeySvg, MenuSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from '../components/Svgs';
import PageLayout from '../pageLayout';
import './livegames.css';

const sportIcons = {
    BASKETBALL: <BasketballSvg color='#ffffff' height="16" width='16px' />,
    E_BASKETBALL: <BasketballSvg color='#ffffff' height="16" width='16px' />,
    CS_GO: <CsgoSvg color='#ffffff' height="16" width='16px' />,
    BASEBALL: <BaseballSvg color='#ffffff' height="16" width='16px' />,
    TENNIS: <TennisSvg color='#ffffff' height="16" width='16px' />,
    E_TENNIS: <EtennisSvg color='#ffffff' height="16" width='16px' />,
    TABLE_TENNIS: <TableTennisSvg color='#ffffff' height="16" width='16px' />,
    ICE_HOCKEY: <IceHockeySvg color='#ffffff' height="16" width='16px' />,
    E_HOCKEY: <EHockey color='#ffffff' height="16" width='16px' />,
    VOLLEYBALL: <VolleyBallSvg color='#ffffff' height="16" width='16px' />,
    FUTSAL: <FrustalSvg color='#ffffff' height="16" width='16px' />,
    CRICKET: <CricketSvg color='#ffffff' height="16" width='16px' />,
};

export default function LiveGames() {
    const [selectedDiscipline, setSelectedDiscipline] = useState([]);
    const [showDiscipline, setShowDiscipline] = useState(false);
    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        const fetchDisciplines = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/live-events/get-sports`, {
                method: 'GET'
            });
            const data = await response.json();
            const disciplinesData = data.data.map(discipline => ({
                name: discipline.name,
                id: discipline.id,
                icon: sportIcons[discipline.id.toUpperCase()]
            }));
            setDisciplines(disciplinesData);
        };

        fetchDisciplines();
    }, []);

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
        setShowDiscipline(prevShowDiscipline => !prevShowDiscipline);
    };

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
                                    <div key={index} className={`l-selected-each ${selectedDiscipline.includes(discipline) ? 'l-selected-mychoice' : ''}`}>
                                        <button onClick={() => toggleSelection(discipline)}>
                                            {discipline.icon}
                                            <p>{discipline.name}</p>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        {selectedDiscipline.length === 0 ? (
                            <p className="text-white text-center text-2xl font-bold pt-12">No disciplines selected</p>
                        ) : (
                            selectedDiscipline.map(discipline => (
                                <div key={discipline.id} className="">
                                    <h4 className="text-xl font-bold text-white mb-4 pl-4 pt-4">{discipline.name}</h4>
                                    <LiveSportType spid={discipline.id} svg={discipline.icon} />
                                </div>
                            ))
                        )}
                    </div>

                    <BankImagesContainer />
                </main>
            </PageLayout>
            <Footer />
        </>
    );
};
