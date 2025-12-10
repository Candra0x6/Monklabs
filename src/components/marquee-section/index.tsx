"use client"
import React from 'react';
import { MARQUEE_TEXTS } from '@/lib/contants/constants';
import { Marquee as MarqueeComponent } from '../ui/marquee';
import { MarqueeItem } from './marquee-item';

export const Marquee: React.FC = () => {
    const duplicatedTexts = [...MARQUEE_TEXTS, ...MARQUEE_TEXTS];

    return (
        <MarqueeComponent duration={60} className="border-base-placeholder -mt-px h-10.5 border-y z-20 gap-x-5">
            {duplicatedTexts.map((text, i) => (
                <MarqueeItem key={i} text={text} index={i} />
            ))}
        </MarqueeComponent>
    );
};
