"use client"
import React, { useRef } from 'react';
import { useMarqueeAnimations } from '@/hooks/useMarqueeAnimations';
import { useTechCardAnimations } from '@/hooks/useTechCardAnimations';
import { BackgroundPattern } from './background-pattern';
import { TechCardWrapper, CardData } from './tech-card-wrapper';
import { BackgroundMarquee } from './background-marquee';

const CARD_DATA: CardData[] = [
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
];

export const SectionLiveRaffles: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useMarqueeAnimations([marqueeRef], { duration: 20 });
    useTechCardAnimations(sectionRef);

    return (
        <section ref={sectionRef} className='h-[250vh] w-full max-lg:h-auto'>
            <div className="perspective-[1000px] sticky top-0 flex w-full items-center justify-center gap-6 max-lg:relative max-lg:flex-col max-lg:p-6 lg:h-screen lg:gap-8">
                <BackgroundPattern />

                {CARD_DATA.map((card, index) => (
                    <TechCardWrapper key={index} card={card} />
                ))}

                <BackgroundMarquee marqueeRef={marqueeRef} />
            </div>
        </section>
    );
};
