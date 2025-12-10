"use client"
import React, { useRef } from 'react';
import { useMarqueeAnimations } from '@/hooks/useMarqueeAnimations';

export const SectionFeatures: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useMarqueeAnimations([marqueeRef], { duration: 20 });

    return (
        <section className='flex h-[280px] items-center justify-center overflow-hidden border-b border-border-secondary bg-background-secondary'>
            <div className="w-full">
                <div className="flex w-fit gap-[200px]" ref={marqueeRef}>
                    {[1, 2, 3, 4].map((i) => (
                        <>
                            <FeatureItem key={i} />
                            <div className="relative h-fit w-full max-w-[380px] shrink-0 max-lg:space-y-4 lg:max-w-[695px]">
                                <p className='text-sm text-muted lg:absolute lg:right-4  lg:bottom-4 lg:max-w-[143px] lg:text-right'>
                                    {'// CHAINLINK'} <br /> {'VRF'}
                                </p>
                                <p className='text-4xl font-semibold uppercase text-pumpkin-100 lg:text-[72px]'>
                                    Trusted
                                    Randomness
                                </p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureItem: React.FC = () => (

    <div className="relative h-fit w-full max-w-[380px] shrink-0 max-lg:space-y-4 lg:max-w-[695px]">
        <p className='text-sm text-muted lg:absolute lg:right-4 lg:top-4 lg:max-w-[143px] lg:text-right'>
            {'// EVM COMPATIBLE(BASE)'}
        </p>
        <p className='text-4xl font-semibold uppercase text-pumpkin-100 lg:text-[72px]'>
            Fair. transparent. fun
        </p>
    </div>


);
