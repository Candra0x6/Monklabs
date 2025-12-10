/**
 * Carousel Button Component
 * 
 * Navigation button for carousel controls. Can be used for both next and previous
 * navigation by changing the child icon's rotation or orientation.
 * 
 * Features:
 * - Hover state with primary border color
 * - Disabled state with reduced opacity and disabled cursor
 * - Smooth transitions between states
 * - Consistent sizing (150px height x 60px width)
 */

import React from 'react';

/**
 * Props for carousel navigation buttons
 */
interface CarouselButtonProps {
    /** Click handler for navigation action */
    onClick: () => void;
    /** Whether the button should be disabled (boundary reached) */
    disabled: boolean;
    /** Icon or content to display in the button */
    children: React.ReactNode;
}

/**
 * CarouselButton: Navigation button component
 * 
 * @param onClick - Handler for navigation
 * @param disabled - Disables button and styling when true
 * @param children - Icon content
 */
export const CarouselButton: React.FC<CarouselButtonProps> = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className='bg-background hover:border-primary border-border-secondary group flex h-[150px] w-[60px] cursor-pointer items-center justify-center border-x border-y transition-all duration-300 hover:z-10 disabled:cursor-not-allowed disabled:opacity-50'
        aria-label="Carousel navigation button"
    >
        {/* Icon content passed as children */}
        {children}
    </button>
);
