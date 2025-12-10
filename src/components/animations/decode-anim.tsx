import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface HackerDecodeProps {
    children: string;
    trigger: number;
    className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const DecodeAnim: React.FC<HackerDecodeProps> = ({ children, trigger, className }) => {
    const text = children;
    const [displayText, setDisplayText] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reset
        const duration = 2; // seconds

        // Using a simple object to tween 'progress'
        const tweenObj = { value: 0 };

        // Kill any existing animations on the object if needed (though scoped here)
        gsap.killTweensOf(tweenObj);

        gsap.to(tweenObj, {
            value: 1,
            duration: duration,
            ease: "power2.inOut",
            onUpdate: () => {
                const progress = tweenObj.value;
                // Calculate how many characters should be "real" based on progress
                // We delay the start of the real reveal slightly
                const revealProgress = Math.max(0, (progress - 0.2) / 0.8);
                const revealedCount = Math.floor(revealProgress * text.length);

                let result = "";
                for (let i = 0; i < text.length; i++) {
                    if (i < revealedCount) {
                        result += text[i];
                    } else {
                        // Random character
                        // Preserve spaces
                        if (text[i] === ' ') {
                            result += ' ';
                        } else {
                            result += CHARS[Math.floor(Math.random() * CHARS.length)];
                        }
                    }
                }
                setDisplayText(result);
            },
            onComplete: () => {
                setDisplayText(text); // Ensure clean final state
            }
        });

        return () => {
            gsap.killTweensOf(tweenObj);
        };
    }, [text, trigger]);

    return (
        <div ref={containerRef} className={className}>
            {displayText}
        </div>
    );
};

export default DecodeAnim;