"use client"
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Hexagon, Menu } from 'lucide-react';
import { AssetCard } from '@/components/AssetCard';
import { ASSETS } from '@/lib/contants/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Marquee from '../Marquee';
import { SectionEmpower } from '../SectionEmpower';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".nav-item", {
                y: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            gsap.from(".hero-word", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });

            gsap.from(".side-box", {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.5
            });

            gsap.from(".asset-card-hero", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
                delay: 0.8
            });

            gsap.from(".bottom-text-char", {
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "back.out(2)",
                delay: 1.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className='bg-background relative h-[400vh]'>
            <div className="sticky top-[58px] z-0 h-[100vh]">
                <div className="border-base-placeholder -mt-[1px] flex h-10.5 w-screen items-center justify-center border-y">

                    <Marquee />
                </div>


                <div ref={containerRef} className="grid h-full overflow-hidden lg:grid-cols-8" style={{ fontFamily: 'var(--font-kode-mono)' }}>

                    {/* --- Marquee --- */}
                    <div className="max-lg:hidden" />

                    <div className="border-border col-span-6 overflow-hidden lg:border-x">

                        <div className="grid lg:h-[250px] lg:grid-cols-3">
                            <div className="col-span-2 border-r border-border p-12 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03]"
                                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                                </div>

                                <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold leading-[0.9] tracking-tight uppercase z-10">
                                    <span className="block hero-word">Own NFTS,</span>
                                    <span className="block hero-word">Tokens,</span>
                                    <span className="block hero-word text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                        Or RWA Assets
                                    </span>
                                </h1>

                                <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-border/50" />
                            </div>

                            <div className=" grid h-[250px] grid-rows-2">
                                <div className="border-base-placeholder relative max-lg:w-screen border-b">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}>
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                                        <div className="absolute inset-0 bg-black/40" />
                                    </div>

                                    <div className="absolute bottom-4 left-4 z-10">
                                        <Badge variant="default" className="bg-black/80 backdrop-blur">Featured Pool</Badge>
                                    </div>
                                </div>

                                <div className="flex w-full items-center justify-center px-5">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-b border-r border-border" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-border" />

                                    <p className="text-muted-foreground font-mono text-xs mb-4 uppercase tracking-widest">Limited Time Offer</p>
                                    <Button className="w-full gap-2 group">
                                        Buy Tickets Now
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* --- Asset Grid Row --- */}
                        <div className=" grid h-[225px] grid-cols-2 border-y lg:grid-cols-5">
                            {ASSETS.map((asset) => (
                                <div key={asset.id} className="asset-card-hero">
                                    <AssetCard asset={asset} />
                                </div>
                            ))}
                        </div>

                        {/* --- Footer / Bottom Hero --- */}
                        <div className="grid h-full grid-cols-5">
                            <div className="border-border col-span-2 h-full border-r px-6 pt-[90px]">
                                <div className="text-muted-foreground font-mono text-sm mb-2">Try Your Luck Today</div>
                                <Separator className="mb-4" />
                                <div className="absolute top-10 left-10 w-20 h-20 border border-border rounded-full animate-[spin_10s_linear_infinite] opacity-20 border-dashed" />
                            </div>

                            <div className="col-span-3 overflow-hidden">
                                <div className="border-border w-full border-b px-6 py-7 lg:px-14">
                                    <p className="text-primary ml-auto max-w-[500px] text-right text-2xl leading-[120%] font-medium uppercase lg:text-5xl">
                                        <span>
                                            {"STARTING AS LOW AS $10!".split("").map((char, i) => (
                                                <span key={i} className="bottom-text-char inline-block">
                                                    {char === " " ? "\u00A0" : char}
                                                </span>
                                            ))}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
                <SectionEmpower />
            
        </section>

    );
};
