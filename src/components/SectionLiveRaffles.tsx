"use client"
import React, { useRef } from 'react';
import TechCard from './TechCard';
import { useMarqueeAnimations } from '@/hooks/useMarqueeAnimations';
import { useTechCardAnimations } from '@/hooks/useTechCardAnimations';

const CARD_DATA = [
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

const BackgroundPattern: React.FC = () => (
    <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
    />
);

const TechCardWrapper: React.FC<{ card: typeof CARD_DATA[0] }> = ({ card }) => (
    <div
        className="tech-card-item transform-3d z-10 max-lg:transform-[rotateY(180deg)]!"
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
);

const BackgroundMarquee: React.FC<{ marqueeRef: React.RefObject<HTMLDivElement | null> }> = ({ marqueeRef }) => (
    <div className="absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 overflow-hidden">
        <div ref={marqueeRef} className='group flex w-max flex-row p-0 gap-[--gap] [--duration:40s] [--gap:1rem]'>
            <MarqueeContent />
            <MarqueeContent />
        </div>
    </div>
);

const MarqueeContent: React.FC = () => (
    <div className='flex shrink-0 flex-row justify-around gap-[--gap]'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className='text-[80px] font-medium uppercase text-text-marquee'>
                RAFLUX
            </span>
        ))}
    </div>
);
