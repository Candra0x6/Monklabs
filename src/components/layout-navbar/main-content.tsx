/**
 * Main Content Component
 * 
 * Main semantic container for page content.
 * Provides full viewport height and width with horizontal overflow clipping.
 * 
 * Layout:
 * - Semantic <main> HTML element for accessibility
 * - Minimum height: 100vh (full viewport)
 * - Full width with horizontal overflow hidden
 * - Prevents horizontal scrolling artifacts
 * 
 * Used to:
 * - Wrap all page-specific content
 * - Sit between fixed navbar and footer
 * - Provide consistent scrolling container
 */

import React from 'react';

/**
 * MainContentProps: Component props interface
 */
interface MainContentProps {
    /** Child components/pages to render as main content */
    children: React.ReactNode;
}

/**
 * MainContent: Main scrollable content container
 * 
 * Wraps all page content in a semantic main element
 * with consistent sizing and overflow handling.
 */
export const MainContent: React.FC<MainContentProps> = ({ children }) => (
    // Main semantic container - full viewport height
    <main className="min-h-screen w-full overflow-x-clip">
        {/* Page-specific content */}
        {children}
    </main>
);
