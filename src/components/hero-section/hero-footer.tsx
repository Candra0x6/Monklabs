/**
 * Hero Footer Component
 * 
 * Bottom section of hero header displaying tagline and pricing information.
 * Uses a 5-column grid layout with text on left (2 cols) and pricing on right (3 cols).
 * 
 * Layout (5-column grid):
 * - Left (2 cols): \"Try Your Luck Today\" tagline with right border
 * - Right (3 cols): Pricing section with typewriter animation
 * 
 * Purpose:
 * - Motivational tagline encouraging user action
 * - Display starting price point ($10) with animated effect
 */

import React from 'react';
import { HeroPricing } from './hero-pricing';

/**
 * HeroFooter: Tagline and pricing section
 * 
 * Displays motivational message alongside animated pricing information
 * to encourage user engagement
 */
export const HeroFooter: React.FC = () => (
    // 5-column grid layout
    <div className="grid h-full grid-cols-5">
        {/* Left section: Tagline (2 columns) */}
        <div className="col-span-2 h-full border-r border-border px-6 pt-10">
            {/* Motivational text encouraging participation */}
            <div className="text-right text-sm font-medium text-muted">Try Your Luck Today</div>
        </div>
        {/* Right section: Pricing with typewriter animation (3 columns) */}
        <HeroPricing />
    </div>
);
