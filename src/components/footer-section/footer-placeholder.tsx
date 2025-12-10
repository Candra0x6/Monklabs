/**
 * Footer Placeholder Component
 * 
 * Container for the animated gold noise background visual effect.
 * Serves as a decorative element at the bottom of the footer.
 * 
 * Sizing:
 * - Base height: 210px (h-52.5)
 * - 2XL (large screens): 400px height (2xl:h-100)
 * - Full width responsive
 * 
 * Contains the GoldNoiseVisual component which renders
 * an animated WebGL-based noise pattern with mouse interaction.
 */

import React from 'react';
import { GoldNoiseVisual } from '../animations/gold-noise';

/**
 * FooterPlaceholder: Animated background visual container
 * 
 * Houses the gold noise animation for visual interest
 */
export const FooterPlaceholder: React.FC = () => (
    <div className="relative h-52.5 w-full 2xl:h-100">
        {/* Inner container for animation component */}
        <div className="relative h-full w-full">
            {/* Animated gold noise background with mouse interaction */}
            <GoldNoiseVisual />
        </div>
    </div>
);
