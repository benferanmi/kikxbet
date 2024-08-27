'use client';
import OddOutcome from "@/app/components/OddOutcome";
import { getTimezoneOffset } from "@/utils/timeutils";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const useLiveSportType = (spid, proevents) => {
    const [liveEvents, setLiveEvents] = useState(proevents || []);
    const [oddsData, setOddsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5); // Number of events to fetch per page
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [currentEvents, setCurrentEvents] = useState([]);
    const [bettingType, setBettingType] = useState('*1X2'); // State to hold the selected betting type

    const clientTimezone = getTimezoneOffset();
    console.log(clientTimezone);

    const fetchOdds = useRef(async (eventIds, bookIds) => {
        try {
            const promises = eventIds.map(async (event_id, index) => {
                const book_id = bookIds[index];
                console.log(event_id, book_id);
                const response = await fetch(`https://flashlive-sports.p.rapidapi.com/v1/events/live-odds?locale=en_INT&event_id=${event_id}&book_id=${book_id}`, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '24193b4722msh098734db8c9c805p112d8bjsn80d4e3d80b98',
                        'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                const bets = data.DATA;

                // Process the odds data
                if (data && data.LAST_CHANGE_KEY) {
                    console.log(bets);
                    const oddsData = {
                        event_id: event_id,
                        ODD_BOOKMAKER_ID: bets.ODD_BOOKMAKER_ID,
                        BOOKMAKER_NAME: bets.BOOKMAKER_NAME,
                        ODD_1_1: bets.ODD_1_1,
                        ODD_1_1_AVAILABLE: bets.ODD_1_1_AVAILABLE,
                        ODD_0: bets.ODD_0,
                        ODD_0_AVAILABLE: bets.ODD_0_AVAILABLE,
                        ODD_2_1: bets.ODD_2_1,
                        ODD_2_1_AVAILABLE: bets.ODD_2_1_AVAILABLE
                    };
                    console.log(oddsData, event_id, book_id, 'bi');
                    setOddsData(prevOddsData => [...prevOddsData, oddsData]);
                }
            });
            await Promise.all(promises);
        } catch (error) {
            console.error('Failed to fetch odds:', error);
        }
    });

    const fetchLiveSports = async () => {
        if (!proevents) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/live-events/get-live-events?spid=${spid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                const liveEvents = data.DATA || [];
                if (liveEvents.length === 0) {
                    setLoading(false);
                }
                console.log(liveEvents, 'liveEvents');
                setLiveEvents(liveEvents);
            } catch (error) {
                console.error('Failed to fetch live sports data:', error);
            }
        } else {
            setLoading(false); // If proevents are provided, set loading to false
        }
    };

    const loadOddsForPage = () => {
        if (liveEvents.length === 0) {
            console.error('No live events available');
            return; // Handle the case where liveEvents is empty
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const eventIds = [];
        const bookIds = [];
        liveEvents.slice(startIndex, endIndex).forEach(event => {
            event.EVENTS.forEach(e => {
                eventIds.push(e.EVENT_ID);
                bookIds.push(e.BOOKMAKERS_WITH_LIVE_IN_OFFER ? e.BOOKMAKERS_WITH_LIVE_IN_OFFER[0] : e.LIVE_IN_OFFER_BOOKMAKER_ID);
            });
        });
        console.log(eventIds, bookIds, 'eventIds and bookIds');
        if (eventIds.length > 0) {
            fetchOdds.current(eventIds, bookIds);
        }
    };

    const fetchLocalOdds = async (spid) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/live-events/get-live-odds?spid=${spid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data, 'localOdds');
            setOddsData(data);
        } catch (error) {
            console.error('Failed to fetch local odds:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    useEffect(() => {
        setLoading(true); // Start loading
        fetchLiveSports();
        fetchLocalOdds(spid);
    }, [spid, proevents]);

    useEffect(() => {
        if (liveEvents.length > 0) {
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            setCurrentEvents(liveEvents.slice(startIndex, endIndex));
            loadOddsForPage(); // Load odds for the current page
        }
    }, [liveEvents, currentPage]);

    const totalEvents = liveEvents.reduce((total, event) => total + (event.EVENTS?.length || 0), 0);
    const totalPages = Math.ceil(totalEvents / pageSize);

    const renderEvent = (event, eventIndex) => {
        const {odds, event_id} = oddsData.find(odds => odds.event_id === event.EVENT_ID) || {};
        if (!odds) {
            return null;
        }
        console.log(odds, event_id, 'odds');
        return (
            <div key={eventIndex} className="hkik-oddline-econts">
                <div className="hkik-oddline-econt">
                    <div className="hkik-oddline-econt-lefts lst_one">
                        <div className="hkik-oddline-econt-left hkik-oecl-mobile">
                            <div className="hkik-oddecontl-team">
                                <span className="hkoddete-one">
                                    <Image
                                        src={event.HOME_IMAGES?.[0] || ''}
                                        alt="Home Team"
                                        width={26}
                                        height={26}
                                    />
                                    <p>{event.HOME_NAME || ''}</p>
                                </span>
                                <span>
                                    <Image
                                        src={event.AWAY_IMAGES?.[0] || ''}
                                        alt="Away Team"
                                        width={26}
                                        height={26}
                                    />
                                    <p>{event.AWAY_NAME || ''}</p>
                                </span>
                            </div>
                            <div className="hkik-oddecont1-odd">
                                <div>
                                    <span>{event.HOME_SCORE_CURRENT ?? 0}</span>
                                    <p>{event.STAGE_TYPE || ''}</p>
                                    <p>{event.STAGE?.replace('_', ' ') || ''}</p>
                                    <p>{event.ROUND || ''}</p>
                                </div>
                                <div>
                                    <span>{event.AWAY_SCORE_CURRENT ?? 0}</span>
                                    <p>{event.HOME_SCORE_FULL ?? 0}</p>
                                    <p>{event.AWAY_SCORE_FULL ?? 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hkik-oddline-econt-rights">
                        <div className="hkik-oddline-econt-right">
                            <OddOutcome
                                home={odds?.odd_0?.replace('d' || 'u', '') || 0}
                                draw={odds?.odd_0_available?.replace('d' || 'u', '') || 0}
                                away={odds?.odd_2_1?.replace('u', '') || 0}
                                gap={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderLeague = (league, leagueIndex) => {
        const leagueEvents = league.EVENTS?.filter(event => {
            const odds = oddsData.find(odds => odds.event_id === event.EVENT_ID);
            return odds && odds.event_id; // Ensure odds is not null and has event_id
        }) || [];
        if (leagueEvents.length === 0) {
            return null;
        }
        return (
            <div key={leagueIndex} className="hkik-oddline-each">
                <div className="hkik-oddline-eheads">
                    <div className="hkik-oddline-ehead">
                        <div className="hkik-ol-eheadl">
                            <Image
                                src={league.TOURNAMENT_IMAGE || ''}
                                alt="Tournament"
                                width={17}
                                height={17}
                            />
                            <p>{league.NAME || ''}</p>
                        </div>
                    </div>
                </div>
                {leagueEvents.map(renderEvent)}
            </div>
        );
    };

    return {
        liveEvents,
        oddsData,
        currentPage,
        setCurrentPage,
        pageSize,
        loading, // Update loading state
        currentEvents,
        totalPages,
        bettingType,
        setBettingType,
        renderLeague,
        renderEvent,
        proevents
    };
};

export default useLiveSportType;