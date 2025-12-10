import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useFooterMarquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const width = marqueeRef.current?.scrollWidth || 0;

            gsap.to(marqueeRef.current, {
                x: -width / 2,
                duration: 40,
                ease: "none",
                repeat: -1,
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return { marqueeRef, wrapperRef };
};
