import React, { useState, useEffect, useRef } from  'react';
import styles from './Stopwatch.module.css';

export default function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return(() => {
            clearInterval(intervalIdRef.current);
        })

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliSeconds = Math.floor((elapsedTime % 1000) / 10); 

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliSeconds = String(milliSeconds).padStart(2, "0")

        return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }

    return(
        <div className={styles['container']}>
            <p className={styles['time']}>{formatTime()}</p>
            <div className={styles['btn-container']}>
                <button onClick={start} className={styles['btn1']} id='btn1'>Start</button>
                <button onClick={reset} className={styles['btn2']} id='btn2'>Reset</button>
                <button onClick={stop} className={styles['btn3']} id='btn3'>Stop</button>
            </div>
        </div>
    );
}