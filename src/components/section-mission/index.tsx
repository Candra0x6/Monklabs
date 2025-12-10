"use client"
import React from 'react';
import { BackgroundGrid } from './background-grid';
import { SectionHeader } from './section-header';
import { MarqueeSection } from './marquee-section';

export const SectionMission: React.FC = () => {
    return (
        <section className='relative border-t border-border-secondary bg-background-secondary'>
            <BackgroundGrid />

            <div className="relative z-10 flex h-full w-full flex-col py-10 lg:justify-end">
                <SectionHeader />
                <MarqueeSection />
            </div>
        </section>
    );
};
