'use client';
import Image from 'next/image';
import './css/livesporttype.css';
import OddOutcome from './OddOutcome';
import useLiveSportType from '@/hooks/useLiveSportType';

const LiveSportType = ({ spid, proevents }) => {
    const {
        liveEvents,
        oddsData,
        currentPage,
        setCurrentPage,
        loading,
        eventsPerPage,
        currentEvents,
        totalPages,
        bettingType,
        setBettingType,
        renderLeague,
        renderEvent
    } = useLiveSportType(spid, proevents);

    return (
        <div className="hkik-oddlines">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader border-t-4 border-b-4 border-cyber-lime rounded-full w-16 h-16 animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="hkik-oddline">
                        <div className="hkik-oddline-body">
                            {currentEvents.length > 0 ? currentEvents.map(renderLeague) : <div className="text-secondary-white">No events found</div>}
                        </div>
                    </div>
                    {liveEvents.length > eventsPerPage && (
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
                </>
            )}
        </div>
    );
};

export default LiveSportType;
