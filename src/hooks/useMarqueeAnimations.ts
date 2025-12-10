import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

interface MarqueeConfig {
    forward?: boolean;
    backward?: boolean;
    duration?: number;
}

/**
 * Custom hook for managing GSAP marquee animations
 * Handles continuous scrolling animations for marquee elements
 */
export const useMarqueeAnimations = (
    refs: RefObject<HTMLDivElement | null>[],
    config: MarqueeConfig = {}
) => {
    const { forward = true, backward = false, duration = 20 } = config;

    useEffect(() => {
        const ctx = gsap.context(() => {
            refs.forEach((ref, index) => {
                if (!ref.current) return;

                if (backward && index === 1) {
                    // Reverse marquee animation
                    gsap.fromTo(
                        ref.current,
                        { xPercent: -50 },
                        {
                            xPercent: 0,
                            repeat: -1,
                            duration,
                            ease: 'none',
                        }
                    );
                } else if (forward && index === 0) {
                    // Forward marquee animation
                    gsap.to(ref.current, {
                        xPercent: -50,
                        repeat: -1,
                        duration,
                        ease: 'none',
                    });
                }
            });
        });

        return () => ctx.revert();
    }, [refs, forward, backward, duration]);
};
