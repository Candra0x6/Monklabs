import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useBrowseCarousel = (totalItems: number) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < totalItems - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (carouselRef.current) {
            const card = carouselRef.current.children[0] as HTMLElement;
            if (card) {
                const containerStyle = window.getComputedStyle(carouselRef.current);
                const gap = parseFloat(containerStyle.gap) || 0;
                const itemWidth = card.offsetWidth;
                const moveAmount = itemWidth + gap;

                gsap.set(carouselRef.current, { willChange: "transform" });
                gsap.to(carouselRef.current, {
                    x: -currentIndex * moveAmount,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(carouselRef.current, { willChange: "auto" });
                    }
                });
            }
        }
    }, [currentIndex]);

    return {
        carouselRef,
        currentIndex,
        handleNext,
        handlePrev,
        isFirst: currentIndex === 0,
        isLast: currentIndex === totalItems - 1
    };
};
