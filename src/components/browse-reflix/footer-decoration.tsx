/**
 * Footer Decoration Component
 * 
 * Decorative footer element that creates a visual accent below the browse section.
 * Features an angled/skewed polygon shape that creates a dynamic visual transition.
 * Desktop only (hidden on mobile via max-lg:hidden).
 * 
 * The component uses a CSS clip-path polygon to create the angled shape:
 * - Left edge at 10% inset
 * - Right edge at 90% inset
 * - Creates a trapezoid effect pointing upward
 */

import React from 'react';

/**
 * FooterDecoration: Decorative footer element (desktop only)
 */
export const FooterDecoration: React.FC = () => (
    // Grid container with 8 columns (desktop only)
    <div className="grid h-[200px] grid-cols-8 max-lg:hidden">
        {/* Left column: 3-column span with right border */}
        <div className='border-border-secondary col-span-3 border-r' />
        {/* Center columns: 4-column span with decorative angled shape */}
        <div className='border-border-secondary relative col-span-4 flex items-center justify-center border-r'>
            {/* Angled polygon shape using clip-path for visual accent */}
            <div 
                className='bg-background-secondary absolute top-full h-12 w-[550px]' 
                style={{ clipPath: "polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)" }} 
            />
        </div>
    </div>
);
