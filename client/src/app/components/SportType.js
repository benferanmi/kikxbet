'use client';
import './css/sporttype.css';
import useSportType from '@/hooks/useSportType';

const SportType = ({ spid, svg, leagueName }) => {
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
        renderContent
    } = useSportType(spid);

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

export default SportType;
