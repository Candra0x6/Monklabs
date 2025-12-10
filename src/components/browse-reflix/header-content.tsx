/**
 * Header Content Component
 * 
 * Main header section for the browse area containing:
 * - "FOR SELLER" badge
 * - "DON'T MISS OUT" headline
 * - "BROWSE RAFLUX" call-to-action button
 * - "CHAINLINK VRF" technical annotation
 * 
 * Desktop Layout:
 * - Left side: Title and badge in bordered container
 * - Right side: CTA button and tech annotation (vertically spaced)
 * - Uses max-width container (462px) with negative margin
 * 
 * Mobile Layout:
 * - Stacked vertically
 * - Full width content
 */

import React from 'react';
import ArrowRight from '../icons/arrow-right';
import { Button } from '../ui/button';

/**
 * HeaderContent: Main browse section header with title and CTA
 */
export const HeaderContent: React.FC = () => (
    <div className="relative z-10 col-span-6 flex h-full w-full items-center justify-between py-14.5 max-lg:flex-col max-lg:gap-6">
        {/* Left side: Title section with badge and headline */}
        <div className="flex w-full gap-6 justify-between max-lg:flex-col lg:gap-34">
            {/* Title container with border */}
            <div className="border-border-secondary bg-background w-full space-y-11 border px-8 py-6 lg:-ml-5 lg:max-w-[462px]">
                {/* "FOR SELLER" badge with primary color accent */}
                <div className="bg-primary/10 text-primary flex w-fit items-center justify-center gap-2 text-nowrap px-4.5 py-1.4 text-lg font-semibold uppercase">
                    FOR SELELR
                </div>
                {/* Main headline "DON'T MISS OUT" */}
                <h1 className='text-pumpkin-100 text-4xl font-semibold uppercase leading-[120%] lg:text-[80px]'>
                    DON&apos;T MISS OUT
                </h1>
            </div>
        </div>
        {/* Right side: CTA button and tech annotation */}
        <div className="flex flex-col justify-between max-lg:w-full max-lg:gap-2 lg:h-full lg:items-end">
            {/* "BROWSE RAFLUX" call-to-action button with arrow icon */}
            <Button variant="ghost" className="group hover:bg-transparent hover:text-primary text-primary flex cursor-pointer items-center gap-4 text-nowrap px-0 text-2xl font-medium uppercase">
                <span>BROWSE RAFLUX</span>
                <div className="border-border-secondary bg-background -mr-1 border p-2">
                    <ArrowRight />
                </div>
            </Button>
            {/* "CHAINLINK VRF" technical annotation (desktop only) */}
            <p className='text-muted mr-2 text-right text-sm uppercase max-lg:hidden lg:max-w-[101px]'>
                {'// CHAINLINK VRF'}
            </p>
        </div>
    </div>
);
