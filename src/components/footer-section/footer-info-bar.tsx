/**
 * Footer Info Bar Component
 * 
 * Information section displaying copyright, tagline, and contact details.
 * Uses a 3-column grid layout with different responsive behavior.
 * 
 * Columns:
 * 1. Copyright and rights information
 * 2. Promotional tagline / slogan
 * 3. Contact information
 * 
 * Desktop Layout (3-column):
 * - 80px fixed height
 * - Horizontal borders between columns
 * - Center column bordered on both sides
 * 
 * Mobile Layout:
 * - Vertical stack
 * - Full-width sections with borders between them
 */

import React from 'react';

/**
 * FooterInfoBar: Footer information display section
 * 
 * Shows copyright, brand message, and contact details
 */
export const FooterInfoBar: React.FC = () => (
    <div className="border-border grid border-y lg:h-20 lg:grid-cols-3">
        {/* Column 1: Copyright and rights */}
        <div className="flex flex-col items-start justify-center gap-1.5 px-6 max-lg:py-4">
            {/* Copyright text with year */}
            <p className='text-primary text-sm uppercase'>
                <span>RAFLUX @2025. COPYRIGHT</span>
            </p>
            {/* Rights reserved text */}
            <p className='text-muted text-[10px] uppercase'>
                ALL RIGHT RESERVED
            </p>
        </div>
        {/* Column 2: Promotional tagline */}
        <div className="border-base-placeholder flex items-start px-6 max-lg:border-y max-lg:py-4 lg:items-center lg:justify-center lg:border-x">
            {/* Slogan with max width constraint */}
            <p className='max-w-[225px] text-xs font-medium uppercase lg:text-center text-white'>
                {'// Stop waiting months on traditional marketplaces'}
            </p>
        </div>
        {/* Column 3: Contact information */}
        <div className="flex flex-col items-start justify-center px-6 max-lg:py-4 lg:items-end">
            {/* Contact label */}
            <p className='text-muted text-sm uppercase'>
                CONTACT
            </p>
            {/* Email address */}
            <p className='text-muted text-[10px] uppercase'>
                HI@RAFLUX.ID
            </p>
        </div>
    </div>
);
