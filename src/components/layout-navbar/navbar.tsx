/**
 * Navbar Component
 * 
 * Fixed header navigation bar displayed at the top of all pages.
 * Contains logo on left and primary call-to-action button on right.
 * 
 * Layout:
 * - Fixed positioning at top (z-index 100)
 * - Height: 60px with flexbox centering
 * - Logo: 83x26px responsive image (lazy loaded)
 * - Button: \"Launch App\" primary action
 * 
 * Styling:
 * - Background: dark theme (bg-background)
 * - Border: bottom border with brand color
 * - Padding: 8px base, 24px on desktop (lg:px-6)
 * - Responsive text color transitions
 */

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

/**
 * Navbar: Fixed header navigation
 * 
 * Always-visible navigation bar with branding and primary action.
 * Stays fixed at top while content scrolls below.
 */
export const Navbar: React.FC = () => (
    // Fixed header with flex layout
    <nav className="bg-background border-border fixed z-100 flex h-[60px] w-full items-center justify-between border-b p-2 text-white transition-colors duration-300 lg:px-6">
        {/* Left section: Logo */}
        <div className="flex items-center cursor-pointer">
            {/* SVG logo with responsive sizing and lazy loading */}
            <Image loading="lazy" src="/logo.svg" alt="Logo" width={83} height={26} />
        </div>

        {/* Right section: Primary action button */}
        <div className="flex items-center">
            {/* \"Launch App\" call-to-action button */}
            <Button className="nav-item block">Launch App</Button>
        </div>
    </nav>
);
