import React from 'react';
import { useTime } from 'react-timer-hook';
import './Timer.css'

function Timer() {
    const {
        seconds,
        minutes,
        hours,
    } = useTime({ format: '12-hour' });

    const padNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    return (
        <div className='timerStyle'>
            <div className='d-flex align-items-center justify-content-center'>
                <span>{padNumber(hours)}</span><label>:</label><span>{padNumber(minutes)}</span><label>:</label><span>{padNumber(seconds)}</span>
            </div>
        </div>
    );
}

export default Timer;
