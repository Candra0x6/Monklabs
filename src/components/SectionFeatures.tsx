/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURES } from '@/lib/contants/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export const SectionFeatures: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (marqueeRef.current) {
                gsap.to(marqueeRef.current, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 20,
                    ease: "none",
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className='h-[280px] flex items-center justify-center border-b border-base-border-2 overflow-hidden'>
            <div className="w-full">
                <div className="flex w-fit gap-[200px]" ref={marqueeRef}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="lg:max-w-[695px] max-w-[380px] w-full max-lg:space-y-4 h-fit relative shrink-0">
                            <p className='lg:absolute top-4 right-4 lg:max-w-[143px] text-text-tertiary lg:text-right text-sm'>
                                // EVM COMPATIBLE(BASE)
                            </p>
                            <p className='font-semibold uppercase text-pumpkin-100 lg:text-[72px] text-4xl'>
                                Fair. transparent. fun
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
