
'use client';

import Image from 'next/image';
import './css/rightSideBar.css';
import Link from 'next/link';
import { useState } from 'react';
import ProgressBar from './ProgressBar';


const RightSideBar = () => {
  const [isLoggedIn] = useState(true);
  const [progress] = useState(20);
  const [isOn, setIsOn] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };
  const toggleSettingsOptions = () => {
    setIsSettingsOpen((prev) => !prev);
  };



  return (
    <div className='rsb-bodys'>
      <div className='rsb-body'>
        <div>
          {
            isLoggedIn ? <>
              <div className='rsb-balances'>
                <div className='rsb-balance'>
                  <span className='rsb-balance-text'>
                    <Image
                      src={'/assets/walletIcon.png'}
                      alt=""
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
                          alt=""
                          width={13}
                          height={18}
                        />
                        <p>Bet Slip</p>
                      </span>
                      <span>
                        <Image
                          src={'/assets/bets.png'}
                          alt=""
                          width={18}
                          height={16}
                        />
                        <p>My Bets</p>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='rsb-singlebets'>
                  <div className='rsb-singlebet'>
                    <div className='rsb-sb-head'>
                      <h2>Single Bets</h2>

                      <div style={{ display: 'flex' }}>
                        <div className='rsbsbhlline'>
                          <span className='uittlyoi'></span>
                          <span className='dfulij5k'></span>
                        </div>
                      </div>

                      <div className='rsb-bet-games'>
                        <div className='rsb-bet-game'>
                          <div className='rsb-bet-team'>
                            <span>Scotland</span> vs <span>Ukraine</span>
                          </div>

                          <div className='rsb-betteams'>
                            <div className='rsb-betteam'>
                              <div className='rsbt-teamnames'>
                                <div className='rsbt-teamname'>
                                  <Image
                                    src={'/assets/football2Icon.png'}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  <div className='rsbt-winner'>
                                    Scotland <br />
                                    <p>Match Winner</p>
                                  </div>
                                </div>
                              </div>

                              <div className='rsbt-team-odds'>
                                <div className='rsbt-team-odd'>
                                  <Image
                                    src={'/assets/uptodwon.png'}
                                    alt=""
                                    width={12}
                                    height={12}
                                  />
                                  <p>3.20</p>
                                </div>
                              </div>
                            </div>

                          </div>

                          <hr />

                          <div className='rsb-betteams'>
                            <div className='rsb-betteam'>
                              <div className='rsbt-teamnames'>
                                <div className='rsbt-teamname'>
                                  <Image
                                    src={'/assets/football2Icon.png'}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  <div className='rsbt-winner'>
                                    Draw <br />
                                    <p>Match Winner</p>
                                  </div>
                                </div>
                              </div>

                              <div className='rsbt-team-odds'>
                                <div className='rsbt-team-odd'>
                                  <Image
                                    src={'/assets/uptodwon.png'}
                                    alt=""
                                    width={12}
                                    height={12}
                                  />
                                  <p>4.60</p>
                                </div>
                              </div>
                            </div>

                          </div>

                          <hr />

                          <p className='rsb-bet-offer-des'>Add 2 more outcome(s) with odds greater
                            than 1.4 to get x1.08</p>

                          <div className='rsb-betteams'>
                            <div className='rsb-betteam'>
                              <div className='rsbt-teamnames'>
                                <ProgressBar progress={progress} />

                              </div>

                              <div className='rsbt-team-odds'>
                                <div className='rsbt-team-odd'>
                                  <Image
                                    src={'/assets/uptodwon.png'}
                                    alt=""
                                    width={12}
                                    height={12}
                                  />
                                  <p>1.00</p>
                                </div>
                              </div>
                            </div>

                          </div>

                          <div className='rsb-betteams' >
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
                                    alt=""
                                    width={12}
                                    height={12}
                                  />
                                  <p>12.99</p>
                                </div>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='rsb-accept'>

                  <p>Accept all odds changes</p>
                  <div className="rsba-toggle-switch" onClick={handleToggle}>
                    <div className={`rsba-switch ${isOn ? 'on' : 'off'}`}>
                      <div className="rsba-circle" />
                    </div>
                  </div>
                </div>

                <div className='rsb-bet-amount'>
                  <span className='rsb-bet-button'>
                    <p style={{ fontSize: '13px' }}>Bet Amount</p>
                    <p style={{ fontSize: '14px' }}>Max</p>
                  </span>

                  <div className='rsb-pos-win'>
                    <p>Possible win</p>
                    <p>$300</p>
                  </div>
                </div>


                <div className='rsb-submit'>
                  <button>Place Bet $300</button>
                </div>
              </div>
            </> : <>
              <div>
                <p>Kindly login to view this section.</p>
                <Link href={'/login'} >Login</Link>
              </div>
            </>
          }
        </div>


        <div className='rsba-setting'>
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
        </div>


        <div className='rsb-popular-bets'>
          <div className='rsb-popular-bet'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;