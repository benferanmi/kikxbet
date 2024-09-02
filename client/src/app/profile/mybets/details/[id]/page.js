'use client'
import { useEffect, useState } from 'react';
import ProfileLayout from '../../../ProfileLayout';
import '../../mybets.css'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


const BetDetail = () => {
    const [visible, setVisible] = useState(false)
    const [slipResult, setSlipResult] = useState(null)
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const numID = Number(id)

    const jsonData = [
        {
            id: 1,
            type: 'settled',
            date: '2024-08-01',
            method: 'single',
            result: 'win',
            time: '14:30',
            totalStake: 100,
            totalReturn: '0.00',
            item: {
                outcome: 'won',
                games: [
                    {
                        homeTeam: 'Team A',
                        awayTeam: 'Team B',
                        homeTeamScore: 2,
                        awayTeamScore: 1,
                        picks: ['Team A to win', 'Over 2.5 goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-07-30',
                        outcome: 'won',
                        result: 'home(1 : 1)',
                        betTime: '16:00',
                    },
                    {
                        homeTeam: 'Team C',
                        awayTeam: 'Team D',
                        homeTeamScore: 3,
                        awayTeamScore: 0,
                        picks: ['Team C to win', 'Both teams to score'],
                        market: 'ist Half Handicap',
                        betDate: '2024-07-31',
                        outcome: 'won',
                        result: 'home(3 : 0)',
                        betTime: '18:30',
                    },
                    {
                        homeTeam: 'Team E',
                        awayTeam: 'Team F',
                        homeTeamScore: 1,
                        awayTeamScore: 1,
                        picks: ['Draw', 'Under 3.5 goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-01',
                        outcome: 'won',
                        result: 'draw(1 : 1)',
                        betTime: '12:00',
                    },
                    {
                        homeTeam: 'Team G',
                        awayTeam: 'Team H',
                        homeTeamScore: 4,
                        awayTeamScore: 2,
                        picks: ['Team G to win', 'Over 3.5 goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-01',
                        outcome: 'won',
                        result: 'home(4 : 2)',
                        betTime: '14:00',
                    },
                    {
                        homeTeam: 'Team I',
                        awayTeam: 'Team J',
                        homeTeamScore: 0,
                        awayTeamScore: 0,
                        picks: ['Draw', 'No goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-01',
                        outcome: 'won',
                        result: 'away',
                        betTime: '14:15',
                    },
                ],
            },
        },
        {
            id: 2,
            type: 'unsettled',
            date: '2024-08-05',
            method: 'multiple',
            result: 'lost',
            time: '09:15',
            totalStake: 50,
            totalReturn: '0.00',
            item: {
                outcome: 'lost',
                games: [
                    {
                        homeTeam: 'Team K',
                        awayTeam: 'Team L',
                        homeTeamScore: 1,
                        awayTeamScore: 3,
                        picks: ['Team K to win', 'Over 2.5 goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-04',
                        outcome: 'won',
                        result: 'away',
                        betTime: '10:00',
                    },
                    {
                        homeTeam: 'Team M',
                        awayTeam: 'Team N',
                        homeTeamScore: 2,
                        awayTeamScore: 2,
                        picks: ['Draw', 'Both teams to score'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-04',
                        outcome: 'lose',
                        result: 'away',
                        betTime: '12:30',
                    },
                    {
                        homeTeam: 'Team O',
                        awayTeam: 'Team P',
                        homeTeamScore: 0,
                        awayTeamScore: 1,
                        picks: ['Team O to win', 'Under 1.5 goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-05',
                        outcome: 'won',
                        result: 'away',
                        betTime: '08:00',
                    },
                ],
            },
        },
        {
            id: 3,
            type: 'settled',
            date: '2024-08-10',
            method: 'single',
            result: 'ongoing',
            time: '18:45',
            totalStake: 200,
            totalReturn: '0.00',
            item: {
                outcome: 'ongoing',
                games: [
                    {
                        homeTeam: 'Team Q',
                        awayTeam: 'Team R',
                        homeTeamScore: 0,
                        awayTeamScore: 0,
                        picks: ['Draw', 'No goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-09',
                        outcome: 'won',
                        result: 'away',
                        betTime: '15:00',
                    },
                    {
                        homeTeam: 'Team S',
                        awayTeam: 'Team T',
                        homeTeamScore: 1,
                        awayTeamScore: 2,
                        picks: ['Team S to win', 'Over 2.5 goals'],
                        market: 'Match Result',
                        betDate: '2024-08-09',
                        result: 'away',
                        betTime: '17:00',
                        outcome: 'lose',

                    },
                    {
                        homeTeam: 'Team U',
                        awayTeam: 'Team V',
                        homeTeamScore: 2,
                        awayTeamScore: 1,
                        picks: ['Team U to win', 'Both teams to score'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-10',
                        outcome: 'won',
                        result: 'away',
                        betTime: '19:00',
                    },
                    {
                        homeTeam: 'Team W',
                        awayTeam: 'Team X',
                        homeTeamScore: 3,
                        awayTeamScore: 0,
                        picks: ['Team W to win', 'Over 3.5 goals'],
                        market: 'ist Half Handicap',
                        betDate: '2024-08-10',
                        outcome: 'lose',
                        result: 'away',
                        betTime: '20:45',
                    },
                ],
            },
        },
        // Add more data as needed
    ];

    useEffect(() => {
        const foundItem = jsonData.find(data => data.id === numID);
        setSlipResult(foundItem ? foundItem.item : null)

    }, [])



    const BetDetailList = () => {
        return (
            <div className={visible ? 'pbd_visible' : 'pbd_hidden'}>
                <div className='pbd-layout-mask'>

                </div>

                <div className='pbd-betdetails'>
                    <div className='pbd-betdetail'>
                        <h2>Bet details</h2>
                        {/* replace num with the total number of bet */}
                        <p style={{ marginTop: '1.8em', fontSize: '12px' }}>Number of bets: (num) </p>


                        <div className='pbd-db-head'>
                            <h1>Bet ID: {id} </h1>

                            <span className='pbd-db-hdetails'>
                                <span>
                                    <h3>Multiple</h3>
                                    <p>Lost</p>
                                </span>

                                <span>
                                    <h3>Total return</h3>

                                    <p>0.00</p>
                                </span>
                            </span>

                            <hr style={{ color: 'var(--secondary-white)', margin: '8px 0' }}></hr>

                            <div className='pbd-db-tot'>
                                <span>Total Stake: $350</span>

                                <span>Total Odds: 137.00 </span>
                            </div>


                            <div className='bet-list-wraps'>
                                <div className='bet-list-wrap'>
                                    <div className="selection-bar">
                                        <svg style={{ margin: '0 4px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" height={18} width={18}>
                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="selection-label" >Selection Details</span>
                                    </div>


                                    <div>
                                        {slipResult?.games?.map((data => (
                                            <div key={data.id}>
                                                <div className='plw-selection'>
                                                    <div className='plw-selection-top'>
                                                        <span className='plw-stl'>
                                                            <p>1</p>

                                                            <p className='' style={{ color: 'var(--secondary-white)', fontSize: '12px', marginLeft: '7px', display: 'flex', alignItems: 'center' }}>
                                                                {data.betDate} {data.betTime}
                                                            </p>
                                                        </span>

                                                        <span className='plw-str'>
                                                            {data.outcome}
                                                            {data.outcome === 'won' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ color: 'white', background: 'green', padding: '5px', borderRadius: '50px' }} fill="currentColor" className="size-6" height={16} width={16} >
                                                                <path fillRule="evenodd" strokeWidth={2} d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                                            </svg>
                                                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" height={16} width={16} style={{ color: 'white', background: 'red', padding: '5px', borderRadius: '50px' }}  >
                                                                    <path fillRule="evenodd" strokeWidth={2} d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                                                </svg>
                                                            }
                                                        </span>
                                                    </div>


                                                    <div className='plw-selection-middle'>
                                                        <div className='plw-selection-mid'>
                                                            <div className='plw-sm-grid'>
                                                                <div className='plw-smg-left'>
                                                                    <p>{data.homeTeam}</p>
                                                                    <p>{data.awayTeam}</p>
                                                                </div>
                                                                <div className='plw-smg-mid'>
                                                                    <p>{data.homeTeamScore}</p>
                                                                    <p>{data.awayTeamScore}</p>
                                                                </div>
                                                                <div className='plw-smg-right' >
                                                                    <div className='plw-smgr-cont'>
                                                                        <p>Pick</p>
                                                                        <span>{data.picks.map((pick, pickIndex) => (
                                                                            <p key={pickIndex}>{pick}</p>
                                                                        ))}</span>
                                                                        <p>Market</p>
                                                                        <p>{data.market}</p>
                                                                        <p>Result</p>
                                                                        <p>{data.result}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className='plw-selection-bottom'>
                                                        <hr style={{ amrgin: '5px 0', color: 'var(--secondary-white' }}></hr>
                                                    </div>
                                                </div>
                                            </div>
                                        )))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='pbd-cancel' onClick={() => setVisible(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            style={{ color: 'var(--bright-orange)' }} className="size-6" >
                            <path fill='var(--bright-orange)' fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>

                    </div>

                </div>
            </div>
        )
    }
    const handleBetSlipVisibility = (e) => {
        e.preventDefault();

        setVisible(!visible ? true : false);
        console.log(visible)
    }
    return (
        <ProfileLayout>
            <div className='profile_mybets'>
                <div className='bets_details'>
                    <div className='bets_detail'>
                        <div className='bets_d_back'><span onClick={() => router.back()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                            Back</span></div>

                        <div className='bets_d_id'>
                            <h2>Ticket Details (ID: {id} )</h2>
                        </div>

                        <div className='bets_d_list'>
                            <ul>
                                <li>Total Stake: </li>
                                <li>Total Return: </li>
                                <li>Pot Win: </li>
                            </ul>
                        </div>

                        <div className='bets_d_button'>
                            <button onClick={handleBetSlipVisibility}>Check Bet Details</button>
                        </div>
                    </div>
                </div>


                <BetDetailList />
            </div>
        </ProfileLayout>
    );
};

export default BetDetail;