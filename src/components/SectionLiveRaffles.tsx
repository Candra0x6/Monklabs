"use client"
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LIVE_RAFFLES } from '@/lib/contants/constants';
import { ArrowUpRight, Timer, Ticket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TechCard from './TechCard';

const cardData = [
    {
        front_title: 'NFT Tickets You Control',
        front_description: 'Experience the future of event access with NFT tickets that put you in control. Say goodbye to scalpers and hello to secure, verifiable ownership of your event entry.',
        back_top_text: '// NFT TICKETS',
        back_bottom_text: '// NFT TICKETS',
        hoverRotateZ: -8,
        hoverTranslateX: 130,
        hoverTranslateY: 0,
        image: '/plus-retro.svg'
    },
    {
        front_title: 'More Tickets, Higher Odds',
        front_description: 'Each ticket is an entry. The more you hold, the better your chance to win.',
        back_top_text: '// GET HIGHER ODDS',
        back_bottom_text: '// GET HIGHER ODDS',
        hoverRotateZ: 7,
        hoverTranslateX: 0,
        hoverTranslateY: -15,
        image: '/girg-retro.svg'
    },
    {
        front_title: 'Fairness Guaranteed by Chainlink VRF',
        front_description: 'Even if you buy many tickets, the winner is always chosen randomly and provably fair using Chainlink VRF.',
        back_top_text: '// EVM COMPATIBLE (BASE)',
        back_bottom_text: '// EVM COMPATIBLE (BASE)',
        hoverRotateZ: 10,
        hoverTranslateX: -160,
        hoverTranslateY: 30,
        image: '/ring-retro.svg',

    },
]

gsap.registerPlugin(ScrollTrigger);

export const SectionLiveRaffles: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

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

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            tl.set(".tech-card-item", { willChange: "transform" })
            .to(".tech-card-item", {
                x: 0,
                y: 0,
                rotation: 0,
                ease: "power1.inOut",
                duration: 0.5
            })
            .to(".tech-card-item", {
                rotateY: 180,
                ease: "power1.inOut",
                duration: 1
            })
            .set(".tech-card-item", { willChange: "auto" });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className='h-[250vh] w-full bg-base-dark-secondary'>
            <div className="flex max-lg:flex-col max-lg:relative gap-6 lg:gap-8 max-lg:p-6 w-full lg:sticky top-0 items-center justify-center lg:h-screen perspective-[1000px]">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                {
                    cardData.map((card, index) => (
                        <div
                            key={index}
                            className="tech-card-item transform-3d z-10"
                            style={{
                                transform: `translate(${card.hoverTranslateX}px, ${card.hoverTranslateY}px) rotate(${card.hoverRotateZ}deg)`
                            }}
                        >
                            <TechCard
                                frontDescription={card.front_description}
                                frontTitle={card.front_title}
                                backTopText={card.back_top_text}
                                backBottomText={card.back_bottom_text}
                                backImage={card.image}
                                hoverRotateZ={0}
                                hoverTranslateX={0}
                                hoverTranslateY={0}
                            />
                        </div>
                    ))
                }
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-0 overflow-hidden">
                    <div ref={marqueeRef} className='group flex [gap:var(--gap)] w-max [--duration:40s] [--gap:1rem] flex-row p-0'>
                        <div className='flex shrink-0 justify-around [gap:var(--gap)] flex-row'>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <span key={i} className='text-muted text-[80px] uppercase font-medium'>
                                    RAFLUX
                                </span>
                            ))}
                        </div>
                        <div className='flex shrink-0 justify-around [gap:var(--gap)] flex-row'>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <span key={i} className='text-muted text-[80px] uppercase font-medium'>
                                    RAFLUX
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
