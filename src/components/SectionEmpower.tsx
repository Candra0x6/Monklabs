"use client"
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const SectionEmpower: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    markers: true,
                }
            });

            tl.to(".empower-item", {
                x: 0,
                ease: "none"
            }, 0);

            gsap.to(".floating-shape", {
                y: -30,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-background relative z-10 h-[300vh]">
            <div className="bg-black absolute bottom-full left-25 h-12 w-[550px] rotate-180" style={{ clipPath: 'polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)' }}></div>
            <div className="h-[80px] w-full bg-black"></div>
            <div className="sticky top-[58px] flex h-[calc(100vh-60px)] flex-col">
                <div className="border-border grid h-[79px] w-full border-t lg:grid-cols-8 bg-black">
                    <div className="max-lg:hidden" />
                    <div className="border-border-secondary col-span-6 flex items-center justify-between gap-4 border-x px-6">
                        <Badge variant="secondary" className="">OUR MISSION</Badge>
                        <Badge variant="secondary" className="">OUR MISSION</Badge>
                    </div>
                </div>
                <div className="border-border relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-y px-6 lg:px-12">
                    <Image src="/star-top.svg" alt="hero" loading="lazy" width={300} height={300} decoding="async" data-nimg="1" className="object-contain absolute top-0 right-0 h-auto w-[200px]"  style={{ color: 'transparent' }} />
                    <Image src="/star-bottom.svg" alt="hero" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="object-contain absolute bottom-0 left-0 h-auto w-[250px]" style={{ color: 'transparent' }} />
                    <div className="w-full max-w-[1440px]">
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-orange-100 uppercase lg:text-[72px]">
                            <div className="empower-item" style={{ transform: 'none' }}>
                                <div className="overflow-hidden">
                                    <span className="">EMPOWER</span></div></div>
                            <div className="empower-item" style={{ transform: 'translateX(-620px)' }}>
                                <div className="overflow-hidden">
                                    <span className="">COMMUNITIES</span></div></div></div>
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-orange-100 uppercase lg:text-[72px]">
                            <div className="empower-item" style={{ transform: 'translateX(880px)' }}>
                                <div className="overflow-hidden"><span className="">A</span></div></div>

                            <div className="empower-item" style={{ transform: 'translateX(445px)' }}><div className="overflow-hidden"><span className="">F</span><span className="">A</span><span className="">I</span><span className="">R</span></div></div>
                            <div className="empower-item" style={{ transform: 'none' }}>
                                <div className="overflow-hidden"><span className="">CHANCE</span>
                                </div></div></div>
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-orange-100 uppercase lg:text-[72px]">
                            <div className="empower-item" style={{ transform: 'none' }}>
                                <div className="overflow-hidden"><span className="">TO</span></div></div>
                            <div className="empower-item" style={{ transform: 'translateX(-255px)' }}><div className="overflow-hidden"><span className="">WIN</span><span className="">,</span></div>
                            </div><div className="empower-item" style={{ transform: 'translateX(-515px)' }}><div className="overflow-hidden"><span className="">OWN</span><span className="">,</span></div></div>
                            <div className="empower-item" style={{ transform: 'translateX(-780px)' }}>
                                <div className="overflow-hidden"><span className="">AND</span>
                                </div></div></div><div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-orange-100 uppercase lg:text-[72px]">
                            <div className="empower-item" style={{ transform: 'translateX(880px)' }}><div className="overflow-hidden"><span className="">G</span><span className="">R</span><span className="">O</span><span className="">W</span></div></div>
                            <div className="empower-item" style={{ transform: 'none' }}>
                                <div className="overflow-hidden">
                                    <span className="">TOGETHER</span>
                                    </div></div></div></div></div>
            </div>

            {/* Floating Shapes */}
        </div>
    );
};
