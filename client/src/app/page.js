
import Link from 'next/link';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import StepToPlay from './components/StepsToPlay';
import Testimonial from './components/testimonial';
import './css/home.css';
import PageLayout from './pageLayout';
import Image from 'next/image';
import OddOutcome from './components/odd/OddOutcome';
import { AmericanFootballSvg, ArenaOfValorSvg, BaseballSvg, BasketballSvg, BoxingSvg, CricketSvg, CsgoSvg, DotaSvg, EHockey, EtennisSvg, FootballSvg, FrustalSvg, HandBallSvg, IceHockeySvg, MmaSvg, OwSvg, RainbowSvg, RocketLeagueSvg, RugbySvg, Sc2Svg, StarSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from './components/Svgs';
import SportType from './components/SportType';
import HomeCountDown from '@/app/components/HomeCountDown';

// src/app/promotion/page.js
export default function Home() {
  const sportListArray = [
    { id: 1, imgSrc: <FootballSvg color="var(--green)" height={40} width={40} />, text: 'eFootball', url: '/game/efootball' },
    { id: 2, imgSrc: <CsgoSvg color="var(--green)" height={40} width={40} />, text: 'CS:GO', url: '/game/cs-go' },
    { id: 3, imgSrc: <BasketballSvg color="var(--green)" height={40} width={40} />, text: 'BasketBall', url: '/game/basketball' },
    { id: 4, imgSrc: <BasketballSvg color="var(--green)" height={40} width={40} />, text: 'eBasketball', url: '/game/ebasketball' },
    { id: 5, imgSrc: <TennisSvg color="var(--green)" height={40} width={40} />, text: 'Tennis', url: '/game/tennis' },
    { id: 6, imgSrc: <EtennisSvg color="var(--green)" height={40} width={40} />, text: 'eTennis', url: '/game/etennis' },
    { id: 7, imgSrc: <DotaSvg color="var(--green)" height={40} width={40} />, text: 'Dota 2', url: '/game/dota' },
    { id: 8, imgSrc: <StarSvg color="var(--green)" height={40} width={40} />, text: 'LOL', url: '/game/lol' },
    { id: 9, imgSrc: <IceHockeySvg color="var(--green)" height={40} width={40} />, text: 'Ice hockey', url: '/game/ice-hockey' },
    { id: 10, imgSrc: <EHockey color="var(--green)" height={40} width={40} />, text: 'eHockey', url: '/game/ehockey' },

    { id: 11, imgSrc: <TableTennisSvg color="var(--green)" height={40} width={40} />, text: 'Table Tennis', url: '/game/table-tennis' },
    { id: 12, imgSrc: <VolleyBallSvg color="var(--green)" height={40} width={40} />, text: 'Volleyball', url: '/game/volleyball' },
    { id: 13, imgSrc: <BaseballSvg color="var(--green)" height={40} width={40} />, text: 'Baseball', url: '/game/baseball' },
    { id: 14, imgSrc: <RugbySvg color="var(--green)" height={40} width={40} />, text: 'Rugby', url: '/game/rugby' },
    { id: 15, imgSrc: <MmaSvg color="var(--green)" height={40} width={40} />, text: 'MMA', url: '/game/mma' },
    { id: 16, imgSrc: <AmericanFootballSvg color="var(--green)" height={40} width={40} />, text: 'American Football', url: '/game/americanfootball' },
    { id: 17, imgSrc: <HandBallSvg color="var(--green)" height={40} width={40} />, text: 'Handball', url: '/game/handball' },
    { id: 18, imgSrc: <RocketLeagueSvg color="var(--green)" height={40} width={40} />, text: 'Rocket League', url: '/game/rocketleague' },
    { id: 19, imgSrc: <BoxingSvg color="var(--green)" height={40} width={40} />, text: 'Boxing', url: '/game/boxing' },
    { id: 20, imgSrc: <RainbowSvg color="var(--green)" height={40} width={40} />, text: 'Rainbow 6', url: '/game/rainbow' },
    { id: 21, imgSrc: <FrustalSvg color="var(--green)" height={40} width={40} />, text: 'Futsal', url: '/game/futsal' },
    { id: 40, imgSrc: <CricketSvg color="var(--green)" height={40} width={40} />, text: 'Cricket', url: '/game/cricket' },
    { id: 23, imgSrc: <Sc2Svg color="var(--green)" height={40} width={40} />, text: 'SC 2', url: '/game/sc' },
    { id: 24, imgSrc: <OwSvg color="var(--green)" height={40} width={40} />, text: 'OW', url: '/game/ow' },
    { id: 25, imgSrc: <ArenaOfValorSvg color="var(--green)" height={40} width={40} />, text: 'Arena Of Valor', url: '/game/arenaofvalor' },
  ];

  const leagueTypeOfJson = [
    {},
    {},
    {},
  ];

  const topPlayersHeaders = ['GAME', 'USERNAME', 'TIME', 'WAGER', 'MULTIPLIER', 'PAYOUT'];

  const topPlayersRows = [
    [{ img: '/assets/robert.png', text: 'Roobet First Person …', height: '23px' }, '', '7:06 AM', { img: '/assets/usdt.png', text: '$230.00', height: '12px' }, '0.00x', '$0.00'],
    [{ img: '/assets/retro.png', text: 'Retro Sweets', height: '23px' }, '', '7:06 AM', { img: '/assets/eth.png', text: '$200.00', height: '12px' }, '', ''],
    [{ img: '/assets/mines.png', text: 'MInes', height: '23px' }, '', '7:06 AM', { img: '/assets/eth.png', text: '$36.00', height: '12px' }, '0.00x', '$'],
    [{ img: '/assets/rooolette.png', text: 'Rooolette', height: '23px' }, '', '7:06 AM', { img: '/assets/ltc.png', text: '$290.00', height: '12px' }, '0.00x', '$0.00'],
    [{ img: '/assets/blackjack.png', text: 'Blackjack VIP Platin…', height: '23px' }, 'Aghori6198', '7:06 AM', { img: '/ltc/coin.png', text: '$60.00', height: '12px' }, '', '$0.00'],
    [{ img: '/assets/towers.png', text: ' Towers', height: '23px' }, '', '7:06 AM', { img: '/assets/clipa.png', text: '$0.29.00', height: '12px' }, '', ''],
    [{ img: '/assets/riseof.png', text: 'Rise of Merlin …', height: '23px' }, 'Himsuan3324', '7:06 AM', { img: '/assets/clipa.png', text: '$230.00', height: '12px' }, '0.00x', '$0.00'],
    [{ img: '/assets/plinko.png', text: 'Plinko', height: '23px' }, 'Joshua45', '7:06 AM', { img: '/assets/btc.png', text: '$230.00', height: '12px' }, '0.00x', '$0.00'],
  ];

  const LiveGame = () => {
    return (
      <div className="home-all-gmeachs">
        <div className="home-all-gmeach">
          <div className="home-all-gmeleague">
            <Image
              src="/assets/football.png"
              alt="des"
              width={20}
              height={20}
            />
            <p>League Nations UEFA</p>
          </div>

          <div className="hagmel-matchs">
            <div className="hagmel-match">
              <div className="hagmel-m-each">
                <Image
                  className="hagmellImg"
                  src="/assets/spinner.png"
                  alt="des"
                  width={120}
                  height={120}
                />

                <div className="hagmel-m-content">
                  <span>
                    <Image
                      src="/assets/croatia.png"
                      alt="des"
                      width={38}
                      height={38}
                    />
                    <p className="hagmel-per">30%</p>

                    <p className="hagmel-cont">croatia</p>
                  </span>
                </div>
              </div>

              <div className="hagmel-m-each">
                <Image
                  className="hagmellImg2"
                  src="/assets/spinnerBg.png"
                  alt="des"
                  width={65}
                  height={65}
                />

                <div className="hagmel-m-content2">
                  <span>
                    <p className="hagmel-per">VS</p>
                  </span>
                </div>
              </div>

              <div className="hagmel-m-each">
                <Image
                  className="hagmellImg"
                  src="/assets/spinnerBlack.png"
                  alt="des"
                  width={120}
                  height={120}
                />

                <div className="hagmel-m-content">
                  <span>
                    <Image
                      src="/assets/denmark.png"
                      alt="des"
                      width={38}
                      height={38}
                    />
                    <p className="hagmel-per">30%</p>

                    <p className="hagmel-cont">Denmark</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <OddOutcome gap={18} draw={3.99} home={2.21} away={4.50} />
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />

      <PageLayout >
        <section>

          <div>
            <div>
              <div>
                <div>
                  <div className="home-reminders">
                    <div className="home-reminder">
                      <div className="home-reminder-content">
                        <span className="home-reminder-text">
                          <h2 className="horetextone">NEXT MATCH</h2>
                          <h2 className="horetexttwo">vs Bluebirds FC</h2>
                        </span>
                        <HomeCountDown />
                        {/* <div className="home-reminder-countdowns">
                          <div className="home-reminder-countdown">
                            <div className="home-r-count-each">
                              <span>
                                05
                              </span>
                              <p>Days</p>
                            </div>

                            <div className="home-r-count-each">
                              <span>
                                12
                              </span>
                              <p>Hrs</p>
                            </div>

                            <div className="home-r-count-each">
                              <span>
                                42
                              </span>
                              <p>Min</p>
                            </div>

                            <div className="home-r-count-each">
                              <span>
                                10
                              </span>
                              <p>Secs</p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="home-hero-games">
                    <div className="home-hero-game">
                      <div className="home-hero-gcontents">
                        <div className="home-hero-gcontent">
                          <div className="home-hero-gceachs">
                            <div className="home-hero-gceach">
                              <span className="home-hero-gsedate">July 18, 2024</span>
                              <div className="home-hero-gseteam">
                                <Image
                                  src="/assets/teamone.png"
                                  alt="des"
                                  width={44}
                                  height={44}
                                />
                                <span className="hhgseteam-score">
                                  1 - 1
                                </span>
                                <Image
                                  src="/assets/teamtwo.png"
                                  alt="des"
                                  width={44}
                                  height={44}
                                />
                              </div>
                              <span className="home-hero-gsedate">Premier Leauge</span>
                            </div>
                          </div>

                          <div className="home-hero-gceachs">
                            <div className="home-hero-gceach">
                              <span className="home-hero-gsedate">July 18, 2024</span>
                              <div className="home-hero-gseteam">
                                <Image
                                  src="/assets/teamone.png"
                                  alt="des"
                                  width={44}
                                  height={44}
                                />
                                <span className="hhgseteam-score">
                                  1 - 1
                                </span>
                                <Image
                                  src="/assets/teamtwo.png"
                                  alt="des"
                                  width={44}
                                  height={44}
                                />
                              </div>
                              <span className="home-hero-gsedate">Premier Leauge</span>
                            </div>
                          </div>

                          <div className="home-hero-gceachs">
                            <div className="home-hero-gceach">
                              <span className="home-hero-gsedate">July 18, 2024</span>
                              <div className="home-hero-gseteam">
                                <Image
                                  src="/assets/teamone.png"
                                  alt="des"
                                  width={44}
                                  height={44}
                                />
                                <span className="hhgseteam-score">
                                  1 - 1
                                </span>
                                <Image
                                  src="/assets/teamtwo.png"
                                  alt="des"
                                  width={44}
                                  height={44}
                                />
                              </div>
                              <span className="home-hero-gsedate">Premier Leauge</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="home-heros">
                    <div className="home-hero">
                      <div className="home-hero-banner">
                        <div className="home-hero-bancontent">
                          <h1>Cashback Bonus</h1>
                          <p>10% up to $500</p>

                          <div className="hherbancon-but">
                            <button><Link href='/register' >Registration</Link></button>
                          </div>
                        </div>
                      </div>

                      <div className="home-hero-sports">
                        <div className="home-hero-sport">
                          <div className="home-herosports-container">
                            {sportListArray.map(sport => (
                              <div key={sport.id} className="home-herosports-item">
                                <Link href={sport.url}>
                                  {sport.imgSrc}
                                  <p>{sport.text}</p>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="home-all-games">
                    <div className="home-all-game">
                      <div className="home-all-gmenus">
                        <div className="home-all-gmenu">
                          <ul>
                            <li><Link href=''>All</Link></li>
                            <li><Link href=''>Live</Link></li>
                            <li><Link href=''>Today</Link></li>
                            <li><Link href=''>Tomorrow</Link></li>
                            <li><Link href=''>1h</Link></li>
                            <li><Link href=''>3h</Link></li>
                            <li><Link href=''>6h</Link></li>
                            <li><Link href=''>12h</Link></li>
                            <li><Link href=''>24h</Link></li>
                            <li className="calendar-input">
                              <div className="calender-text56656">Calender</div>
                              <input type="date" id="date" name="date" placeholder="Calender" />
                            </li>
                          </ul>
                        </div>
                      </div>


                      <div className="home-all-gmatchs">
                        <div className="home-all-gmatch">
                          <LiveGame />
                          <LiveGame />
                          <LiveGame />
                          <LiveGame />
                          <LiveGame />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div>
                    <div className="hkik-oddline-head">
                      <h1>Football</h1>
                    </div>
                    <SportType leagueTypeOfJson={leagueTypeOfJson} svg='ufeaIcon' leagueName='League Nations UEFA' />
                  </div>


                  <div className="home-sectionfours">
                    <div className="home-sectionfour">
                      <div className="home-secfour-head">
                        <h2>Popular Sports</h2>
                        <p>Permanent live, fast pacing matches, immediate settlement</p>
                      </div>

                      <div className="home-secfour-grids">
                        <div className="home-secfour-grid">
                          <div className="home-secfour-g-each">
                            <div className="home-sfgeach">
                              <Image
                                src="/assets/basketballgreen.png"
                                alt="des"
                                width={55}
                                height={55}
                              />
                              <p>eBasketball</p>
                            </div>
                          </div>

                          <div className="home-secfour-g-each">
                            <div className="home-sfgeach">
                              <Image
                                src="/assets/hockeygreen.png"
                                alt="des"
                                width={55}
                                height={55}
                              />
                              <p>eHockey</p>
                            </div>
                          </div>

                          <div className="home-secfour-g-each">
                            <div className="home-sfgeach">
                              <Image
                                src="/assets/tennisgreen.png"
                                alt="des"
                                width={55}
                                height={55}
                              />
                              <p>eTennis</p>
                            </div>
                          </div>

                          <div className="home-secfour-g-each">
                            <div className="home-sfgeach">
                              <Image
                                src="/assets/footballgreen.png"
                                alt="des"
                                width={55}
                                height={55}
                              />
                              <p>eFootball</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>
      </PageLayout >
      <div className="home-sectionfives">
        <div className="home-sectionfive">
          <div className="home-secfive-flex">
            <div className="home-secfive-left">
              <div className="home-secfive-leftImg">
                <Image
                  src="/assets/aboutone.png"
                  alt="des"
                  width={300}
                  height={380}
                />

                <Image
                  className="hsflimg-float"
                  src="/assets/aboutshape.png"
                  alt="des"
                  width={300}
                  height={240}
                />
              </div>
            </div>

            <div className="home-secfive-right">
              <div className="home-secfive-r-content">
                <span className="hsecfivrcont-one"><p>Why Choose Us</p></span>

                <span className="hsecfivrcont-two"><h2>What the Main Benefits from Us</h2></span>
                <span className="hsecfivrcont-three"><p>The main benefits from us are streamlined services and improved efficiency.</p></span>

                <div className="hsecfivrcont-four">
                  <div className="hsecfivrcont-grid">
                    <div className="hsecfivrcont-g-each">
                      <Image
                        src="/assets/svg/audioSvg.svg"
                        alt="des"
                        width={30}
                        height={30}
                      />
                      <p>
                        High Bonuses
                      </p>
                      <Image
                        src="/assets/svg/arrowLongRight.svg"
                        alt="des"
                        width={15}
                        height={11}
                        className='hsecfiv-mobile-siz'
                      />
                    </div>

                    <div className="hsecfivrcont-g-each">
                      <Image
                        src="/assets/svg/competeSvg.svg"
                        alt="des"
                        width={30}
                        height={30}
                      />
                      <p>
                        High Bonuses
                      </p>
                      <Image
                        src="/assets/svg/arrowLongRight.svg"
                        alt="des"
                        width={15}
                        height={11}
                        className='hsecfiv-mobile-siz'
                      />

                    </div>

                    <div className="hsecfivrcont-g-each">
                      <Image
                        src="/assets/svg/bonusSvg.svg"
                        alt="des"
                        width={30}
                        height={30}
                      />
                      <p>
                        High Bonuses
                      </p>
                      <Image
                        src="/assets/svg/arrowLongRight.svg"
                        alt="des"
                        width={15}
                        height={11}
                        className='hsecfiv-mobile-siz'
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="home-main">
        <StepToPlay />
      </div>

      <div className="home-main">
        <Testimonial />
      </div>


      <div className="home-players">
        <div className="home-player">
          <table className="home-player-table">
            <thead>
              <tr>
                {topPlayersHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topPlayersRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      {typeof cell === 'object' ? (
                        <div className="home-pt-contts">
                          <img src={cell.img} alt={cell.text} style={{ width: cell.height, height: cell.height }} />
                          <span>{cell.text}</span>
                        </div>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <Faq />
      </div>

      <div className="home-sectionsixs">
        <div className="home-sectionsix">
          <div className="home-secsix-cont">
            <h2>Want gaming & esports news
              straight to your inbox?</h2>

            <p>To Get Exclusive Benefits</p>

            <div className="home-secsix-sub">
              <form>
                <input type="text" placeholder="Enter your Email" name="email" />
              </form>
              <p>Subscribe</p>
            </div>
          </div>
          <Image
            src="/assets/footerleft.png"
            alt="des"
            width={352}
            height={387}
            className="hsss-fot-leftimg"
          />
          <Image
            src="/assets/footerleft2.png"
            alt="des"
            width={111}
            height={311}
            className="hsss-fot-leftimg2"
          />
          <Image
            src="/assets/footerright.png"
            alt="des"
            width={504}
            height={355}
            className="hsss-fot-rightimg"
          />

        </div>
      </div>
      <Footer />
    </>
  );
};
