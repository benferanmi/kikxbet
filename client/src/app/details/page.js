
import { RouteMatcher } from 'next/dist/server/future/route-matchers/route-matcher';
import DetailsLayout from './DetailsLayout';
import './details.css';

const page = () => {

    const oddOutcome = [
        {},
        {},
        {},
        {},
        {},
        {},
    ];
    return (
        <div>
            <DetailsLayout>
                <div>
                    <div className="detail-odlines">
                        <div className="detail-odline">
                            <div className="detail-odline-content">
                                <div>
                                    <div className="details-odcont-head">
                                        <p>Match Winner</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width='15px' height='15px' >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>

                                    <div className="details-odcontent-body">
                                        <span>
                                            <h2>furia</h2>
                                            <p>1.75</p>
                                        </span>
                                        <span>
                                            <h2>furia</h2>
                                            <p>1.75</p>
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {
                                oddOutcome.map((match) => {
                                    return (
                                        <div key={RouteMatcher} className="detail-odline-content">
                                            <div>
                                                <div className="details-odcont-head">
                                                    <p>Match Winner</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width='15px' height='15px' >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>

                                                <div className="details-odcontent-body">
                                                    <span>
                                                        <h2>furia</h2>
                                                        <p>1.75</p>
                                                    </span>
                                                    <span>
                                                        <h2>furia</h2>
                                                        <p>1.75</p>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </DetailsLayout>
        </div>
    );
};

export default page;