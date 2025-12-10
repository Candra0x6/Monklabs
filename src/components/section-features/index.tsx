"use client"
import React, { useRef } from 'react';
import { useMarqueeAnimations } from '@/hooks/useMarqueeAnimations';
import { FeatureMarquee } from './feature-marquee';

export const SectionFeatures: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useMarqueeAnimations([marqueeRef], { duration: 20 });

    return (
        <section className='flex h-[280px] items-center justify-center overflow-hidden border-b border-border-secondary bg-background-secondary'>
            <div className="w-full">
                <div ref={marqueeRef}>
                    <FeatureMarquee />
                </div>
            </div>
        </section>
    );
};
