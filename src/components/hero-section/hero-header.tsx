/**
 * Hero Header Component
 * 
 * Top section of the hero containing the main headline and visual element.
 * Creates a 3-column grid on desktop with title on left (2 cols) and
 * animated visual on right (1 col).
 * 
 * Desktop Layout (250px height, 3-column grid):
 * - Left: Hero title (2 columns) with right border
 * - Right: Hero visual with button (1 column)
 * 
 * Mobile Layout:
 * - Stacked vertically
 * - Full-width title with bottom border
 * - Full-width visual below
 */

import React from 'react';
import { HeroTitle } from './hero-title';
import { HeroVisual } from './hero-visual';

/**
 * HeroHeader: Main title and visual section
 * 
 * Displays the primary headline with decode animation
 * alongside an animated gold noise visual and CTA button
 */
export const HeroHeader: React.FC = () => (
    // 3-column grid layout on desktop
    <div className="grid lg:h-[250px] lg:grid-cols-3">
        {/* Title area: 2 columns on desktop */}
        <div className="col-span-2 flex h-full items-center px-6 border-border max-lg:border-b max-lg:py-6 lg:border-r">
            {/* Animated headline \"Own NFTS, Tokens, or rwa Assets\" */}
            <HeroTitle />
        </div>
        {/* Visual area: 1 column with gold noise animation and button */}
        <HeroVisual />
    </div>
);
