/**
 * Hero Title Component
 * 
 * Main headline of the hero section with decode animation effect.
 * Text \"hacker decodes\" character by character when triggered.
 * 
 * Text Content:
 * - Line 1: \"Own NFTS, Tokens,\"
 * - Line 2: \"or rwa Assets\"
 * 
 * Styling:
 * - Mobile: 36px (text-4xl) uppercase
 * - Desktop: 48px (lg:text-[48px]) uppercase with 600px max-width
 * - Color: Orange/pumpkin theme (text-pumpkin-100)
 */

import React from 'react';
import DecodeAnim from '../animations/decode-anim';

/**
 * HeroTitle: Main animated headline
 * 
 * Displays two lines of text with character-by-character decode animation.
 * Each line animates independently when triggered (trigger={1})
 */
export const HeroTitle: React.FC = () => (
    // Main heading with uppercase orange text
    <h1 className="text-4xl font-semibold uppercase text-pumpkin-100 lg:max-w-[600px] lg:text-[48px]">
        {/* First line with decode animation effect */}
        <DecodeAnim className="block" trigger={1}>
            Own NFTS, Tokens,
        </DecodeAnim>
        {/* Second line with decode animation effect */}
        <DecodeAnim className="block" trigger={1}>
            or  rwa Assets
        </DecodeAnim>
    </h1>
);
