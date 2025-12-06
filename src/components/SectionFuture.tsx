"use client"
import React, { useEffect, useRef } from 'react';
import { CornerMarkers } from './CornerMarkers';
import { Badge } from '@/components/ui/badge';
import { PARTNERS } from '@/lib/contants/constants';
import Image from 'next/image';
import gsap from 'gsap';

export const SectionFuture: React.FC = () => {
    const marqueeRef1 = useRef<HTMLDivElement>(null);
    const marqueeRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (marqueeRef1.current) {
                gsap.to(marqueeRef1.current, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 20,
                    ease: "none",
                });
            }
            if (marqueeRef2.current) {
                gsap.fromTo(marqueeRef2.current,
                    { xPercent: -50 },
                    {
                        xPercent: 0,
                        repeat: -1,
                        duration: 20,
                        ease: "none",
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className='relative border-t border-border-2 bg-background'>
            <div className="grid grid-cols-6 absolute inset-0">
                <div className='h-full border-r border-border-2' />
                <div className='h-full border-r border-border-2 col-span-2' />
                <div className='h-full border-r border-border-2 col-span-2' />
                <div className='h-full border-r border-border-2' />
            </div>

            <div className="relative z-10 flex flex-col h-full w-full lg:justify-end py-10 ">
                <div className="lg:grid-cols-6 grid lg:h-[436px]">
                    <div className="max-lg:hidden" />
                    <div className="col-span-4 relative p-6 flex max-lg:flex-col gap-3 lg:items-center h-full">

                        <div className="relative  p-12 flex items-end">
                            <div className="space-y-3 lg:-translate-x-1/2">

                                <div className="p-px w-fit bg-border" style={{ clipPath: 'polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)', opacity: 1, transform: 'none' }}><div className="flex bg-background items-center justify-center h-[83px] w-[341px]" style={{ clipPath: 'polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)' }}><h1 className="text-pumpkin-100 lg:text-5xl text-4xl font-semibold uppercase"><div className="overflow-hidden"><span className="">T</span><span className="">H</span><span className="">E</span><span className="w-3"> </span><span className="">F</span><span className="">U</span><span className="">T</span><span className="">U</span><span className="">R</span><span className="">E</span></div></h1></div></div>
                                <div className=" lg:text-6xl text-4xl font-semibold uppercase">NFT Marketplace</div>
                            </div>
                        </div>
                        <p className="text-sm max-lg:order-1 lg:absolute top-6 right-6 uppercase text-text-tertiary lg:max-w-[200px] lg:text-right lg:mr-2">
                            Let&apos;s To Be <br />
                            The Next Generation <br />
                            Of NFT Raffles
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="grid lg:grid-cols-6 items-center">
                        <div className="flex justify-end">
                            <div className="h-[225px] w-[225px] border bg-background border-b-0 border-base-border-2 flex items-center justify-center p-4">
                                <p className='text-right text-sm font-medium text-text-tertiary max-w-[148px]'>
                                    REFLIX SUPPORT ALL NFT
                                </p>
                            </div>

                        </div>
                        <div className="col-span-5 bg-background border-t border-base-border-2 flex h-full items-center w-full overflow-hidden">
                            <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
                                <div className="flex w-fit gap-4" ref={marqueeRef1}>
                                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
                                        <div key={i} className="flex w-[210px] h-[180px] items-center justify-center border-x border-border flex-col gap-4 shrink-0">
                                            <div className="h-[108px] w-[108px] relative flex items-center justify-center">
                                            <CornerMarkers />
                                                <Image alt="Pudgy penguins" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="object-cover w-20 h-20 p-2 rounded"  src={p.img} style={{color: 'transparent'}} />

                                            </div>
                                            <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">{p.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center border-t border-border-2">
                        
                        <div className="col-span-5 bg-background border-b border-r border-border-2 flex h-full items-center w-full overflow-hidden">
                            <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
                                <div className="flex w-fit gap-4" ref={marqueeRef2}>
                                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
                                        <div key={i} className="flex w-[210px] h-[180px] items-center justify-center border-x border-base-placeholder flex-col gap-4 shrink-0">
                                            <div className="h-[108px] w-[108px] relative flex items-center justify-center">
                                            <CornerMarkers />
                                                <Image alt="Pudgy penguins" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="object-cover w-20 h-20 p-2 rounded"  src={p.img} style={{color: 'transparent'}} />

                                            </div>
                                            <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">{p.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="h-[225px] w-[225px] border-r bg-background border-b border-border-2 flex items-center justify-center p-4">
                                <p className='text-right text-sm font-medium text-text-tertiary max-w-[148px]'>
                                    REFLIX SUPPORT ALL NFT
                                </p>
                            </div>
                                    
                        </div>
                    </div>
                </div>
                {/* MARQUEE */}

            </div>
        </section>
    );
};
