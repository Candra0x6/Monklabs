/**
 * Top Section Component
 * 
 * Upper portion of the browse section containing the background grid and
 * header content. Displays the section title and primary call-to-action.
 * 
 * Desktop Layout (8 columns):
 * - Background grid spanning full width
 * - Empty spacer column
 * - Header content spanning 6 columns
 * 
 * Mobile Layout:
 * - Vertical stack with padding
 * - Full width content
 */

import React from 'react';
import { BackgroundGrid } from './background-grid';
import { HeaderContent } from './header-content';

/**
 * TopSection: Upper section with header and background grid
 */
export const TopSection: React.FC = () => (
    <div className="relative grid gap-6 max-lg:px-6 lg:h-[580px] lg:grid-cols-8">
        {/* Background grid with overlay text annotation */}
        <BackgroundGrid>
            {/* "EVM COMPATIBLE (BASE)" text annotation - desktop only */}
            <p className='text-muted absolute left-5 top-1/4 text-right text-sm uppercase max-lg:hidden lg:max-w-[145px] '>
                {'// EVM COMPATIBLE (BASE)'}
            </p>
        </BackgroundGrid>
        {/* Empty spacer column for grid alignment (desktop only) */}
        <div className="h-full w-full max-lg:hidden" />
        {/* Main header content with title and CTA button */}
        <HeaderContent />
    </div>
);
