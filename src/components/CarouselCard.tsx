"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UsdtIcon from './svg/usdt-icon';
import Clock from './svg/clock';

const CarouselCard = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 23, hours: 8, minutes: 2, seconds: 26 });

    useEffect(() => {
        // Dummy countdown: Always starts from 23 days, 8 hours, 2 minutes, 26 seconds
        const targetDate = new Date().getTime() + (23 * 24 * 60 * 60 * 1000) + (8 * 60 * 60 * 1000) + (2 * 60 * 1000) + (26 * 1000);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    const clipPathValue = `polygon(
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

    return (
        <div className="flex h-full w-[calc(100vw-48px)] flex-col border border-t-0 border-l-0 border-border-secondary lg:w-[380px] lg:min-w-[380px]">
            <div className="relative w-full bg-border-secondary p-px" style={{ clipPath: clipPathValue }}>
                <div style={{ clipPath: clipPathValue }} className="bg-background flex flex-col items-end gap-2.5 px-7 py-4 relative w-full">
                    <div className="text-primary flex w-fit items-center justify-center gap-2 text-sm font-medium">
                        <h1 className='relative inline-flex items-center overflow-hidden text-center gap-1 font-mono'>
                            <span>{timeLeft.days}D</span>
                            :
                            <span>{formatNumber(timeLeft.hours)}H</span>
                            :
                            <span>{formatNumber(timeLeft.minutes)}M</span>
                            :
                            <span>{formatNumber(timeLeft.seconds)}S</span>
                        </h1>
                    </div>
                    <div className="w-full relative rounded-full h-1.5 bg-pumpkin-950 bg-orange-950 ">
                        <div className='absolute rounded-full w-1/2 h-full' style={{ boxShadow: 'rgb(255, 115, 0) 0px 0px 4px 2px', background: 'rgb(255, 214, 181)' }} />

                    </div>
                </div>
            </div>
            <div className="bg-background flex h-full flex-col justify-between items-center px-7 py-5 border-l border-border-secondary">
                <div className="space-y-4">

                    <Image alt="Pudgy Penguins" loading="lazy" width="500" height="500" className="aspect-square h-[321px] w-[321px] object-contain" src="/nft-assets/pudgy_penguins.svg" />
                    <div className="space-y-2">
                        <h2 className='font-geist text-xl font-medium text-white'>Puddy Pinguin</h2>
                        <div className="font-geist text-text-secondary flex items-center gap-2 text-sm">
                            <Clock />
                            <span className='text-muted'>Sale Ended</span>
                            <p className='text-mono text-white text-xs font-semibold font-mono'>21 June 2025</p>
                        </div>
                    </div>

                </div>
                <Button className='w-full'>
                    <div className="text-pumpkin-300 flex items-center justify-between w-full gap-1 text-sm">
                        <span className='font-medium'>Place Bid</span>
                        <div className="flex gap-x-1 items-center">
                            <span className='text-sm text-orange-300'>10</span>
                            <UsdtIcon className='text-orange-300' />
                        </div>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default CarouselCard;