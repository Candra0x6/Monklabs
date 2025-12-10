/**
 * Navbar Layout Component
 * 
 * Client-side layout wrapper that combines navbar, main content area, and footer.
 * Serves as the main layout structure for the entire application.
 * 
 * Component Structure:
 * 1. Navbar - Fixed header with logo and CTA button
 * 2. MainContent - Main scrollable content area for page content
 * 3. MainFooter - Footer section with marquee and additional info
 * 
 * This component uses React.Fragment (<>) to avoid adding wrapper divs,
 * allowing clean semantic HTML structure.
 */

'use client';
import React from 'react';
import { Navbar } from './navbar';
import { MainContent } from './main-content';
import { MainFooter } from '../main-footer';

/**
 * NavbarLayoutProps: Component props interface
 */
interface NavbarLayoutProps {
    /** Child components/pages to render in the main content area */
    children: React.ReactNode;
}

/**
 * NavbarLayout: Main application layout wrapper
 * 
 * Provides the overall page structure with fixed navbar,
 * scrollable content area, and footer.
 */
export const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => (
    <>
        {/* Fixed header with logo and navigation */}
        <Navbar />
        {/* Main scrollable content area */}
        <MainContent>
            {children}
        </MainContent>
        {/* Footer with marquee and social info */}
        <MainFooter />
    </>
);
