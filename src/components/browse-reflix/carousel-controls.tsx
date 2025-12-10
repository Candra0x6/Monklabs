/**
 * Carousel Controls Component
 * 
 * Container for carousel navigation buttons. Manages the next/previous button states
 * based on carousel position (first/last item). Uses ChevronRight icon rotated
 * to create both forward and backward navigation buttons.
 */

import React from 'react';
import ChevronRight from '../icons/chevron-right';
import { CarouselButton } from './carousel-button';

/**
 * Props for carousel control buttons
 */
interface CarouselControlsProps {
    /** Handler to navigate to next item */
    onNext: () => void;
    /** Handler to navigate to previous item */
    onPrev: () => void;
    /** Flag indicating carousel is at first item */
    isFirst: boolean;
    /** Flag indicating carousel is at last item */
    isLast: boolean;
}

/**
 * CarouselControls: Control buttons container
 * 
 * @param onNext - Next button click handler
 * @param onPrev - Previous button click handler
 * @param isFirst - Disables previous button at start
 * @param isLast - Disables next button at end
 */
export const CarouselControls: React.FC<CarouselControlsProps> = ({ onNext, onPrev, isFirst, isLast }) => (
    <div className="z-10 flex items-center -space-x-px max-lg:px-6 lg:-translate-x-[calc(50%+0.5px)]">
        {/* Next button: disabled when at last item */}
        <CarouselButton onClick={onNext} disabled={isLast}>
            <ChevronRight />
        </CarouselButton>
        {/* Previous button: rotated ChevronRight, disabled when at first item */}
        <CarouselButton onClick={onPrev} disabled={isFirst}>
            <ChevronRight className='rotate-180' />
        </CarouselButton>
    </div>
);
