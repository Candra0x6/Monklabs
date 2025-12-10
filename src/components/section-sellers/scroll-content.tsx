import React from 'react';
import { SellerSection } from './seller-section';
import { BuyerSection } from './buyer-section';

export const ScrollContent: React.FC = () => (
    <div
        className="flex w-full flex-col gap-12 border-border-secondary max-lg:border-y lg:w-max lg:flex-row lg:gap-2 lg:border-y"
        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
    >
        <SellerSection />
        <BuyerSection />
    </div>
);
