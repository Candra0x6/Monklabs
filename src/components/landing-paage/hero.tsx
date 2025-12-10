"use client"
import React, { useRef } from 'react';

import { AssetCard } from '@/components/AssetCard';
import { ASSETS } from '@/lib/contants/constants';
import { Button } from '@/components/ui/button';
import Marquee from '../Marquee';
import { SectionEmpower } from '../SectionEmpower';
import DecodeAnim from '../animations/decode-anim';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';
import { GoldNoiseVisual } from '../animations/gold-noise';
import { Canvas } from '@react-three/fiber';

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useHeroAnimations(containerRef);

    return (
        <section className='relative h-[400vh] bg-background'>
            <div className="sticky top-[58px] z-0 h-screen">
                <TopMarquee />

                <div ref={containerRef} className="grid h-full overflow-hidden lg:grid-cols-8" style={{ fontFamily: 'var(--font-kode-mono)' }}>
                    <div className="max-lg:hidden" />
                    <div className="col-span-6 overflow-hidden border-border lg:border-x">
                        <HeroHeader />
                        <AssetGridSection />
                        <HeroFooter />
                    </div>
                </div>
            </div>
            <SectionEmpower />
        </section>
    );
};

const TopMarquee: React.FC = () => (
    <div className="border-y border-base-placeholder -mt-px flex h-10.5 w-screen items-center justify-center">
        <Marquee />
    </div>
);

const HeroHeader: React.FC = () => (
    <div className="grid lg:h-[250px] lg:grid-cols-3">
        <div className="col-span-2 flex h-full items-center px-6 border-border max-lg:border-b max-lg:py-6 lg:border-r">
            <h1 className="text-4xl font-semibold uppercase text-pumpkin-100 lg:max-w-[600px] lg:text-[48px]">
                <DecodeAnim className="block" trigger={1}>Own NFTS, Tokens,</DecodeAnim>
                <DecodeAnim className="block" trigger={1}>or  rwa Assets</DecodeAnim>
            </h1>
        </div>
        <HeroImageCard />
    </div>
);

const HeroImageCard: React.FC = () => (
    <div className="grid h-[250px] grid-rows-2">
        <div className="relative border-b border-base-placeholder max-lg:w-screen">
            <div className="absolute inset-0 z-0">

                <GoldNoiseVisual />
            </div>
        </div>
        <div className="flex w-full items-center justify-center px-5">
            <Button className="w-full gap-2 group font-semibold">
                Buy Tickets Now
            </Button>
        </div>
    </div>
);

const AssetGridSection: React.FC = () => (
    <div className="relative grid items-end border-y border-border grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {ASSETS.map((asset, index) => (
            <AssetGridItem key={asset.id} asset={asset} index={index} />
        ))}
    </div>
);

const AssetGridItem: React.FC<{ asset: typeof ASSETS[0]; index: number }> = ({ asset, index }) => {
    const hideClassnames = getAssetItemHiddenClass(index);
    return (
        <div className={`${hideClassnames} w-full h-full`}>
            <AssetCard asset={asset} index={index} />
        </div>
    );
};

const HeroFooter: React.FC = () => (
    <div className="grid h-full grid-cols-5">
        <div className="col-span-2 h-full border-r border-border px-6 pt-[40px]">
            <div className="text-right text-sm font-medium text-muted">Try Your Luck Today</div>
        </div>
        <PricingSection />
    </div>
);

const PricingSection: React.FC = () => (
    <div className="col-span-3 overflow-hidden">
        <div className="border-b border-border w-full px-6 py-7 lg:px-14">
            <p className="ml-auto max-w-[500px] text-right text-[24px] font-medium uppercase leading-[120%] text-pumpkin-100 lg:text-5xl">
                STARTING AS LOW AS $10!            </p>
        </div>
    </div>
);


/**
 * Determines which responsive classes to hide an asset grid item
 */
function getAssetItemHiddenClass(index: number): string {
    if (index === 0 || index === ASSETS.length - 1) return '';
    if (index === 1) return 'max-md:hidden';
    if (index === 3) return 'max-lg:hidden';
    return 'max-xl:hidden';
}
