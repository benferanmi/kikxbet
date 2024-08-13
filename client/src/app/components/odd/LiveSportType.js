import Image from 'next/image';
import './css/livesporttype.css';
import OddOutcome from './OddOutcome';
import { useEffect, useState } from 'react';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const LiveSportType = ({ spid }) => {
    const [liveEvents, setLiveEvents] = useState([]);
    const [oddsData, setOddsData] = useState({});

    useEffect(() => {
        const fetchLiveSports = async () => {
            try {
                const response = await fetch(`https://flashlive-sports.p.rapidapi.com/v1/events/live-list?locale=en_INT&sport_id=${spid}&timezone=3`, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'a9c98e38a0mshed7640eccfd80b3p1dc106jsn3b8fba3f46e6',
                        'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                const liveEvents = data.DATA || [];
                setLiveEvents(liveEvents);

                // Fetch odds for all live events with rate limiting
                for (const event of liveEvents) {
                    for (const singleEvent of event.EVENTS) {
                        await fetchOdds(singleEvent.EVENT_ID);
                        await sleep(1000); // Delay of 1 second between each request
                    }
                }
            } catch (error) {
                console.error("Failed to fetch live sports data:", error);
            }
        };

        const fetchOdds = async (event_id) => {
            if (oddsData[event_id]) return; // Use cached data if available

            try {
                const response = await fetch(`https://flashlive-sports.p.rapidapi.com/v1/events/odds?event_id=${event_id}&locale=en_INT`, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'a9c98e38a0mshed7640eccfd80b3p1dc106jsn3b8fba3f46e6',
                        'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                console.log(`Odds data for event ${event_id}:`, data); // Log the fetched data
                const bets = data.DATA;

                // Filter to find the *1X2 betting type
                const bettingType1X2 = bets.find(bet => bet.BETTING_TYPE === '*1X2');
                if (bettingType1X2) {
                    const fullTimeOdds = bettingType1X2.PERIODS.find(period => period.ODDS_STAGE === '*Full Time');
                    if (fullTimeOdds) {
                        let market = fullTimeOdds.GROUPS[0].MARKETS.find(market => market.BOOKMAKER_NAME === 'bet365');
                        if (!market) {
                            // If bet365 market is not found, use the first available market
                            market = fullTimeOdds.GROUPS[0].MARKETS[0];
                        }
                        if (market) {
                            setOddsData(prevData => ({
                                ...prevData,
                                [event_id]: {
                                    home: market.ODD_CELL_FIRST.VALUE,
                                    draw: market.ODD_CELL_SECOND.VALUE,
                                    away: market.ODD_CELL_THIRD.VALUE,
                                }
                            }));
                        }
                    }
                }
            } catch (error) {
                console.error("Failed to fetch odds:", error);
            }
        };

        fetchLiveSports();
    }, [spid]);

    return (
        <div className="hkik-oddlines">
            <div className="hkik-oddline">
                <div className="hkik-oddline-body">
                    {liveEvents.map((event, eventIndex) => (
                        <div key={eventIndex} className="hkik-oddline-each">
                            <div className="hkik-oddline-eheads">
                                <div className="hkik-oddline-ehead">
                                    <div className="hkik-ol-eheadl">
                                        <Image
                                            src={event.TOURNAMENT_IMAGE || ''}
                                            alt="Tournament"
                                            width={17}
                                            height={17}
                                        />
                                        <p>{event.NAME || ''}</p>
                                    </div>
                                </div>
                            </div>
                            {event.EVENTS.map((singleEvent, singleEventIndex) => {
                                const odds = oddsData[singleEvent.EVENT_ID] || {};
                                return (
                                    <div key={singleEventIndex} className="hkik-oddline-econts">
                                        <div className="hkik-oddline-econt">
                                            <div className="hkik-oddline-econt-lefts lst_one">
                                                <div className="hkik-oddline-econt-left hkik-oecl-mobile">
                                                    <div className="hkik-oddecontl-team">
                                                        <span className="hkoddete-one">
                                                            <Image
                                                                src={singleEvent.HOME_IMAGES?.[0] || ''}
                                                                alt="Home Team"
                                                                width={26}
                                                                height={26}
                                                            />
                                                            <p>{singleEvent.HOME_NAME || ''}</p>
                                                        </span>
                                                        <span>
                                                            <Image
                                                                src={singleEvent.AWAY_IMAGES?.[0] || ''}
                                                                alt="Away Team"
                                                                width={26}
                                                                height={26}
                                                            />
                                                            <p>{singleEvent.AWAY_NAME || ''}</p>
                                                        </span>
                                                    </div>
                                                    <div className="hkik-oddecont1-odd">
                                                        <div>
                                                            <span>{singleEvent.HOME_SCORE_CURRENT ?? 0}</span>
                                                            <p>{singleEvent.STAGE_TYPE || ''}</p>
                                                            <p>{singleEvent.STAGE || ''}</p>
                                                            <p>{singleEvent.ROUND || ''}</p>
                                                        </div>
                                                        <div>
                                                            <span>{singleEvent.AWAY_SCORE_CURRENT ?? 0}</span>
                                                            <p>{singleEvent.HOME_SCORE_FULL ?? 0}</p>
                                                            <p>{singleEvent.AWAY_SCORE_FULL ?? 0}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hkik-oddline-econt-rights">
                                                <div className="hkik-oddline-econt-right">
                                                    <OddOutcome
                                                        home={odds.home || 0}
                                                        draw={odds.draw || 0}
                                                        away={odds.away || 0}
                                                        gap={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiveSportType;
