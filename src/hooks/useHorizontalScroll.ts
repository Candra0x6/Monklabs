import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for horizontal scroll animations using GSAP ScrollTrigger
 * @param sectionRef - Reference to the section element that triggers the scroll
 * @param contentRef - Reference to the content container that moves horizontally
 */
export const useHorizontalScroll = (
    sectionRef: RefObject<HTMLElement | null>,
    contentRef: RefObject<HTMLDivElement | null>
) => {
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 1024px)', () => {
            const section = sectionRef.current;
            const content = contentRef.current;

            if (section && content) {
                // Ensure we start from 0
                gsap.set(content, { x: 0 });
                
                // Optimization
                gsap.set(content, { willChange: 'transform' });

                const getScrollAmount = () => -(content.scrollWidth - window.innerWidth);

                const tl = gsap.to(content, {
                    x: getScrollAmount,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });

                // Cleanup optimization on complete
                tl.eventCallback('onComplete', () => {
                    gsap.set(content, { willChange: 'auto' });
                });
            }
        });

        return () => mm.revert();
    }, [sectionRef, contentRef]);
};
