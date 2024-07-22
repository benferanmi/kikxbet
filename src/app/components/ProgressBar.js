
const ProgressBar = ({ progress }) => {
    const intervals = ["x1.08", "x1.15", "1.2", "x1.5"];

    return (
        <div className='rsb-progress-container'>
            <div className='rsb-progressBar'>
                <div
                    className='rsb-p-filled'
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className='rsb-p-labels'>
                {intervals.map((value, index) => (
                    <span key={value} style={{ left: `${(index + 1) * 25}%` }}>
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar