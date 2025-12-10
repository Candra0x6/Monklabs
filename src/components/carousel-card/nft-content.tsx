/**
 * NFT Content Components
 * 
 * Two sub-components for displaying NFT information:
 * - NFTImage: Shows the NFT artwork with lazy loading
 * - NFTInfo: Displays NFT name, sale status, and end date
 */

import React from 'react';
import Image from 'next/image';
import Clock from '../icons/clock';

/**
 * NFTImage: NFT artwork display
 * 
 * Renders the NFT image with:
 * - Lazy loading for performance
 * - Square aspect ratio (321x321px)
 * - Object-fit contain to preserve artwork aspect
 */
export const NFTImage: React.FC = () => (
    <Image
        alt="Pudgy Penguins"
        loading="lazy"
        width="500"
        height="500"
        className="aspect-square h-[321px] w-[321px] object-contain"
        src="/nft-assets/pudgy_penguins.svg"
    />
);

/**
 * NFTInfo: NFT metadata display
 * 
 * Shows:
 * - NFT name (e.g., "Puddy Pinguin")
 * - Sale status with clock icon
 * - Sale end date
 */
export const NFTInfo: React.FC = () => (
    <div className="space-y-2">
        {/* NFT name */}
        <h2 className='font-geist text-xl font-medium text-white'>Puddy Pinguin</h2>
        {/* Sale status and date */}
        <div className="font-geist text-text-secondary flex items-center gap-2 text-sm">
            {/* Clock icon indicating time-based event */}
            <Clock />
            {/* Status text */}
            <span className='text-muted'>Sale Ended</span>
            {/* Specific date */}
            <p className='text-mono text-white text-xs font-semibold font-mono'>21 June 2025</p>
        </div>
    </div>
);
