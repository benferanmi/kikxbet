'use client';
import { useState, useEffect } from 'react';
import ProfileLayout from '../ProfileLayout';
import './mybets.css';
import Link from 'next/link';
import Cookies from 'js-cookie'; // Make sure to import Cookies

const MyBets = () => {

    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [toggle, setToggle] = useState('all');
    const [jsonData, setJsonData] = useState([]); // State to hold fetched data
    const [oddData, setOddData] = useState([]); // State to hold odd data

    useEffect(() => {
        const fetchBets = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/dashboard/get-user-bets?userId=${JSON.parse(Cookies.get('userData')).id}`);
            const result = await response.json();
            if (result.status === 200) {
                setJsonData(result.data.bets); // Set jsonData to the bets array from the response
                setOddData(result.data.oddData); // Set oddData to the odd data from the response
            } else {
                console.error('Error fetching bets:', result.message);
            }
        };

        fetchBets();
    }, []);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setDateRange((prev) => ({ ...prev, [name]: value }));
    };

    const filteredData = jsonData.filter(item => {
        const date = new Date(item.createdAt); // Use createdAt for date filtering
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return (
            (!dateRange.start || date >= startDate) &&
            (!dateRange.end || date <= endDate) &&
            (toggle === 'all' || item.type === toggle)
        );
    });

    const totalStake = filteredData.reduce((totalStake, item) => totalStake + item.base_amount, 0); // Use base_amount for total stake

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
                            {filteredData.map(item => {
                                const oddInfo = oddData.find(odd => odd.id === item.activeOddId) || {};
                                return (
                                    <div key={item.id} className="pmybets-bet-item">
                                        <div className='pmyb-item'>
                                            <div className='pmyb-date'>Date: {new Date(item.createdAt).toLocaleDateString()} Time: {new Date(item.createdAt).toLocaleTimeString()}</div>
                                            <div className='pmyb-results'>
                                                <div className='pmyb-result'>
                                                    <span>{item.bet_on}</span>
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
                                                            <p>{item.base_amount}</p> {/* Use base_amount for total stake */}
                                                        </span>

                                                        <span className='pmyb-stake-item'>
                                                            <p style={{ fontSize: '12px', color: '' }}>Quantity</p>
                                                            <p>{item.quantity}</p> {/* Display quantity */}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {oddInfo.odds_data && (
                                                <div className='pmyb-odd-details'>
                                                    <p>Match: {oddInfo.home_team_display} vs {oddInfo.away_team_display}</p>
                                                    <p>League: {oddInfo.league_id}</p>
                                                    <p>Status: {oddInfo.status}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
};

export default MyBets;