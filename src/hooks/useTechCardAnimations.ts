import { useLayoutEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for managing tech card animations
 * Handles the card assembly and flip animation on scroll
 */
export const useTechCardAnimations = (sectionRef: RefObject<HTMLDivElement | null>) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                });

                tl.set('.tech-card-item', { willChange: 'transform' })
                    .to('.tech-card-item', {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        ease: 'power1.inOut',
                        duration: 0.5,
                    })
                    .to('.tech-card-item', {
                        rotateY: 180,
                        ease: 'power1.inOut',
                        duration: 1,
                    })
                    .set('.tech-card-item', { willChange: 'auto' });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [sectionRef]);
};
