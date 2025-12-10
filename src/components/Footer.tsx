"use client"
import React from 'react'
import { Button } from './ui/button'
import LineVector from './svg/line-vector'
import { Canvas } from '@react-three/fiber'
import { GoldNoiseVisual } from './animations/gold-noise'
import { Marquee } from './ui/marquee'

const MARQUEE_ITEMS = [
    "NFTs starting from just $10!",
    "Join the wave",
    "More liquid than opensea",
    "Start selling on raflux"
];

function Footer() {
    return (
        <footer>
            <div className="border-b-border grid border-b lg:h-[calc(100vh-42px)] lg:grid-cols-8 2xl:h-[95vh]">
                <div className='border-base-placeholder border-r' />
                <div className="border-base-placeholder col-span-6 flex flex-col justify-end border-r">
                    <FooterHeader />
                    <FooterInfoBar />
                    <FooterPlaceholder />
                </div>
                <div />
            </div>
            <Marquee className="h-10.5 w-screen">
                {MARQUEE_ITEMS.map((text, i) => (
                    <div key={i} className="flex items-center justify-center" style={{ minWidth: '25vw' }}>
                        <span className="text-muted cursor-default text-[10px] uppercase transition-colors hover:text-primary">
                            {text}
                        </span>
                    </div>
                ))}
            </Marquee>
        </footer>
    )
}

const FooterHeader: React.FC = () => (
    <div className="relative flex flex-col justify-end px-6 py-10.5 max-lg:gap-6 lg:pl-15 2xl:w-fit">
        <h1 className='text-pumpkin-100 text-[64px] font-semibold uppercase lg:text-[64px]'>
            <span>DECENTRELIZE RAFFLES FOR DIGITAL ASSETS</span>
        </h1>
        <div className="-top-12 -bottom-15 flex h-12 items-center lg:absolute lg:right-0 lg:justify-center">
            <div className="relative max-lg:hidden">
                <div className="border-primary absolute -bottom-12 -left-6 flex size-13 items-center justify-center rounded-full border border-dashed">
                    <div className="border-primary flex size-9 items-center justify-center rounded-full border">
                        <div className='bg-primary size-4 rounded-full' />
                    </div>
                </div>
                <LineVector />
            </div>
            <Button className='w-full lg:w-auto lg:px-16 mr-5'>
                <div className="flex items-center gap-2 text-sm">
                    START RAFFLING NOW
                </div>
            </Button>
        </div>
    </div>
);

const FooterInfoBar: React.FC = () => (
    <div className="border-border grid border-y lg:h-20 lg:grid-cols-3">
        <div className="flex flex-col items-start justify-center gap-1.5 px-6 max-lg:py-4">
            <p className='text-primary text-sm uppercase'>
                <span>RAFLUX @2025. COPYRIGHT</span>
            </p>
            <p className='text-muted text-[10px] uppercase'>
                ALL RIGHT RESERVED
            </p>
        </div>
        <div className="border-base-placeholder flex items-start px-6 max-lg:border-y max-lg:py-4 lg:items-center lg:justify-center lg:border-x">
            <p className='max-w-[225px] text-xs font-medium uppercase lg:text-center text-white'>
                {'// Stop waiting months on traditional marketplaces'}
            </p>
        </div>
        <div className="flex flex-col items-start justify-center px-6 max-lg:py-4 lg:items-end">
            <p className='text-muted text-sm uppercase'>
                CONTACT
            </p>
            <p className='text-muted text-[10px] uppercase'>
                HI@RAFLUX.ID
            </p>
        </div>
    </div>
);

const FooterPlaceholder: React.FC = () => (
    <div className="relative h-52.5 w-full 2xl:h-100">
        <div className="relative h-full w-full">
            <GoldNoiseVisual />
        </div>
    </div>
);

export default Footer