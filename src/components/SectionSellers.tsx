"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

export const SectionSellers: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useHorizontalScroll(sectionRef, contentRef);

    return (
        <section ref={sectionRef} className='relative border-b border-border-secondary bg-background-secondary lg:h-[300vh]'>
            <BackgroundGrid />

            <div className="flex w-full items-center gap-2 overflow-hidden py-20 lg:sticky lg:top-0 lg:h-screen lg:py-100" style={{ perspective: '1000px' }}>
                <div
                    ref={contentRef}
                    className="flex w-full flex-col gap-12 border-border-secondary max-lg:border-y lg:w-max lg:flex-row lg:gap-2 lg:border-y"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    <SellerSection />
                    <BuyerSection />
                </div>
            </div>
        </section>
    );
};

const BackgroundGrid: React.FC = () => (
    <div className="absolute inset-0 grid grid-cols-6">
        <div className="h-full border-r border-border-secondary" />
        <div className="col-span-2 h-full border-r border-border-secondary" />
        <div className="col-span-2 h-full border-r border-border-secondary" />
        <div className="h-full border-r border-border-secondary" />
    </div>
);

const SellerSection: React.FC = () => (
    <div className="flex bg-background-secondary max-lg:flex-col max-lg:border-y max-lg:border-border-secondary lg:h-[80vh] lg:gap-2">
        <div className='h-full w-0 bg-background-secondary lg:w-24' />

        <InfoColumn title="For Sellers">
            <FeatureCard
                title="SECURE ESCROW"
                description="Smart contracts ensure your assets are safely held until the raffle is complete, protecting both buyers and sellers."
                cornerPosition="left"
            />
            <FeatureCard
                title="INSTANT LIQUIDITY"
                description="Sell out your raffles in hours, not months. More buyers = faster sales, and quicker cash flow."
                cornerPosition="right"
                isLast
            />
        </InfoColumn>

        <HeroImageColumn
            imageSrc="/liquid.svg"
            imageAlt="More liquid than opensea"
            title="More liquid than opensea"
        />
    </div>
);

const BuyerSection: React.FC = () => (
    <div className="flex bg-background-secondary max-lg:flex-col max-lg:border-y max-lg:border-border-secondary lg:h-[80vh] lg:gap-2">
        <InfoColumn title="For Buyers">
            <FeatureCard
                title="LOW ENTERY COST"
                description="Buy tickets starting at $10 instead of paying $50K+ for premium NFTs"
                cornerPosition="left"
            />
            <FeatureCard
                title="FAIR CHANCES"
                description="Chainlink VRF ensures provably fair random selection"
                cornerPosition="right"
                isLast
            />
        </InfoColumn>

        <HeroImageColumn
            imageSrc="/ring.svg"
            imageAlt="Join instantly with USDC/USDT"
            title="Join instantly with USDC/USDT"
            isBuyer
        />

        <div className='h-full w-0 bg-background-secondary lg:w-24' />
    </div>
);

const InfoColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="relative flex w-full flex-col overflow-hidden border-x border-border-secondary bg-background-secondary lg:w-[628px]">
        <div className="p-6">
            <div className="flex w-fit items-center justify-center gap-2 text-nowrap bg-primary/10 px-4.5 py-1.4 text-lg font-semibold uppercase text-primary">
                <span>{title}</span>
            </div>
        </div>
        {children}
    </div>
);

const FeatureCard: React.FC<{
    title: string;
    description: string;
    cornerPosition: 'left' | 'right';
    isLast?: boolean;
}> = ({ title, description, cornerPosition, isLast }) => (
    <div className={`relative flex h-full flex-col gap-4 border-border-secondary p-6 max-lg:min-h-[300px] max-lg:justify-center ${isLast ? 'max-lg:border-b' : 'border-y'}`}>
        <h2 className='text-[32px] font-bold uppercase text-pumpkin-100 lg:text-right'>
            <span>{title}</span>
        </h2>
        <p className='font-medium text-muted lg:text-right'>
            {description}
        </p>
    </div>
);

const HeroImageColumn: React.FC<{
    imageSrc: string;
    imageAlt: string;
    title: string;
    isBuyer?: boolean;
}> = ({ imageSrc, imageAlt, title, isBuyer }) => (
    <div className="relative flex h-full w-full items-start justify-end border-x border-border-secondary bg-background p-8 max-lg:min-h-[300px] lg:w-[869px] lg:p-16">
        <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                loading='lazy'
                className={`h-full w-auto object-contain max-lg:object-cover ${isBuyer ? 'lg:h-fit lg:w-full' : ''}`}
            />
        </div>
        <h1 className='relative z-10 text-4xl font-bold uppercase text-primary max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-[488px] lg:text-right lg:text-[56px]'>
            {title}
        </h1>
    </div>
);
