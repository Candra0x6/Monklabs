/**
 * Decode Animation Component
 * 
 * Creates a "hacker decode" text animation effect where random characters
 * are gradually replaced with the actual text. This creates a dynamic,
 * tech-forward visual effect commonly seen in sci-fi interfaces.
 * 
 * The animation:
 * 1. Starts with random characters (A-Z)
 * 2. Progressively reveals the actual text
 * 3. Preserves spaces throughout the animation
 * 4. Takes approximately 2 seconds to complete
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/** Props for the DecodeAnim component */
interface HackerDecodeProps {
    /** The text content to animate */
    children: string;
    /** Trigger value to restart the animation when changed */
    trigger: number;
    /** Optional CSS class for styling */
    className?: string;
}

/** Character set used for random character generation during animation */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * DecodeAnim: Main component for hacker decode text animation
 * 
 * @param children - Text to animate
 * @param trigger - Value to trigger animation restart
 * @param className - CSS classes for styling
 */
const DecodeAnim: React.FC<HackerDecodeProps> = ({ children, trigger, className }) => {
    const text = children;
    /** Current displayed text state during animation */
    const [displayText, setDisplayText] = useState('');
    /** Reference to the container DOM element */
    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Animation effect hook
     * Triggers when text or trigger value changes
     * Creates a GSAP timeline that animates the character reveal
     */
    useEffect(() => {
        // Animation duration in seconds
        const duration = 2;

        // GSAP tween object to track animation progress from 0 to 1
        const tweenObj = { value: 0 };

        // Clean up any previous animations
        gsap.killTweensOf(tweenObj);

        // Animate progress from 0 to 1 over the duration
        gsap.to(tweenObj, {
            value: 1,
            duration: duration,
            ease: "power2.inOut", // Smooth easing curve
            onUpdate: () => {
                const progress = tweenObj.value;

                // Calculate reveal progress with delay
                // 0-0.2 of animation: random chars only
                // 0.2-1.0 of animation: progressive reveal
                const revealProgress = Math.max(0, (progress - 0.2) / 0.8);
                const revealedCount = Math.floor(revealProgress * text.length);

                // Build display string character by character
                let result = "";
                for (let i = 0; i < text.length; i++) {
                    if (i < revealedCount) {
                        // Character is revealed - show actual text
                        result += text[i];
                    } else {
                        // Character is not yet revealed - show random char or space
                        if (text[i] === ' ') {
                            // Preserve spaces throughout animation
                            result += ' ';
                        } else {
                            // Replace with random uppercase letter
                            result += CHARS[Math.floor(Math.random() * CHARS.length)];
                        }
                    }
                }
                setDisplayText(result);
            },
            onComplete: () => {
                // Ensure final state shows correct text
                setDisplayText(text);
            }
        });

        // Cleanup: Kill animation when component unmounts
        return () => {
            gsap.killTweensOf(tweenObj);
        };
    }, [text, trigger]);

    return (
        <div ref={containerRef} className={className}>
            {/* Display the animated text content */}
            {displayText}
        </div>
    );
};

export default DecodeAnim;