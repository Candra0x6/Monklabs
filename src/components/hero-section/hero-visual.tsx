import React from 'react';
import { Button } from '@/components/ui/button';
import { GoldNoiseVisual } from '../animations/gold-noise';

export const HeroVisual: React.FC = () => (
    <div className="grid h-[250px] grid-rows-2">
        <div className="relative border-b border-base-placeholder max-lg:w-screen">
            <div className="absolute inset-0 z-0">
                <GoldNoiseVisual />
            </div>
        </div>
        <div className="flex w-full items-center justify-center px-5">
            <Button className="w-full gap-2 group font-semibold">
                Buy Tickets Now
            </Button>
        </div>
    </div>
);
