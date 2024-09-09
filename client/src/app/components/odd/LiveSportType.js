'use client';
import '../css/sporttype.css';
import OddOutcome from '@/app/components/OddOutcome';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useLiveSportType from '@/hooks/useLiveSportType';

const LiveSportType = ({ spid, svg, leagueName }) => {
    const {
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
        renderContent,
        loadMoreBtn
    } = useLiveSportType(spid);

    const renderEventWithOdds = (event, eventIndex) => {
        const eventOdds = oddsData.find(odds => odds.event_id === event.id)?.odds || null;
        if (!eventOdds) {
            return null;
        }
        return (
            <div key={eventIndex} className="hkik-oddline-econt">
                <div className="lst_two hkik-oddline-econt-lefts">
                    <div className="hkik-oddline-econt-left hkik-oddline-mobile-left">
                        <span className='hkikodeconle-mob-rev'>
                            <p>{event.home_team}</p>
                            <Image
                                src={`/assets/${event.sport_key}/home.png`} // Placeholder for home team image
                                alt={event.home_team}
                                width={38}
                                height={38}
                            />
                        </span>
                        <strong>VS</strong>
                        <span className='hkikodeconle-rev'>
                            <Image
                                src={`/assets/${event.sport_key}/away.png`} // Placeholder for away team image
                                alt={event.away_team}
                                width={38}
                                height={38}
                            />
                            <p>{event.away_team}</p>
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

    return (
        <div className={`hkik-oddlines ${spid === 'someSpecificSportId' ? 'specific-design' : ''}`}>
            {renderContent()}    
            {totalEvents > pageSize && !loading && (
                <div className="flex justify-center mt-4">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                        className="px-4 py-2 mx-2 text-secondary-white bg-cyber-lime rounded-lg hover:bg-light-cyber-lime disabled:opacity-50" 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="flex items-center text-secondary-white">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                        className="px-4 py-2 mx-2 text-secondary-white bg-cyber-lime rounded-lg hover:bg-light-cyber-lime disabled:opacity-50" 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default LiveSportType;
