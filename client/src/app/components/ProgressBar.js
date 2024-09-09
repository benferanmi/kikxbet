const ProgressBar = ({ progress, intervals = ['x1.08', 'x6', '10', 'x20'] }) => {
    const intervalWidth = 100 / (intervals.length + 1); // Calculate width for each interval

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
                    <span key={value} style={{ left: `${(index + 1) * intervalWidth}%` }}>
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;