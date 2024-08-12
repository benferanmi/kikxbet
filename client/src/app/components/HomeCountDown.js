'use client';
import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-08-09T00:00:00Z'); // Replace with your target date

    const updateTimer = () => {
      const now = new Date();
      const totalSeconds = differenceInSeconds(targetDate, now);

      if (totalSeconds > 0) {
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-reminder-countdowns">
        <div className="home-reminder-countdown">
            <div className="home-r-count-each">
            <span>{String(timeLeft.days).padStart(2, '0')}</span>
            <p>Days</p>
            </div>

            <div className="home-r-count-each">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
            <p>Hrs</p>
            </div>

            <div className="home-r-count-each">
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <p>Min</p>
            </div>

            <div className="home-r-count-each">
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            <p>Secs</p>
            </div>
        </div>
    </div>
  );
}
