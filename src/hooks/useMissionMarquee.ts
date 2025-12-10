import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMissionMarquee = () => {
    const marqueeRef1 = useRef<HTMLDivElement>(null);
    const marqueeRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Forward marquee animation
            if (marqueeRef1.current) {
                gsap.to(marqueeRef1.current, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 20,
                    ease: 'none',
                });
            }

            // Backward marquee animation
            if (marqueeRef2.current) {
                gsap.fromTo(
                    marqueeRef2.current,
                    { xPercent: -50 },
                    {
                        xPercent: 0,
                        repeat: -1,
                        duration: 20,
                        ease: 'none',
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return { marqueeRef1, marqueeRef2 };
};
