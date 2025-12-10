/**
 * Hero Section Component
 * 
 * Main hero/landing section with animated elements and interactive asset grid.
 * Creates a tall scrollable section (400vh) that drives animations based on scroll position.
 * 
 * Structure:
 * - Sticky container at top with 100vh height
 * - Marquee ticker for promotional text
 * - Hero header with title and visual elements
 * - Interactive asset grid with hover animations
 * - Hero footer with pricing information
 * - SectionEmpower component below for additional content
 * 
 * Animations:
 * - useHeroAnimations hook manages scroll-driven animations
 * - Asset cards feature interactive spinning animations on hover
 * - Text animations include decode effect on title
 * 
 * Layout:
 * - Desktop: 8-column grid with 6-column main content area
 * - Mobile: Single column full-width layout
 */

"use client"
import React, { useRef } from 'react';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';
import { HeroMarquee } from './hero-marquee';
import { HeroHeader } from './hero-header';
import { AssetGrid } from './asset-grid';
import { HeroFooter } from './hero-footer';
import { SectionEmpower } from '../section-empower';

/**
 * Hero: Main landing section component
 * 
 * Orchestrates the entire hero section with:
 * - Tall viewport (400vh) for scroll-driven animations
 * - Sticky hero container that follows viewport
 * - Animated title, asset grid, and pricing info
 */
export const Hero: React.FC = () => {
    // Reference to container for scroll animation registration
    const containerRef = useRef<HTMLDivElement>(null);
    // Register scroll-based animations for title, assets, and other elements
    useHeroAnimations(containerRef);

    return (
        // Tall section providing scroll distance for animations
        <section className='relative h-[400vh] bg-background'>
            {/* Sticky viewport container - stays fixed while page scrolls */}
            <div className="sticky top-[58px] z-0 h-screen">
                {/* Promotional marquee ticker */}
                <HeroMarquee />

                {/* Main content grid with animation container reference */}
                <div ref={containerRef} className="grid h-full overflow-hidden lg:grid-cols-8" style={{ fontFamily: 'var(--font-kode-mono)' }}>
                    {/* Left border column (desktop only) */}
                    <div className="max-lg:hidden" />
                    {/* Content area spanning 6 columns */}
                    <div className="col-span-6 overflow-hidden border-border lg:border-x">
                        {/* Hero title with decode animation and visual section */}
                        <HeroHeader />
                        {/* Interactive NFT/asset card grid with hover spinning */}
                        <AssetGrid />
                        {/* Pricing information section */}
                        <HeroFooter />
                    </div>
                </div>
            </div>
            {/* Additional empowerment/features section below hero */}
            <SectionEmpower />
        </section>
    );
};
