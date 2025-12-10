import React from 'react';
import { CornerBorder } from './corner-border';
import { CharacterSpacing } from './character-spacing';
import TypeAnim from '../animations/type-anim';

export const HeaderContent: React.FC = () => (
    <div className="relative flex items-end p-12">
        <div className="space-y-3 lg:-translate-x-1/2">
            <CornerBorder>
                <h1 className="text-4xl font-semibold uppercase text-pumpkin-100 lg:text-[48px]">
                    <CharacterSpacing text="THE FUTURE" />
                </h1>
            </CornerBorder>
            <h1 className="text-4xl font-semibold uppercase lg:text-[48px]">
                <TypeAnim>

                    NFT Marketplace
                </TypeAnim>
            </h1>
        </div>
    </div>
);
