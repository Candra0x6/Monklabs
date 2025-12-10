"use client"
import React, { useRef } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { BackgroundGrid } from './background-grid';
import { ScrollContent } from './scroll-content';

export const SectionSellers: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useHorizontalScroll(sectionRef, contentRef);

    return (
        <section ref={sectionRef} className='relative border-b border-border-secondary bg-background-secondary lg:h-[300vh]'>
            <BackgroundGrid />

            <div className="flex w-full items-center gap-2 overflow-hidden py-20 lg:sticky lg:top-0 lg:h-screen lg:py-100" style={{ perspective: '1000px' }}>
                <div ref={contentRef}>
                    <ScrollContent />
                </div>
            </div>
        </section>
    );
};
