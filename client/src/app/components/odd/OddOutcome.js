import './css/oddOutcome.css';

const OddOutcome = ({ home, draw, away, gap }) => {
    return (
        <div className="hagmel-matchs">
            <div className="hagmel-match" style={{ gap: `${gap}px` }}>
                <div className="hag-odd">
                    <div className="hag-odd-each">
                        <div>
                            <p>1</p>
                            <span>{home}</span>
                        </div>
                    </div>
                </div>
                <div className="hag-odd">
                    <div className="hag-odd-each">
                        <div>
                            <p>X</p>
                            <span>{draw}</span>
                        </div>
                    </div>
                </div>
                <div className="hag-odd">
                    <div className="hag-odd-each">
                        <div>
                            <p>2</p>
                            <span>{away}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OddOutcome;
