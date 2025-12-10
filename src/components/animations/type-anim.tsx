/**
 * Typing Animation Component
 * 
 * Creates a typewriter effect where text is revealed character by character
 * with a blinking cursor at the end. This gives the appearance of the text
 * being typed out in real-time.
 * 
 * Features:
 * - Character-by-character reveal
 * - Randomized typing speed (6-10ms per character) for natural feel
 * - Blinking cursor during typing
 * - Cursor disappears when typing completes
 */

"use client"
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

/** Props for the TypeAnim component */
interface TypeAnimProps {
    /** The text content to type out */
    children: string;
    /** Optional CSS class for styling */
    className?: string;
}

/**
 * TypeAnim: Component for typewriter text animation effect
 * 
 * @param children - Text to be typed out
 * @param className - CSS classes for styling the component
 */
const TypeAnim: React.FC<TypeAnimProps> = ({ children, className }) => {
    const text = children;
    /** Currently displayed text during typing animation */
    const [displayed, setDisplayed] = useState('');
    /** Whether to show the blinking cursor */
    const [showCursor, setShowCursor] = useState(true);

    /**
     * Typing animation effect hook
     * Creates a GSAP timeline that reveals characters one at a time
     * Triggers when the text content changes
     */
    useEffect(() => {
        // Reset displayed text and cursor when text changes
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDisplayed('');
        setShowCursor(true);
        
        // Split text into individual characters
        const chars = text.split('');
        
        // Create GSAP timeline for character-by-character animation
        const tl = gsap.timeline({
            // Hide cursor when typing completes
            onComplete: () => setShowCursor(false)
        });

        // Add animation for each character with staggered timing
        chars.forEach((char) => {
            tl.to({}, {
                // Random duration between 6ms and 10ms for natural typing feel
                duration: gsap.utils.random(0.06, 0.01),
                onComplete: () => {
                    // Add character to displayed text
                    setDisplayed((prev) => prev + char);
                }
            });
        });

        // Cleanup: Kill timeline when component unmounts
        return () => {
            tl.kill();
        };
    }, [text]);

    return (
        <span className={className || ""}>
            {/* Animated text content */}
            {displayed}
            {/* Blinking cursor shown during typing, hidden when complete */}
            {showCursor && (
                <span 
                    className="inline-block w-3 h-6 ml-1 bg-white animate-pulse align-middle"
                    aria-hidden="true"
                />
            )}
        </span>
    );
};

export default TypeAnim;