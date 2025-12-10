/**
 * Countdown Hook
 * 
 * Custom React hook that manages countdown timer state.
 * Tracks days, hours, minutes, and seconds remaining.
 * 
 * Behavior:
 * - Initializes with 23d 8h 2m 26s
 * - Updates every second via setInterval
 * - Stops when countdown reaches 0
 * - Cleans up interval on unmount
 */

import { useState, useEffect } from 'react';

/**
 * Time breakdown object
 */
interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * useCountdown: Custom hook for countdown timer
 * 
 * @returns TimeLeft object with current days, hours, minutes, seconds remaining
 */
export const useCountdown = () => {
    /** State for time remaining */
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 23, hours: 8, minutes: 2, seconds: 26 });

    useEffect(() => {
        /**
         * Calculate target date by adding initial time offset to current date
         * Initial offset: 23 days + 8 hours + 2 minutes + 26 seconds
         */
        const targetDate = new Date().getTime() + (23 * 24 * 60 * 60 * 1000) + (8 * 60 * 60 * 1000) + (2 * 60 * 1000) + (26 * 1000);

        /** Update countdown every second */
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                // Countdown reached zero, stop updating
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                /**
                 * Break down the time difference into:
                 * - Days: Total milliseconds / (1000 * 60 * 60 * 24)
                 * - Hours: Remainder / (1000 * 60 * 60) 
                 * - Minutes: Remainder / (1000 * 60)
                 * - Seconds: Remainder / 1000
                 */
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        /**
         * Cleanup: Clear interval when component unmounts
         */
        return () => clearInterval(interval);
    }, []);

    return timeLeft;
};

/**
 * formatNumber: Pad numbers to 2 digits with leading zero
 * 
 * Examples:
 * - formatNumber(5) => "05"
 * - formatNumber(12) => "12"
 * 
 * @param num - Number to format
 * @returns Zero-padded string
 */
export const formatNumber = (num: number) => num.toString().padStart(2, '0');

/** Type export for TimeLeft interface */
export type TimeLeftType = TimeLeft;
