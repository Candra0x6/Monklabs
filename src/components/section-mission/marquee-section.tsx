import React from 'react';
import { MarqueeRow } from './marquee-row';
import { NFT_DATA, TOKEN_DATA } from '@/lib/contants/constants';
import { useMissionMarquee } from '@/hooks/useMissionMarquee';

export const MarqueeSection: React.FC = () => {
    const { marqueeRef1, marqueeRef2 } = useMissionMarquee();

    return (
        <div className="relative">
            <MarqueeRow
                marqueeRef={marqueeRef1}
                position="top"
                partnerData={NFT_DATA}
                borderColor="border-border-secondary"
            />
            <MarqueeRow
                marqueeRef={marqueeRef2}
                position="bottom"
                partnerData={TOKEN_DATA}
                borderColor="base-placeholder"
            />
        </div>
    );
};
