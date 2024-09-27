'use client';
import OddOutcome from '@/app/components/OddOutcome';
import Image from 'next/image';
import moment from 'moment-timezone'; // Ensure moment-timezone is imported
import { useState, useEffect } from 'react';
import { useOddsStore } from '@/utils/oddsstore';

// Function to convert UTC time to client's local time
const convertUtcToLocalTime = (utcTime) => {
    return utcTime ? moment.utc(utcTime).local().format('YYYY-MM-DD hh:mm:ss A') : '';
};

const useSportType = (spid) => {
    const [oddsData, setOddsData] = useState([]);
    const [realOdds, setRealOdds] = useState([]); // New state for real odds
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [leagueTypeOfJson, setLeagueTypeOfJson] = useState([]); // State to hold league data
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
    const [pageSize] = useState(10); // Number of events to load per page
    const [totalEvents, setTotalEvents] = useState(0); // State to hold total number of events
    const { selectedOdds, setSelectedOdds, clearSelectedOdds } = useOddsStore();
    console.log(spid, 'spid', loading, 'loading');

    console.log(realOdds)
    const fetchTournaments = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/live-events/get-tournaments?spid=${spid}&isLive=false`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setOddsData(data.tournaments); // Set the fetched data directly
            setRealOdds(data.odds.map(fixture => ({
                id: fixture.id,
                status: fixture.status,
                homeTeam: {
                    id: fixture.home_competitors[0].id,
                    price: fixture.odds.find(odds => odds.selection === fixture.home_team_display)?.price || null
                },
                awayTeam: {
                    id: fixture.away_competitors[0].id,
                    price: fixture.odds.find(odds => odds.selection === fixture.away_team_display)?.price || null
                }
            })));
            console.log(data.odds, 'data.odds');
            setTotalEvents(data.tournaments.length); // Set total events based on fetched data
            return data.tournaments; // Return the data directly as it matches the expected format
        } catch (error) {
            console.error('Failed to fetch tournaments:', error);
            return [];
        } finally {
            setLoading(false); // End loading odds
        }
    };

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true); // Start loading
            const tournaments = await fetchTournaments();
            console.log(tournaments, 'tournaments');
            if (tournaments.length > 0) {
                setLeagueTypeOfJson(tournaments); // Set league data from fetched tournaments
            }
        };
        loadEvents();
    }, [spid]);

    const loadMoreEvents = () => {
        setCurrentPage((prevPage) => prevPage + 1); // Increment the current page
    };

    const handleTournamentSelect = (tournament) => {
        console.log(tournament, 'tournament');
        setSelectedOdds(tournament); // Set the selected tournament
    };

    const clearSelection = () => {
        clearSelectedOdds(); // Clear the selected odds
    };

    console.log(selectedOdds, 'selectedTournament');

    const renderEvent = (tournament, eventIndex) => {
        const homeTeam = tournament.home_competitors[0]?.name || 'Unknown';
        const awayTeam = tournament.away_competitors[0]?.name || 'Unknown';
        const homeLogo = tournament.home_competitors[0]?.logo || '/assets/teams/home/default.png';
        const awayLogo = tournament.away_competitors[0]?.logo || '/assets/teams/away/default.png';
        const startTime = convertUtcToLocalTime(tournament.start_date); // Convert start date to local time
        const odd = realOdds.find(odds => odds.id === tournament.id);

        const handleClick = () => {
            if (odd && odd.id && odd.homeTeam.price && odd.awayTeam.price) {
                handleTournamentSelect({...tournament, odd}); // Add click handler for selection only if odd is not null
            }
        };
        return (
            <div 
                className={`flex flex-col p-4 rounded-lg transition duration-300 ease-in-out ${selectedOdds?.id === tournament.id ? 'bg-blue-200 border-2 border-blue-600 shadow-lg' : ''}`} 
                onClick={() =>  handleClick()} // Add click handler for selection
                onDoubleClick={clearSelection} // Clear selection on double click
            >
                <p className="ml-2 text-lg font-semibold text-gray-800">{startTime}</p> {/* Display start time with enhanced styling */}
                <div key={eventIndex} className="hkik-oddline-econt block">
                    <div className="lst_two hkik-oddline-econt-lefts">
                    <div className="hkik-oddline-econt-left hkik-oddline-mobile-left">
                        <span className='hkikodeconle-mob-rev'>
                            <p className={`font-medium ${selectedOdds?.id === tournament.id ? 'text-gray-700' : ''}`}>{homeTeam}</p>
                            <Image
                                src={homeLogo.includes('unknown') ? '/assets/teams/home/default.png' : homeLogo} // Fallback to default if logo is unknown
                                alt={homeTeam}
                                width={38}
                                height={38}
                            />
                        </span>
                        <strong className="text-xl mx-2">VS</strong>
                        <span className='hkikodeconle-rev'>
                            <Image
                                src={awayLogo.includes('unknown') ? '/assets/teams/away/default.png' : awayLogo} // Fallback to default if logo is unknown
                                alt={awayTeam}
                                width={38}
                                height={38}
                            />
                            <p className={`font-medium ${selectedOdds?.id === tournament.id ? 'text-gray-700' : ''}`}>{awayTeam}</p>
                        </span>
                    </div>
                </div>
                <div className="hkik-oddline-econt-rights">
                    <div className="hkik-oddline-econt-right">
                        <OddOutcome 
                            gap={20} 
                            home={odd ? odd.homeTeam.price : 0} // Placeholder for home odds
                            away={odd ? odd.awayTeam.price : 0} // Placeholder for away odds
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    };

    const renderLeague = (league, index) => {
        const tournamentsInLeague = league.tournaments.slice(0, currentPage * pageSize); // Limit tournaments based on current page
        if (tournamentsInLeague.length === 0) return null; // Skip rendering if no tournaments in league

        return (
            <div key={index} className="hkik-oddline-each">
                <div className="hkik-oddline-eheads">
                    <div className="hkik-oddline-ehead">
                        <div className="hkik-ol-eheadl">
                            <p className="text-lg font-bold text-gray-800">{league.league}</p>
                        </div>
                    </div>
                </div>
                <div className="hkik-oddline-econts">
                    {tournamentsInLeague.map((tournament, eventIndex) => renderEvent(tournament, eventIndex))} {/* Render tournaments based on current page */}
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

        const allTournamentsEmpty = leagueTypeOfJson.every(league => league.tournaments?.length === 0);
        if (allTournamentsEmpty) {
            return (
                <div className="no-data">
                    <p>No events available for this league.</p>
                </div>
            );
        }

        console.log(leagueTypeOfJson, 'leagueTypeOfJson');
        return leagueTypeOfJson.map((league, index) => renderLeague(league, index));
    };

    const loadMoreBtn = () => {
        if (totalEvents > currentPage * pageSize && !loading) {
            return (
                <button 
                    onClick={loadMoreEvents} 
                    className="px-4 py-2 mx-2 text-secondary-white bg-cyber-lime rounded-lg hover:bg-light-cyber-lime disabled:opacity-50"
                >
                    Load More
                </button>
            );
        }
        return null; // Ensure the function returns null if the button is not rendered
    };

    return {
        oddsData,
        realOdds, // Return real odds
        loading,
        leagueTypeOfJson,
        selectedOdds, // Return selected tournament
        renderEvent,
        renderLeague,
        renderContent,
        loadMoreBtn
    };
};

export default useSportType;