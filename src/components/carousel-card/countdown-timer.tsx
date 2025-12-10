/**
 * Countdown Timer Component
 * 
 * Displays a live countdown timer in DD:HH:MM:SS format.
 * Shows the time remaining for an NFT auction or event.
 * 
 * Format: {Days}D : {Hours}H : {Minutes}M : {Seconds}S
 * - Days: No padding (can be 1 or 2+ digits)
 * - Hours, Minutes, Seconds: Zero-padded to 2 digits (00-59)
 * - Uses monospace font for consistent spacing
 */

import React from 'react';
import { formatNumber, TimeLeftType } from './use-countdown';

/**
 * Props for countdown timer
 */
interface CountdownTimerProps {
    /** Time remaining object with days, hours, minutes, seconds */
    timeLeft: TimeLeftType;
}

/**
 * CountdownTimer: Live countdown display
 * 
 * @param timeLeft - Object with time breakdown (days, hours, minutes, seconds)
 */
export const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => (
    <div className="text-primary flex w-fit items-center justify-center gap-2 text-sm font-medium">
        {/* Countdown display with monospace font */}
        <h1 className='relative inline-flex items-center overflow-hidden text-center gap-1 font-mono'>
            {/* Days (no padding) */}
            <span>{timeLeft.days}D</span>
            :
            {/* Hours (zero-padded) */}
            <span>{formatNumber(timeLeft.hours)}H</span>
            :
            {/* Minutes (zero-padded) */}
            <span>{formatNumber(timeLeft.minutes)}M</span>
            :
            {/* Seconds (zero-padded) */}
            <span>{formatNumber(timeLeft.seconds)}S</span>
        </h1>
    </div>
);
