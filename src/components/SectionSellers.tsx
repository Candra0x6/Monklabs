"use client"
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const SectionSellers: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current && contentRef.current) {
                gsap.to(contentRef.current, {
                    x: () => -(contentRef.current!.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        // DUPLICATE
        <section ref={sectionRef} className='border-border-2 relative border-b lg:h-[300vh]'>
            <div className="absolute inset-0 grid grid-cols-6">
                <div className="border-border-2 h-full border-r" />
                <div className="border-border-2 h-full border-r col-span-2" />
                <div className="border-border-2 h-full border-r col-span-2" />
                <div className="border-border-2 h-full border-r" />
            </div>
            <div className="flex w-full items-center gap-2 py-20 lg:py-100 lg:sticky lg:top-0 lg:h-screen overflow-hidden">
                <div ref={contentRef} className="border-border-2 flex gap-12 max-lg:flex-col lg:gap-2 lg:border-y w-max">
                    <div className="max-lg:border-border-2 flex max-lg:flex-col max-lg:border-y lg:h-[80vh] lg:gap-2 bg-background">
                        <div className='h-full w-0 lg:w-[96px] bg-background' />
                        <div className="bg-background border-border-2 flex w-full flex-col overflow-hidden border-x lg:w-[628px]">
                            <div className="p-6">
                                <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                                    <span>For Sellers</span>
                                </div>
                            </div>
                            <div className="border-border-2 flex h-full flex-col gap-4 border-y p-6 max-lg:min-h-[300px] max-lg:justify-center">
                                <h2 className='text-pumpkin-100 text-[32px] font-bold uppercase lg:text-right'>
                                    <span>SECURE ESCROW</span>
                                </h2>
                                <p className='text-text-tertiary font-medium lg:text-right'>
                                    Smart contracts ensure your assets are safely held until the raffle is complete, protecting both buyers and sellers.
                                </p>
                            </div>
                            <div className="border-border-2 flex h-full flex-col gap-4 p-6 max-lg:min-h-[300px] max-lg:justify-center max-lg:border-b">
                                <h2 className='text-pumpkin-100 text-[32px] font-bold uppercase'>
                                    INSTANT LIQUIDITY
                                </h2>
                                <p className='text-text-tertiary font-medium'>
                                    Sell out your raffles in hours, not months. More buyers = faster sales, and quicker cash flow.
                                </p>
                            </div>
                        </div>
                        <div className="bg-background border-border-2 relative flex h-full w-full items-start justify-end border-x p-8 max-lg:min-h-[300px] lg:w-[869px] lg:p-16">
 <div className="absolute inset-0 opacity-[0.03]"
                                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                                </div>                            <div className="absolute z-10 bottom-0 left-0  h-full w-full flex items-end">

                                <Image src="/liquid.svg" alt="More liquid than opensea" width={600} height={400} loading='lazy' className="w-full h-full object-contain max-lg:object-cover" />
                            </div>                            <h1 className='text-primary relative z-10 text-4xl font-bold uppercase max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-[488px] lg:text-right lg:text-[56px]'>
                                More liquid than opensea
                            </h1>
                        </div>

                    </div>

                    <div className="max-lg:border-border-2 flex max-lg:flex-col max-lg:border-y lg:h-[80vh] lg:gap-2 bg-background">
                        <div className="bg-background border-border-2 flex w-full flex-col overflow-hidden border-x lg:w-[628px]">
                            <div className="p-6">
                                <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                                    <span>For Buyers</span>
                                </div>
                            </div>
                            <div className="border-border-2 flex h-full flex-col gap-4 border-y p-6 max-lg:min-h-[300px] max-lg:justify-center">
                                <h2 className='text-pumpkin-100 text-[32px] font-bold uppercase lg:text-right'>
                                    <span>LOW ENTRY COST</span>
                                </h2>
                                <p className='text-text-tertiary font-medium lg:text-right'>
                                    Buy tickets starting at $10 instead of paying $50K+ for premium NFTs                                </p>
                            </div>
                            <div className="border-border-2 flex h-full flex-col gap-4 p-6 max-lg:min-h-[300px] max-lg:justify-center max-lg:border-b">
                                <h2 className='text-pumpkin-100 text-[32px] font-bold uppercase'>
                                    FAIR CHANCES                                </h2>
                                <p className='text-text-tertiary font-medium'>
                                    Chainlink VRF ensures provably fair random selection                                </p>
                            </div>
                        </div>
                        <div className="bg-background border-border-2 relative flex h-full w-full items-start justify-end border-x p-8 max-lg:min-h-[300px] lg:w-[869px] lg:p-16">
 <div className="absolute inset-0 opacity-[0.03]"
                                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                                </div>                            <div className="absolute z-10 bottom-0 left-0  h-full w-full flex items-end">

                                <Image src="/ring.svg" alt="More liquid than opensea" width={600} height={400} loading='lazy' className="w-full h-fit object-contain max-lg:object-cover " />
                            </div>
                            <h1 className='text-primary relative z-10 text-4xl font-bold uppercase max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-[488px] lg:text-right lg:text-[56px]'>
                                Join instantly with USDC/USDT                            </h1>
                        </div>
                        <div className='h-full w-0 lg:w-[96px] bg-background' />


                    </div>

                </div>
            </div>
        </section>
    );
};
