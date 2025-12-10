import React from 'react';
import { InfoColumn } from './info-column';
import { FeatureCard } from './feature-card';
import { HeroImageColumn } from './hero-image-column';

export const SellerSection: React.FC = () => (
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
