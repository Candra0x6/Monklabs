/**
 * Carousel Card Component
 * 
 * A complete NFT/auction card that displays within the carousel.
 * Features a countdown timer, progress bar, NFT image and details, and a bid button.
 * 
 * Structure:
 * - CardHeader: Container with countdown timer and progress bar (clipped polygon shape)
 * - Main Content: NFT image and information
 * - BidButton: Call-to-action for placing bids
 * 
 * Responsive Design:
 * - Mobile: Full viewport width minus padding (calc(100vw-48px))
 * - Desktop: Fixed 380px width with minimum width constraint
 */

"use client"
import React from 'react';
import { useCountdown } from './use-countdown';
import { CountdownTimer } from './countdown-timer';
import { ProgressBar } from './progress-bar';
import { CardHeader } from './card-header';
import { NFTImage, NFTInfo } from './nft-content';
import { BidButton } from './bid-button';

/**
 * Polygon clip-path for the card header
 * Creates a diagonal bottom-left corner effect (33px offset)
 * giving the header a modern, geometric appearance
 */
const CLIP_PATH_VALUE = `polygon(
    0% 0%, 
    100% 0%, 
    100% 0%, 
    100% 0%, 
    100% 0%, 
    100% 0%,    
    100% 100%, 
    33px 100%, 
    0% 40px
  )`;

/**
 * CarouselCard: Main carousel item component
 * 
 * Displays an NFT with live auction countdown and bid functionality
 */
export const CarouselCard: React.FC = () => {
    /** Countdown state from custom hook (updates every second) */
    const timeLeft = useCountdown();

    return (
        <div className="flex h-full w-[calc(100vw-48px)] flex-col border border-t-0 border-l-0 border-border-secondary lg:w-[380px] lg:min-w-[380px]">
            {/* Card header with countdown and progress bar */}
            <CardHeader clipPathValue={CLIP_PATH_VALUE}>
                {/* Countdown timer showing days, hours, minutes, seconds */}
                <CountdownTimer timeLeft={timeLeft} />
                {/* Visual progress bar for auction */}
                <ProgressBar />
            </CardHeader>
            {/* Card body with NFT content and bid button */}
            <div className="bg-background flex h-full flex-col justify-between items-center px-7 py-5 border-l border-border-secondary">
                {/* NFT image and details */}
                <div className="space-y-4">
                    <NFTImage />
                    <NFTInfo />
                </div>
                {/* Place bid button */}
                <BidButton />
            </div>
        </div>
    );
};
