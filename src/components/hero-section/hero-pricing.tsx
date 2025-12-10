/**
 * Hero Pricing Component
 * 
 * Pricing information section with typewriter animation effect.
 * Displays the minimum entry price point to emphasize accessibility.
 * 
 * Layout (3 columns in parent 5-column grid):
 * - Text right-aligned with 120% line height
 * - Border-bottom separator
 * - Responsive padding and font sizing
 * 
 * Styling:
 * - Mobile: 24px text
 * - Desktop: 5xl (48px) text
 * - Orange color (text-pumpkin-100) for emphasis
 * 
 * Animation:
 * - Typewriter effect reveals \"STARTING AS LOW AS $10!\" character by character
 * - Draws attention to affordable entry point
 */

import React from 'react';
import TypeAnim from '../animations/type-anim';

/**
 * HeroPricing: Animated pricing display
 * 
 * Shows the starting price point with typewriter animation
 * to emphasize the low barrier to entry
 */
export const HeroPricing: React.FC = () => (
    // 3-column section with overflow hidden for animation
    <div className="col-span-3 overflow-hidden">
        {/* Content container with bottom border */}
        <div className="border-b border-border w-full px-6 py-7 lg:px-14">
            {/* Pricing text with typewriter animation */}
            <p className="ml-auto max-w-[500px] text-right text-[24px] font-medium uppercase leading-[120%] text-pumpkin-100 lg:text-5xl">
                <TypeAnim>
                    STARTING AS LOW AS $10!
                </TypeAnim>
            </p>
        </div>
    </div>
);
