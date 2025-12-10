import React from 'react';
import TypeAnim from '../animations/type-anim';

export const HeaderDescription: React.FC = () => (
    <p className="max-lg:order-1 max-md:hidden text-sm uppercase text-muted lg:absolute lg:top-6 lg:right-6 lg:max-w-[200px] lg:text-right lg:mr-2">
        <TypeAnim>
            Let&apos;s To Be
            The Next Generation
            Of NFT Raffles
        </TypeAnim>
    </p>
);
