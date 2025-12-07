import React from 'react';
import Image from 'next/image';
import { Clock, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CarouselCard = () => {
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
        <div className="flex h-[580px] w-[calc(100vw-48px)] flex-col border border-t-0 border-l-0 border-[#484848] lg:w-[380px] lg:min-w-[380px]">
            <div className="relative w-full bg-[#484848] p-px" style={{ clipPath: clipPathValue }}>
                <div style={{ clipPath: clipPathValue }} className="bg-muted flex flex-col items-end gap-2.5 px-7 py-4 relative w-full">
                    <div className="text-primary flex w-fit items-center justify-center gap-2 text-sm font-medium">
                        <h1 className='relative inline-flex items-center overflow-hidden text-center'>
                            23
                            D
                            :
                            -8
                            H
                            :
                            -2
                            M
                            :
                            -26
                            S
                        </h1>
                    </div>
                    <div className="w-full relative rounded-full h-1.5 bg-pumpkin-950 bg-orange-950 ">
                        <div className='absolute rounded-full w-1/2 h-full' style={{ boxShadow: 'rgb(255, 115, 0) 0px 0px 4px 2px', background: 'rgb(255, 214, 181)' }} />

                    </div>
                </div>
            </div>
            <div className="bg-muted flex h-full flex-col justify-between px-7 py-5 border-l border-[#484848]">
                <div className="space-y-4">
                    <Image alt="Pudgy Penguins" loading="lazy" width="500" height="500" className="aspect-square h-[321px] w-[321px] object-cover" src="/liquid.svg" />
                    <div className="space-y-2">
                        <h2 className='font-geist text-xl font-medium'>Puddy Pinguin</h2>
                        <div className="font-geist text-text-secondary flex items-center gap-2 text-sm">
                            <Clock size={14} />
                            <span>Sale Ended</span>
                            <p className='text-mono text-foreground text-xs font-semibold'>21 June 2025</p>
                        </div>
                    </div>

                </div>
                <Button className='w-full'>
                    <div className="text-pumpkin-300 flex items-center gap-1 text-sm">
                        <Diamond size={16} />
                        <span className='font-medium'>Place Bid</span>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default CarouselCard;