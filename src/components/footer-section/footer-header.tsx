/**
 * Footer Header Component
 * 
 * Main headline section of the footer with a large call-to-action button.
 * Features a decorative vector graphic and dashed circle accent on desktop.
 * 
 * Elements:
 * - Large "DECENTRELIZE RAFFLES FOR DIGITAL ASSETS" headline
 * - "START RAFFLING NOW" button with responsive sizing
 * - Decorative vector line and concentric circles (desktop only)
 * 
 * Desktop Layout:
 * - Absolute positioned decorative circle on right
 * - Button aligned to right
 * - Line vector visible
 * 
 * Mobile Layout:
 * - Vertical stack
 * - Full-width button
 * - No decorative elements
 */

import React from 'react';
import { Button } from '../ui/button';
import LineVector from '../icons/line-vector';

/**
 * FooterHeader: Main footer headline and CTA section
 * 
 * Displays the primary brand message and prominent call-to-action
 */
export const FooterHeader: React.FC = () => (
    <div className="relative flex flex-col justify-end px-6 py-10.5 max-lg:gap-6 lg:pl-15 2xl:w-fit">
        {/* Main headline: "DECENTRELIZE RAFFLES FOR DIGITAL ASSETS" */}
        <h1 className='text-pumpkin-100 text-[64px] font-semibold uppercase lg:text-[64px]'>
            <span>DECENTRELIZE RAFFLES FOR DIGITAL ASSETS</span>
        </h1>
        {/* Button and decorative elements container */}
        <div className="-top-12 -bottom-15 flex h-12 items-center lg:absolute lg:right-0 lg:justify-center">
            {/* Decorative vector graphic with concentric circles (desktop only) */}
            <div className="relative max-lg:hidden">
                {/* Dashed outer circle */}
                <div className="border-primary absolute -bottom-12 -left-6 flex size-13 items-center justify-center rounded-full border border-dashed">
                    {/* Inner solid circle */}
                    <div className="border-primary flex size-9 items-center justify-center rounded-full border">
                        {/* Center dot */}
                        <div className='bg-primary size-4 rounded-full' />
                    </div>
                </div>
                {/* Line vector decoration */}
                <LineVector />
            </div>
            {/* "START RAFFLING NOW" call-to-action button */}
            <Button className='w-full lg:w-auto lg:px-16 mr-5'>
                <div className="flex items-center gap-2 text-sm">
                    START RAFFLING NOW
                </div>
            </Button>
        </div>
    </div>
);
