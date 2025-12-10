import React from 'react';

export const MarqueeContent: React.FC = () => (
    <div className='flex shrink-0 flex-row justify-around gap-[--gap]'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className='text-[80px] font-medium uppercase text-text-marquee'>
                RAFLUX
            </span>
        ))}
    </div>
);
