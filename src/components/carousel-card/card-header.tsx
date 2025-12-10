/**
 * Card Header Component
 * 
 * Header section of the carousel card with a custom clipped polygon shape.
 * Serves as container for countdown timer and progress bar with a modern
 * geometric design using CSS clip-path.
 * 
 * Design:
 * - Outer div with border (1px, secondary color)
 * - Inner div with same clip-path for content
 * - Flexible layout for children alignment
 */

import React from 'react';

/**
 * Props for card header
 */
interface CardHeaderProps {
    /** CSS clip-path string value for geometric shape */
    clipPathValue: string;
    /** Content to render (countdown timer and progress bar) */
    children: React.ReactNode;
}

/**
 * CardHeader: Header section with clip-path styling
 * 
 * @param clipPathValue - CSS polygon clip-path for geometric shape
 * @param children - Timer and progress bar components
 */
export const CardHeader: React.FC<CardHeaderProps> = ({ clipPathValue, children }) => (
    <div className="relative w-full bg-border-secondary p-px" style={{ clipPath: clipPathValue }}>
        {/* Inner container with same clip-path and flexible column layout */}
        <div style={{ clipPath: clipPathValue }} className="bg-background flex flex-col items-end gap-2.5 px-7 py-4 relative w-full">
            {/* Countdown timer and progress bar */}
            {children}
        </div>
    </div>
);
