import React from 'react';
import { InfoColumn } from './info-column';
import { FeatureCard } from './feature-card';
import { HeroImageColumn } from './hero-image-column';

export const BuyerSection: React.FC = () => (
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
