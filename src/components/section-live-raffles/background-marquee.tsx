import React from 'react';
import { MarqueeContent } from './marquee-content';

interface BackgroundMarqueeProps {
    marqueeRef: React.RefObject<HTMLDivElement | null>;
}

export const BackgroundMarquee: React.FC<BackgroundMarqueeProps> = ({ marqueeRef }) => (
    <div className="absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 overflow-hidden">
        <div ref={marqueeRef} className='group flex w-max flex-row p-0 gap-[--gap] [--duration:40s] [--gap:1rem]'>
            <MarqueeContent />
            <MarqueeContent />
        </div>
    </div>
);
