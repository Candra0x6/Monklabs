import React from 'react';
import Image from 'next/image';
import { CornerMarkers } from '../ui/corner-markers/corner-markers';
import { NFT_DATA, TOKEN_DATA } from '@/lib/contants/constants';

export const PartnerCard: React.FC<{
    partner: (typeof NFT_DATA)[0] | (typeof TOKEN_DATA)[0];
    borderColor: string;
}> = ({ partner, borderColor }) => (
    <div className={`flex h-[180px] w-[210px] shrink-0 flex-col items-center justify-center gap-4 border-r border-${borderColor}`}>
        <div className="relative flex h-[108px] w-[108px] items-center justify-center">
            <CornerMarkers />
            <Image
                alt={partner.name}
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                className="h-20 w-20 rounded object-cover p-2"
                src={partner.img}
                style={{ color: 'transparent' }}
            />
        </div>
        <span className="text-[14px] font-mono text-muted-foreground transition-colors group-hover:text-foreground">
            {partner.name}
        </span>
    </div>
);
