"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CornerMarkers } from './CornerMarkers';
import { NFT_DATA, TOKEN_DATA } from '@/lib/contants/constants';
import Image from 'next/image';

export const SectionFuture: React.FC = () => {
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

const BackgroundGrid: React.FC = () => (
    <div className="absolute inset-0 grid grid-cols-6">
        <div className='h-full border-r border-border-secondary' />
        <div className='col-span-2 h-full border-r border-border-secondary' />
        <div className='col-span-2 h-full border-r border-border-secondary' />
        <div className='h-full border-r border-border-secondary' />
    </div>
);

const SectionHeader: React.FC = () => (
    <div className="grid lg:h-[436px] lg:grid-cols-6">
        <div className="max-lg:hidden" />
        <div className="col-span-4 relative flex h-full max-lg:flex-col gap-3 p-6 lg:items-center">
            <HeaderContent />
            <HeaderDescription />
        </div>
    </div>
);

const HeaderContent: React.FC = () => (
    <div className="relative flex items-end p-12">
        <div className="space-y-3 lg:-translate-x-1/2">
            <CornerBorder>
                <h1 className="text-4xl font-semibold uppercase text-pumpkin-100 lg:text-[48px]">
                    <CharacterSpacing text="THE FUTURE" />
                </h1>
            </CornerBorder>
            <h1 className="text-4xl font-semibold uppercase lg:text-[48px]">
                NFT Marketplace
            </h1>
        </div>
    </div>
);

const HeaderDescription: React.FC = () => (
    <p className="max-lg:order-1 max-md:hidden text-sm uppercase text-muted lg:absolute lg:top-6 lg:right-6 lg:max-w-[200px] lg:text-right lg:mr-2">
        Let&apos;s To Be <br />
        The Next Generation <br />
        Of NFT Raffles
    </p>
);

const CornerBorder: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
        className="w-fit bg-border-secondary p-px"
        style={{
            clipPath: 'polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)',
        }}
    >
        <div
            className="flex h-[83px] w-[341px] items-center justify-center bg-background-secondary"
            style={{
                clipPath: 'polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)',
            }}
        >
            {children}
        </div>
    </div>
);

const CharacterSpacing: React.FC<{ text: string }> = ({ text }) => (
    <div className="overflow-hidden">
        {text.split('').map((char, i) => (
            <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
    </div>
);

const MarqueeSection: React.FC = () => {
    const marqueeRef1 = useRef<HTMLDivElement>(null);
    const marqueeRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Forward marquee animation
            if (marqueeRef1.current) {
                gsap.to(marqueeRef1.current, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 20,
                    ease: 'none',
                });
            }

            // Backward marquee animation
            if (marqueeRef2.current) {
                gsap.fromTo(
                    marqueeRef2.current,
                    { xPercent: -50 },
                    {
                        xPercent: 0,
                        repeat: -1,
                        duration: 20,
                        ease: 'none',
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative">
            <MarqueeRow
                marqueeRef={marqueeRef1}
                position="top"
                partnerData={NFT_DATA}
                borderColor="border-border-secondary"
            />
            <MarqueeRow
                marqueeRef={marqueeRef2}
                position="bottom"
                partnerData={TOKEN_DATA}
                borderColor="base-placeholder"
            />
        </div>
    );
};

const MarqueeRow: React.FC<{
    marqueeRef: React.RefObject<HTMLDivElement | null>;
    position: 'top' | 'bottom';
    partnerData: typeof NFT_DATA | typeof TOKEN_DATA;
    borderColor: string;
}> = ({ marqueeRef, position, partnerData, borderColor }) => {
    const isTop = position === 'top';
    const borderClasses = isTop
        ? 'border-t border-border-secondary'
        : 'border-t border-border-secondary';

    return (
        <div className={`grid items-center lg:grid-cols-6 ${borderClasses}`}>
            {isTop && <InfoBox content='RAFLUX SUPPORT ALL NFT AND TOKEN' />}

            <div className="col-span-5 flex h-full w-full items-center overflow-hidden border-y border-border-secondary bg-background-secondary">
                <div className="w-full">
                    <div className="flex w-fit gap-4 py-4" ref={marqueeRef}>
                        {[...partnerData, ...partnerData, ...partnerData, ...partnerData].map((p, i) => (
                            <PartnerCard key={i} partner={p} borderColor={borderColor} />
                        ))}
                    </div>
                </div>
            </div>

            {!isTop && <InfoBox content="ON BASE CHAIN" />}
        </div>
    );
};

const InfoBox: React.FC<{ content: string }> = ({ content }) => (
    <div className="flex h-[225px] max-w-[225px] items-center justify-center border border-border-secondary bg-background-secondary p-4">
        <p className='max-w-[148px] text-right text-sm font-medium text-muted'>
            {content}
        </p>
    </div>
);

const PartnerCard: React.FC<{ partner: (typeof NFT_DATA)[0] | (typeof TOKEN_DATA)[0]; borderColor: string }> = ({
    partner,
    borderColor,
}) => (
    <div className={`flex h-[180px] w-[210px] shrink-0 flex-col items-center justify-center gap-4  border-r border-${borderColor}`}>
        <div className="relative flex h-[108px] w-[108px] items-center justify-center">
            <CornerMarkers />
            <Image
                alt={partner.name}
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                className="h-20 w-20 rounded object-cover p-2"
                src={partner.img}
                style={{ color: 'transparent' }}
            />
        </div>
        <span className="text-[14px] font-mono text-muted-foreground transition-colors group-hover:text-foreground">
            {partner.name}
        </span>
    </div>
);
