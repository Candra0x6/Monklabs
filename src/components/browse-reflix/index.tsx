/**
 * Browse Reflix Component
 * 
 * Main container for the browse/carousel section of the application.
 * Manages carousel state and coordinates between top and bottom sections.
 * 
 * Layout Structure:
 * - TopSection: Header with background grid and title content
 * - BottomSection: Carousel controls and card track
 * - FooterDecoration: Decorative footer element
 * 
 * The component uses the useBrowseCarousel hook to manage carousel navigation
 * with 3 visible items and boundary state detection.
 */

"use client";
import React from 'react';
import { useBrowseCarousel } from '@/hooks/useBrowseCarousel';
import { TopSection } from './top-section';
import { BottomSection } from './bottom-section';
import { FooterDecoration } from './footer-decoration';

/**
 * BrowseReflix: Main carousel section component
 * 
 * Orchestrates the layout and passes carousel state management
 * to child components for proper synchronization.
 */
export const BrowseReflix: React.FC = () => {
    /**
     * Carousel state from custom hook
     * - carouselRef: DOM reference to scroll container
     * - handleNext/Prev: Navigation functions
     * - isFirst/Last: Boolean flags for boundary states
     */
    const { carouselRef, handleNext, handlePrev, isFirst, isLast } = useBrowseCarousel(3);

    return (
        <section className='bg-background-secondary'>
            {/* Main grid container with top and bottom borders */}
            <div className="border-border-secondary grid border-y">
                {/* Top section with background grid and header content */}
                <TopSection />
                {/* Bottom section with carousel controls and card track */}
                <BottomSection
                    carouselRef={carouselRef}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    isFirst={isFirst}
                    isLast={isLast}
                />
            </div>
            {/* Decorative footer element (desktop only) */}
            <FooterDecoration />
        </section>
    );
};
