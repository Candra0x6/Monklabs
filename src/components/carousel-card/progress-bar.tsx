/**
 * Progress Bar Component
 * 
 * Visual progress indicator for auction status or bid progression.
 * Displays a filled bar within a rounded background.
 * 
 * Features:
 * - Customizable width via CSS class (e.g., 'w-1/2' for 50%)
 * - Orange/pumpkin color scheme with glow effect
 * - Rounded corners for modern appearance
 * - Uses box-shadow for luminous glow effect
 */

import React from 'react';

/**
 * Props for progress bar
 */
interface ProgressBarProps {
    /** CSS width class (default: 'w-1/2' for 50%) */
    width?: string;
}

/**
 * ProgressBar: Visual progress indicator
 * 
 * @param width - Tailwind width class controlling fill percentage
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ width = 'w-1/2' }) => (
    <div className="w-full relative rounded-full h-1.5 bg-pumpkin-950 bg-orange-950">
        {/* Progress fill bar with glow effect */}
        <div
            className={`absolute rounded-full ${width} h-full`}
            style={{ boxShadow: 'rgb(255, 115, 0) 0px 0px 4px 2px', background: 'rgb(255, 214, 181)' }}
        />
    </div>
);
