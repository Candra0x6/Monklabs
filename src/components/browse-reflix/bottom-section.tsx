/**
 * Bottom Section Component
 * 
 * Lower portion of the browse section containing carousel controls and
 * the carousel track with cards. Manages the carousel navigation interface.
 * 
 * Desktop Layout (8 columns):
 * - Background grid spanning full width
 * - Empty column for alignment
 * - Carousel controls and track spanning 7 columns
 * 
 * Mobile Layout:
 * - Full width with vertical stacking
 * - Centered content
 */

import React from 'react';
import { BackgroundGrid } from './background-grid';
import { CarouselControls } from './carousel-controls';
import { CarouselTrack } from './carousel-track';

/**
 * Props for bottom section component
 */
interface BottomSectionProps {
    /** Reference to carousel scroll container */
    carouselRef: React.RefObject<HTMLDivElement | null>;
    /** Handler for next carousel item */
    onNext: () => void;
    /** Handler for previous carousel item */
    onPrev: () => void;
    /** Flag for carousel at first item */
    isFirst: boolean;
    /** Flag for carousel at last item */
    isLast: boolean;
}

/**
 * BottomSection: Carousel controls and track container
 */
export const BottomSection: React.FC<BottomSectionProps> = ({ carouselRef, onNext, onPrev, isFirst, isLast }) => (
    <div className="border-border-secondary relative grid overflow-hidden border-t max-lg:w-full max-lg:py-6 lg:h-[580px] lg:grid-cols-8">
        {/* Background grid decoration */}
        <BackgroundGrid />
        {/* Empty spacer column for grid alignment */}
        <div />
        {/* Carousel controls and track container */}
        <div className="relative z-10 col-span-7 flex w-full gap-6 max-lg:flex-col max-lg:justify-center lg:items-center">
            {/* Next/Previous navigation buttons */}
            <CarouselControls onNext={onNext} onPrev={onPrev} isFirst={isFirst} isLast={isLast} />
            {/* Scrollable carousel cards */}
            <CarouselTrack carouselRef={carouselRef} />
        </div>
    </div>
);
