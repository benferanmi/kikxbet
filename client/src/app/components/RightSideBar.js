
'use client';

import Image from 'next/image';
import './css/rightSideBar.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { useOddsStore, useCheckoutStore } from '@/utils/oddsstore';
import Cookies from 'js-cookie';

const RightSideBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState(20); // Dynamic state for progress
  const [isOn, setIsOn] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [selectedTeam, setSelectedTeam] = useState(null); // State to select home or away team
  const { selectedOdds } = useOddsStore();
  const { oddsForBet, addOddsForBet, clearOddsForBet } = useCheckoutStore();
  const [betPlacedMessage, setBetPlacedMessage] = useState(''); // State to hold bet placed message

  useEffect(() => {
    const token = Cookies.get('authToken');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    if (selectedOdds?.id) {
      addOddsForBet({ 
        id: selectedOdds.id, 
        game_id: selectedOdds.game_id, 
        start_date: selectedOdds.start_date, 
        home_team_display: selectedOdds.home_team_display, 
        away_team_display: selectedOdds.away_team_display, 
        status: selectedOdds.status, 
        sport_id: selectedOdds.sport.id, 
        oddsData: selectedOdds.odds 
      });
    }
  }, [selectedOdds]);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const toggleSettingsOptions = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  const renderBetDetails = () => {
    if (!selectedOdds?.id) {
      return null;
    }
    console.log(selectedTeam);

    return (
      <div className='rsb-bet-games'>
        <div className='rsb-bet-game'>
          <div className='rsb-bet-team'>
            <span>{selectedOdds.home_team_display}</span> vs <span>{selectedOdds.away_team_display}</span>
          </div>

          <div className='rsb-betteams mb-4'>
          <div className={`rsb-betteam flex flex-row items-center justify-between ${selectedTeam === 'away' ? 'selected bg-blue-200 border-2 border-blue-600 shadow-lg rounded-lg py-10 px-2' : ''} transition duration-300 ease-in-out hover:bg-blue-100 hover:py-10 hover:px-2 hover:rounded-lg`} onClick={() => setSelectedTeam('away')}>
          <div className=''>
                <div className='rsbt-teamname'>
                  <Image
                    src={selectedOdds.away_competitors[0].logo} // Assuming logo is available in home_team_display
                    alt={selectedOdds.away_competitors[0].name}
                    width={24}
                    height={24}
                  />
                  <div className='rsbt-winner'>
                    {selectedOdds.away_competitors[0].name} <br />
                    <p>Match Winner</p>
                  </div>
                </div>
              </div>

              <div className=''>
                <div className='rsbt-team-odd'>
                  <Image
                    src={'/assets/uptodwon.png'}
                    alt="Odds Icon"
                    width={12}
                    height={12}
                  />
                  <p>{selectedOdds.odd.awayTeam.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='rsb-betteams mb-4'>
          <div className={`rsb-betteam flex flex-row items-center justify-between ${selectedTeam === 'home' ? 'selected bg-blue-200 border-2 border-blue-600 shadow-lg rounded-lg py-10 px-2' : ''} transition duration-300 ease-in-out hover:bg-blue-100 hover:py-10 hover:px-2 hover:rounded-lg`} onClick={() => setSelectedTeam('home')}>
          <div className=''>
                <div className='rsbt-teamname'>
                  <Image
                    src={selectedOdds.home_competitors[0].logo} // Assuming logo is available in home_team_display
                    alt={selectedOdds.home_competitors[0].name}
                    width={24}
                    height={24}
                  />
                  <div className='rsbt-winner'>
                    {selectedOdds.home_competitors[0].name} <br />
                    <p>Match Winner</p>
                  </div>
                </div>
              </div>

              <div className=''>
                <div className='rsbt-team-odd'>
                  <Image
                    src={'/assets/uptodwon.png'}
                    alt="Odds Icon"
                    width={12}
                    height={12}
                  />
                  <p>{selectedOdds.odd.homeTeam.price}</p>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <p className='rsb-bet-offer-des'>Add 2 more outcome(s) with odds greater than 1.4 to get x1.08</p>

          <div className='rsb-betteams'>
            <div className='rsb-betteam'>
              <div className='rsbt-teamnames'>
                <ProgressBar progress={selectedOdds.odd?.[selectedTeam === 'home' ? 'homeTeam' : 'awayTeam'].price * 100/10 ?? 0} />
              </div>

              <div className='rsbt-team-odds'>
                <div className='rsbt-team-odd'>
                  <Image
                    src={'/assets/uptodwon.png'}
                    alt="Odds Icon"
                    width={12}
                    height={12}
                  />
                  <p>{(selectedOdds.odd?.[selectedTeam === 'home' ? 'homeTeam' : 'awayTeam'].price).toFixed(2)}</p> {/* Dynamic odds based on progress */}
                </div>
              </div>
            </div>
          </div>

          <div className='rsb-betteams'>
            <div className='rsb-betteam' style={{ height: '30px' }}>
              <div className='rsbt-teamnames'>
                <div className='rsbt-total-odds'>
                  <h3>Total Odds</h3>
                </div>
              </div>

              <div className='rsbt-team-odds'>
                <div className='rsbt-team-odd'>
                  <Image
                    src={'/assets/uptodwon.png'}
                    alt="Odds Icon"
                    width={12}
                    height={12}
                  />
                  <p>{(progress * 0.1).toFixed(2)}</p> {/* Dynamic total odds based on progress */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Betting Quantity and Possible Win */}
        {selectedTeam && (
          <div className='rsb-bet-amount px-2'>
            <span className='rsb-bet-button'>
              <p style={{ fontSize: '13px' }}>Bet Amount</p>
              <p style={{ fontSize: '14px' }}>Max</p>
            </span>

            <div className='rsb-pos-win'>
              <p>Possible win</p>
              {betAmount && selectedOdds && <p>${(betAmount * (selectedTeam === 'home' ? selectedOdds.odd.homeTeam.price : selectedOdds.odd?.awayTeam.price)).toFixed(2)}</p>}
            </div>
          </div>
        )}
      </div>
    );
  };

  const handlePlaceBet = async () => {

    try {
      const response = await fetch(`http://localhost:6020/dev/kikxbet/api/v1/dashboard/place-bet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({oddsData: JSON.stringify(selectedOdds), user_id: JSON.parse(Cookies.get('userData')).id, betAmount: betAmount, selectedTeam: selectedTeam, in_ratio:selectedOdds.odd?.[selectedTeam === 'home' ? 'homeTeam' : 'awayTeam'].price}),
      });
      const data = await response.json();
      if(data.status === 200){
        setBetPlacedMessage('Bet placed successfully!');
        clearOddsForBet();
        setTimeout(() => {
          setBetPlacedMessage('');
          setSelectedTeam(null);
          setBetAmount(10);
        }, 3000);
      }
      console.log('Bet placed successfully:', data);
    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };

  return (
    <div className='rsb-bodys'>
      <div className='rsb-body'>
        <div>
          {isLoggedIn ? (
            <>
              <div className='rsb-balances'>
                <div className='rsb-balance'>
                  <span className='rsb-balance-text'>
                    <Image
                      src={'/assets/walletIcon.png'}
                      alt="Wallet Icon"
                      width={16}
                      height={17}
                    />
                    <p>Balance</p>
                  </span>
                  <span className='rsb-balance-price'>$300</span>
                </div>

                <div className='rsb-slips'>
                  <div className='rsb-slip'>
                    <div className='rsb-slip-content'>
                      <span>
                        <Image
                          src={'/assets/betSlip.png'}
                          alt="Bet Slip Icon"
                          width={13}
                          height={18}
                        />
                        <p>Bet Slip</p>
                      </span>
                      <span>
                        <Image
                          src={'/assets/bets.png'}
                          alt="My Bets Icon"
                          width={18}
                          height={16}
                        />
                        <p>My Bets</p>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='rsb-singlebets'>
                  <div className='rsb-singlebet rounded-lg'>
                    <div className='rsb-sb-head py-6'>
                      <h2>Single Bets</h2>
                      <div className='rsb-divider'></div>
                      {renderBetDetails()}
                    </div>
                  </div>
                </div>
                {!selectedOdds?.id && <div className="flex flex-col items-center justify-center px-4 py-10 my-8 border-2 border-dashed rounded-lg">
                  <p className="mt-2 text-lg font-semibold text-gray-700">No Odds Selected</p>
                </div>}
                {selectedTeam &&<div className='rsb-accept'>
                  <p>Accept all odds changes</p>
                  <div className="rsba-toggle-switch" onClick={handleToggle}>
                    <div className={`rsba-switch ${isOn ? 'on' : 'off'}`}>
                      <div className="rsba-circle" />
                    </div>
                  </div>
                </div>}

                {selectedTeam && selectedOdds && <div className='rsb-bet-amount-options mt-4'>
                  <p className='text-lg font-semibold mb-2'>Select Bet Amount:</p>
                  <div className='rsb-bet-buttons grid grid-cols-2 gap-4'>
                    {[10, 20, 50, 100].map((amount) => (
                      <button 
                        key={amount} 
                        className='rsb-bet-button-option bg-blue-500 text-white font-bold py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200'
                        onClick={() => setBetAmount(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>}

                {selectedTeam && <div className='rsb-submit'>
                  <button className='rsb-bet-button' onClick={handlePlaceBet}>Place Bet ${betAmount}</button>
                </div>}
                {betPlacedMessage && <p className="mt-4 text-green-500 font-semibold text-center">{betPlacedMessage}</p>} {/* Display bet placed message */}
              </div>
            </>
          ) : (
            <div>
              <p>Kindly login to view this section.</p>
              <Link href={'/auth/login'}>Login</Link>
            </div>
          )}
        </div>

        {selectedTeam && <div className='rsba-setting'>
          <div className="rsba-settings">
            <div className="rsba-settings-header" onClick={toggleSettingsOptions}>
              <h2>Settings</h2>
              <span className={`rsba-dropdown-arrow ${isSettingsOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isSettingsOpen && (
              <div className="rsba-settings-options">
                <div className="rsba-option">Option 1</div>
                <div className="rsba-option">Option 2</div>
                <div className="rsba-option">Option 3</div>
              </div>
            )}
          </div>
        </div>}

        <div className='rsb-popular-bets'>
          <div className='rsb-popular-bet'>
            {/* Popular bets content can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;