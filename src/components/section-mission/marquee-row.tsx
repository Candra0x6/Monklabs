import React from 'react';
import { InfoBox } from './info-box';
import { PartnerCard } from './partner-card';
import { NFT_DATA, TOKEN_DATA } from '@/lib/contants/constants';

export const MarqueeRow: React.FC<{
    marqueeRef: React.RefObject<HTMLDivElement | null>;
    position: 'top' | 'bottom';
    partnerData: typeof NFT_DATA | typeof TOKEN_DATA;
    borderColor: string;
}> = ({ marqueeRef, position, partnerData, borderColor }) => {
    const isTop = position === 'top';
    const borderClasses = isTop
        ? 'border-t border-border-secondary'
        : 'border-t border-border-secondary';

    return (
        <div className={`grid items-center lg:grid-cols-6 ${borderClasses}`}>
            {isTop && <InfoBox content='RAFLUX SUPPORT ALL NFT AND TOKEN' />}

            <div className="col-span-5 flex h-full w-full items-center overflow-hidden border-y border-border-secondary bg-background-secondary">
                <div className="w-full">
                    <div className="flex w-fit gap-4 py-4" ref={marqueeRef}>
                        {[...partnerData, ...partnerData, ...partnerData, ...partnerData].map((p, i) => (
                            <PartnerCard key={i} partner={p} borderColor={borderColor} />
                        ))}
                    </div>
                </div>
            </div>

            {!isTop && <InfoBox content="ON BASE CHAIN" />}
        </div>
    );
};
