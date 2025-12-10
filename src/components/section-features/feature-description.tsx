import React from 'react';

export const FeatureDescription: React.FC = () => (
    <div className="relative h-fit w-full max-w-[380px] shrink-0 max-lg:space-y-4 lg:max-w-[695px]">
        <p className='text-sm text-muted lg:absolute lg:right-4 lg:bottom-4 lg:max-w-[143px] lg:text-right'>
            {'// CHAINLINK'} <br /> {'VRF'}
        </p>
        <p className='text-4xl font-semibold uppercase text-pumpkin-100 lg:text-[72px]'>
            Trusted Randomness
        </p>
    </div>
);
