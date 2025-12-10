/**
 * Bid Button Component
 * 
 * Call-to-action button for placing bids on NFT auctions.
 * Displays the action text and current bid amount with USDT icon.
 * 
 * Features:
 * - Shows "Place Bid" text
 * - Displays current bid amount (10 USDT)
 * - Includes USDT currency icon
 * - Full width button for card layout
 */

import React from 'react';
import { Button } from '../ui/button';
import UsdtIcon from '../icons/usdt-icon';

/**
 * BidButton: Call-to-action button for placing bids
 */
export const BidButton: React.FC = () => (
    <Button className='w-full'>
        <div className="text-pumpkin-300 flex items-center justify-between w-full gap-1 text-sm">
            {/* Button action text */}
            <span className='font-medium'>Place Bid</span>
            {/* Bid amount with USDT currency icon */}
            <div className="flex gap-x-1 items-center">
                <span className='text-sm text-orange-300'>10</span>
                <UsdtIcon className='text-orange-300' />
            </div>
        </div>
    </Button>
);
