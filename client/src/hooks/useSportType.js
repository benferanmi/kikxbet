'use client';
import OddOutcome from '@/app/components/OddOutcome';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const useSportType = (spid) => {
    const [oddsData, setOddsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10); // Number of events to fetch per page
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [leagueTypeOfJson, setLeagueTypeOfJson] = useState([]); // State to hold league data

    console.log(spid, 'spid', loading, 'loading');
    const fetchOdds = async (eventIds) => {
        if (eventIds.length === 0) return; // No event IDs to fetch odds for
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/live-events/get-odds?spid=${spid}&eventIds=${eventIds.join(',')}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setOddsData(data);
        } catch (error) {
            console.error('Failed to fetch odds:', error);
        } 
    };

    const fetchTodayEvents = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/live-events/get-today-events?spid=${spid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.DATA;
        } catch (error) {
            console.error('Failed to fetch today\'s events:', error);
            return [];
        } finally {
            setLoading(false); // End loading odds
        }
    };

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true); // Start loading
            const todayEvents = await fetchTodayEvents();
            console.log(todayEvents, 'todayEvents');
            if (todayEvents.length > 0) {
                setLeagueTypeOfJson(todayEvents); // Set league data from today's events
            }
        };
        loadEvents();
    }, [spid]);

    useEffect(() => {
        const loadOddsForPage = () => {
            if (leagueTypeOfJson.length === 0) {
                console.error('No league data available');
                return; // Handle the case where leagueTypeOfJson is empty
            }

            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;

            const eventIds = [];
            leagueTypeOfJson.forEach(list => {
                const eventsToLoad = list.EVENTS.slice(startIndex, endIndex);
                eventsToLoad.forEach(event => {
                    eventIds.push(event.EVENT_ID);
                });
            });
            console.log(eventIds, 'eventIds');
            fetchOdds(eventIds);
        };

        loadOddsForPage();
    }, [leagueTypeOfJson, currentPage]);

    const totalEvents = leagueTypeOfJson.reduce((total, list) => total + (list.EVENTS?.length || 0), 0);
    const totalPages = Math.ceil(totalEvents / pageSize);

    const renderEvent = (event, eventIndex) => {
        const eventOdds = oddsData.find(odds => odds.event_id === event.EVENT_ID)?.odds || null;
        if (!eventOdds) {
            return null;
        }
        return (
            <div key={eventIndex} className="hkik-oddline-econt">
                <div className="lst_two hkik-oddline-econt-lefts">
                    <div className="hkik-oddline-econt-left hkik-oddline-mobile-left">
                        <span className='hkikodeconle-mob-rev'>
                            <p>{event.HOME_NAME}</p>
                            <Image
                                src={event?.HOME_IMAGES?.[0] || '/default-home-image.png'}
                                alt={event.HOME_NAME}
                                width={38}
                                height={38}
                            />
                        </span>
                        <strong>VS</strong>
                        <span className='hkikodeconle-rev'>
                            <Image
                                src={event?.AWAY_IMAGES?.[0] || '/default-away-image.png'}
                                alt={event.AWAY_NAME}
                                width={38}
                                height={38}
                            />
                            <p>{event.AWAY_NAME}</p>
                        </span>
                    </div>
                </div>
                <div className="hkik-oddline-econt-rights">
                    <div className="hkik-oddline-econt-right">
                        <OddOutcome 
                            gap={20} 
                            draw={eventOdds.draw || 0} 
                            home={eventOdds.home || 0} 
                            away={eventOdds.away || 0} 
                        />
                    </div>
                </div>
            </div>
        );
    };

    const renderLeague = (list, index) => {
        const leagueEvents = oddsData.length > 0 && list.EVENTS?.filter(event => oddsData.some(odds => odds.event_id === event.EVENT_ID)) || [];
        if (leagueEvents.length === 0) {
            return null;
        }
        return (
            <div key={index} className="hkik-oddline-each">
                <div className="hkik-oddline-eheads">
                    <div className="hkik-oddline-ehead">
                        <div className="hkik-ol-eheadl">
                            <Image
                                src={list.TOURNAMENT_IMAGE} // Assuming sport name is available
                                alt={list.COUNTRY_NAME}
                                width={17}
                                height={17}
                            />
                            <p>{list.NAME}</p>
                            <Image
                                src="/assets/fireIcon.png"
                                alt="fire icon"
                                width={14}
                                height={15}
                            />
                        </div>
                        <div className="hkik-ol-eheadr">
                            <span>{list.EVENTS?.length > 0 ? new Date(list.EVENTS[0].START_TIME * 1000).toLocaleString() : ''}</span>
                        </div>
                    </div>
                </div>
                <div className="hkik-oddline-econts">
                    {leagueEvents.length > 0 ? leagueEvents.map(renderEvent) : (
                        <div className="no-data">
                            <p>No events available for this league.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex justify-center items-center h-64">
                    <div className="loader border-t-4 border-b-4 border-cyber-lime rounded-full w-16 h-16 animate-spin"></div>
                </div>
            );
        }

        if (leagueTypeOfJson.length === 0) {
            return (
                <div className="no-data">
                    <p>No events available for this league.</p>
                </div>
            );
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedLeagues = leagueTypeOfJson.slice(startIndex, endIndex);

        return paginatedLeagues.map(renderLeague);
    };

    return {
        oddsData,
        currentPage,
        setCurrentPage,
        pageSize,
        loading,
        leagueTypeOfJson,
        totalEvents,
        totalPages,
        renderEvent,
        renderLeague,
        renderContent
    };
};

export default useSportType;