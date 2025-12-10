/**
 * Hero Marquee Component
 * 
 * Scrolling ticker banner at the top of the hero section.
 * Displays promotional/informational messages continuously scrolling.
 * 
 * Layout:
 * - Fixed height: 42px (h-10.5)
 * - Full viewport width
 * - Centered content with top/bottom borders
 * - Muted color scheme for secondary importance
 * 
 * Purpose:
 * - Eye-catching promotional messaging
 * - Communicates key information passively
 * - Creates sense of motion and activity
 */

import React from 'react';
import { Marquee } from '../marquee-section';

/**
 * HeroMarquee: Scrolling promotional ticker
 * 
 * Displays continuously scrolling messages at the top of the hero
 * section for promotional or informational purposes
 */
export const HeroMarquee: React.FC = () => (
    // Bordered ticker container with flex centering
    <div className="border-y border-base-placeholder -mt-px flex h-10.5 w-screen items-center justify-center">
        {/* Marquee component with content from marquee-section */}
        <Marquee />
    </div>
);
