import { useLayoutEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for managing GSAP hero section animations
 * Handles multiple staggered animations for different elements
 */
export const useHeroAnimations = (containerRef: RefObject<HTMLDivElement | null>) => {
    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Navigation items animation
            gsap.from('.nav-item', {
                y: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            });

            // Hero title words animation
            gsap.from('.hero-word', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 0.2,
            });

            // Side boxes animation
            gsap.from('.side-box', {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5,
            });

            // Asset cards animation
            gsap.from('.asset-card-hero', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                delay: 0.8,
            });

            // Character animation for bottom text
            gsap.from('.bottom-text-char', {
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.out(2)',
                delay: 1.2,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
};
