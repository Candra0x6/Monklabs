/**
 * Carousel Track Component
 * 
 * Container that holds the carousel cards and manages scrolling behavior.
 * The track itself remains hidden (no visible scrollbar) while the internal
 * div can scroll horizontally with gap spacing between cards.
 * 
 * Features:
 * - Hidden scrollbar (webkit, firefox, IE styles)
 * - 580px fixed height for card visibility
 * - Gap spacing between carousel cards
 * - Horizontal scrolling container
 */

import React from 'react';
import { CarouselCard } from '../carousel-card';

/**
 * Props for carousel track component
 */
interface CarouselTrackProps {
    /** React ref to the scrollable container for programmatic control */
    carouselRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * CarouselTrack: Scrollable carousel container
 * 
 * @param carouselRef - Reference for controlling scroll position
 */
export const CarouselTrack: React.FC<CarouselTrackProps> = ({ carouselRef }) => (
    // Outer container with left border and overflow hidden
    <div className="border-border-secondary relative w-full overflow-hidden border-l">
        {/* Inner scrollable track with hidden scrollbar */}
        <div ref={carouselRef} className="flex h-[580px] overflow-y-hidden max-lg:gap-6 max-lg:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Three carousel cards - scroll horizontally */}
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </div>
    </div>
);
