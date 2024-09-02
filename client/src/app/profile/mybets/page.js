
'use client';
import { useState } from 'react';
import ProfileLayout from '../ProfileLayout';
import './mybets.css';
import Link from 'next/link';

const page = () => {

    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [toggle, setToggle] = useState('all');

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
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team C',
                        awayTeam: 'Team D',
                        homeTeamScore: 3,
                        awayTeamScore: 0,
                        picks: ['Team C to win', 'Both teams to score'],
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team E',
                        awayTeam: 'Team F',
                        homeTeamScore: 1,
                        awayTeamScore: 1,
                        picks: ['Draw', 'Under 3.5 goals'],
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team G',
                        awayTeam: 'Team H',
                        homeTeamScore: 4,
                        awayTeamScore: 2,
                        picks: ['Team G to win', 'Over 3.5 goals'],
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team I',
                        awayTeam: 'Team J',
                        homeTeamScore: 0,
                        awayTeamScore: 0,
                        picks: ['Draw', 'No goals'],
                        market: 'Match Result',
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
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team M',
                        awayTeam: 'Team N',
                        homeTeamScore: 2,
                        awayTeamScore: 2,
                        picks: ['Draw', 'Both teams to score'],
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team O',
                        awayTeam: 'Team P',
                        homeTeamScore: 0,
                        awayTeamScore: 1,
                        picks: ['Team O to win', 'Under 1.5 goals'],
                        market: 'Match Result',
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
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team S',
                        awayTeam: 'Team T',
                        homeTeamScore: 1,
                        awayTeamScore: 2,
                        picks: ['Team S to win', 'Over 2.5 goals'],
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team U',
                        awayTeam: 'Team V',
                        homeTeamScore: 2,
                        awayTeamScore: 1,
                        picks: ['Team U to win', 'Both teams to score'],
                        market: 'Match Result',
                    },
                    {
                        homeTeam: 'Team W',
                        awayTeam: 'Team X',
                        homeTeamScore: 3,
                        awayTeamScore: 0,
                        picks: ['Team W to win', 'Over 3.5 goals'],
                        market: 'Match Result',
                    },
                ],
            },
        },
        // Add more data as needed
    ];


    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setDateRange((prev) => ({ ...prev, [name]: value }));
    };

    const filteredData = jsonData.filter(item => {
        const date = new Date(`${item.date}T${item.time}`);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return (
            (!dateRange.start || date >= startDate) &&
            (!dateRange.end || date <= endDate) &&
            (toggle === 'all' || item.type === toggle)
        );
    });

    const totalStake = filteredData.reduce((totalStake, item) => totalStake + item.totalStake, 0);



    return (
        <ProfileLayout>
            <div className='profile_mybets'>
                <div>
                    <div className="pmybets-bet-history">
                        <h1>Bet History</h1>
                        <div className="pmybets-filters">

                            <div className="pmybets-toggle">
                                <button className={toggle === 'all' ? 'pmyactive' : ''} onClick={() => setToggle('all')}>All</button>
                                <button className={toggle === 'settled' ? 'pmyactive' : ''} onClick={() => setToggle('settled')}>Settled</button>
                                <button className={toggle === 'unsettled' ? 'pmyactive' : ''} onClick={() => setToggle('unsettled')}>Unsettled</button>
                            </div>

                            <form className='pmybets-date'>
                                <label>
                                    Start Date:
                                    <input type="date" name="start" onChange={handleDateChange} />
                                </label>
                                <label>
                                    End Date:
                                    <input type="date" name="end" onChange={handleDateChange} />
                                </label>
                            </form>
                        </div>
                        <div className="pmybets-total-stake">Total Amount Staked: ${totalStake}</div>
                        <div className="pmybets-bet-list">
                            {filteredData.map(item => (
                                <div key={item.id} className="pmybets-bet-item">

                                    <div className='pmyb-item'>
                                        <div className='pmyb-date'>Date: {item.date} Time: {item.time}</div>
                                        <div className='pmyb-results'>
                                            <div className='pmyb-result'>
                                                <span>{item.method}</span>
                                                <span> <Link href={`/profile/mybets/details/${item.id}`}> {item.result} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height={18} width={18}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                </Link>
                                                </span>
                                            </div>
                                        </div>


                                        <div className='pmyb-stakes'>
                                            <div className='pmyb-stake'>
                                                <div>
                                                    <span className='pmyb-stake-item'>
                                                        <p style={{ fontSize: '12px', color: '' }}>Total Stake</p>
                                                        <p>{item.totalStake}</p>
                                                    </span>

                                                    <span className='pmyb-stake-item'>
                                                        <p style={{ fontSize: '12px', color: '' }}>Total Return</p>
                                                        <p>{item.totalReturn}</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
};

export default page;