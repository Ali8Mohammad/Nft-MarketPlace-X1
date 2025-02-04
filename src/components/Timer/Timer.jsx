import { useState, useEffect } from 'react';
import './Timer.css';
import ButtonBh from '../ButtonBh/ButtonBh';

export default function Timer({show_btn}) {  
  const [timeLeft, setTimeLeft] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);
  
  return (
    <div className={show_btn ? 'mh-timer-NFT' : 'mh-timer-Mashrooms'}>
      <div className='mh-timer-subNFT'> 
        <p className='mh-timer-p'>Auction ends in:</p>
        <div className='mh-timer-MainDiv'>
          <div className='mh-timer-2div'>
            <h3 className='mh-timer-time'>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</h3>
            <p className='mh-timer-descTime'>Hours</p>
          </div>
          <span className='mh-timer-comma'>:</span>
          <div className='mh-timer-2div'>
            <h3 className='mh-timer-time'>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</h3>
            <p className='mh-timer-descTime'>Minutes</p>
          </div>
          <span className='mh-timer-comma'>:</span>
          <div className='mh-timer-2div'>
            <h3 className='mh-timer-time'>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</h3>
            <p className='mh-timer-descTime'>Seconds</p>
          </div>
        </div>
      </div>
      {show_btn && (
        <ButtonBh buttonText={"Place Bid"} buttonClass={"bh-button-one"} showIcon={false} />
      )}
    </div>
  );
}