/**
 * Background Grid Component
 * 
 * Renders a decorative 8-column grid layout that serves as a background
 * pattern for the browse section. Uses borders to create visual structure.
 * 
 * Grid Layout (8 columns):
 * 1. Single column
 * 2-4. 3-column span with internal 2-column grid
 * 5-7. 3-column span with internal 2-column grid (contains children)
 * 8. Single column
 * 
 * The component can optionally render children within the middle-right grid cell,
 * allowing for overlaid content like annotations or labels.
 */

import React from 'react';

/**
 * BackgroundGrid: Decorative grid background component
 * 
 * @param children - Optional content to render in the middle-right grid cell
 */
export const BackgroundGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="absolute inset-0 z-0 grid grid-cols-8">
        {/* First column: single border-right divider */}
        <div className="border-border-secondary h-full border-r" />
        {/* Columns 2-4: 3-column span with internal grid */}
        <div className="border-border-secondary col-span-3 grid h-full grid-cols-2 lg:border-r">
            <div className="border-border-secondary h-full border-r" />
        </div>
        {/* Columns 5-7: 3-column span with internal grid and optional children */}
        <div className="border-border-secondary col-span-3 grid h-full grid-cols-2 relative lg:border-r">
            {/* Children positioned absolutely within this grid cell */}
            {children}
            <div className="border-border-secondary h-full border-r" />
        </div>
        {/* Last column: single border-right divider */}
        <div className="border-border-secondary h-full border-r" />
    </div>
);
