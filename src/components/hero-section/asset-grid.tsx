/**
 * Asset Grid Component
 * 
 * Responsive grid displaying interactive NFT asset cards.
 * Each card has a spinning animation on hover that cycles through available assets.
 * 
 * Layout (Responsive grid):
 * - Mobile (grid-cols-2): 2 columns
 * - Tablet (md:grid-cols-3): 3 columns
 * - Desktop (lg:grid-cols-4): 4 columns
 * - Large (xl:grid-cols-5): 5 columns
 * 
 * Grid Behavior:
 * - Uses utility class to hide some items on smaller screens
 * - Aligns items to bottom (items-end)
 * - Full borders on top and bottom
 * 
 * Cards:
 * - Interactive asset cards with hover spin animation
 * - Displays NFT image, name, and metadata
 * - Shows bid button and countdown timer
 */

import React from 'react';
import { AssetCard } from '@/components/hero-section/asset-card';
import { ASSETS } from '@/lib/contants/constants';
import { getAssetItemHiddenClass } from '@/lib/utils/asset-grid-utils';

/**
 * AssetGrid: Interactive grid of NFT asset cards
 * 
 * Maps through available assets and renders them in a responsive grid.
 * Each card is individually selectable and animates on interaction.
 */
export const AssetGrid: React.FC = () => (
    // Responsive grid with responsive column count
    <div className="relative grid items-end border-y border-border grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* Map over all assets to create grid items */}
        {ASSETS.map((asset, index) => (
            <AssetGridItem key={asset.id} asset={asset} index={index} />
        ))}
    </div>
);

/**
 * AssetGridItem: Wrapper for individual asset card with responsive visibility
 * 
 * @param asset - The asset data object containing image, name, and metadata
 * @param index - Position in the grid, used to determine visibility rules
 */
const AssetGridItem: React.FC<{ asset: typeof ASSETS[0]; index: number }> = ({ asset, index }) => {
    // Get CSS classes to hide item on smaller breakpoints
    const hideClassnames = getAssetItemHiddenClass(index, ASSETS.length);
    return (
        // Wrapper with responsive visibility rules
        <div className={`${hideClassnames} w-full h-full`}>
            {/* Individual interactive asset card */}
            <AssetCard asset={asset} index={index} />
        </div>
    );
};

