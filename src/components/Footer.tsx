/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Button } from './ui/button'
import LineVector from './svg/line-vector'

function Footer() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const marqueeTextItems = [
        "NFTs starting from just $10!",
        "Join the wave",
        "More liquid than opensea",
        "Start selling on raflux"
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const width = marqueeRef.current?.scrollWidth || 0;

            gsap.to(marqueeRef.current, {
                x: -width / 2,
                duration: 40,
                ease: "none",
                repeat: -1,
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);
    return (
        <footer className=''>
            <div className="border-b-border grid border-b lg:h-[calc(100vh-42px)] lg:grid-cols-8 2xl:h-[95vh]">
                <div className='border-base-placeholder border-r' />
                <div className="border-base-placeholder col-span-6 flex flex-col justify-end border-r">
                    <div className="relative flex flex-col justify-end px-6 py-10.5 max-lg:gap-6 lg:pl-15 2xl:w-fit">
                        <h1 className='text-pumpkin-100 text-4xl font-semibold uppercase lg:text-[64px]'>
                            DECENTRELIZE RAFFLES FOR DIGITAL ASSET
                        </h1>
                        <div className="-top-12 -bottom-15 flex h-12 items-center lg:absolute lg:right-0 lg:justify-center ">
                            <div className="relative max-lg:hidden ">
                                <div className="border-primary absolute -bottom-12 -left-6 flex size-13 items-center justify-center rounded-full border border-dashed">
                                    <div className="border-primary flex size-9 items-center justify-center rounded-full border">
                                        <div className='bg-primary size-4 rounded-full' />
                                    </div>
                                </div>
                                <div className="">

                                    <LineVector />
                                </div>
                            </div>
                            <Button className='w-full lg:w-auto'>
                                <div className="flex items-center gap-2 text-sm">
                                    Launch App
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="border-border grid border-y lg:h-20 lg:grid-cols-3">
                        <div className="flex flex-col items-start justify-center gap-1.5 px-6 max-lg:py-4">
                            <p className='text-primary text-sm uppercase'>
                                <span>RAFLUX @2025. COPYRIGHT</span>
                            </p>
                            <p className='text-text-secondary text-[10px] uppercase'>
                                ALL RIGHT RESERVED
                            </p>
                        </div>
                        <div className="border-base-placeholder flex items-start px-6 max-lg:border-y max-lg:py-4 lg:items-center lg:justify-center lg:border-x">
                            <p className='max-w-[225px] text-xs font-medium uppercase lg:text-center'>
    // Stop waiting months on traditional marketplaces
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center px-6 max-lg:py-4 lg:items-end">
                            <p className='text-text-tertiary text-sm uppercase'>
                                CONTACT
                            </p>
                            <p className='text-text-secondary text-[10px] uppercase'>
                                HI@RAFLUX.ID
                            </p>
                        </div>
                    </div>
                    <div className="relative h-52.5 w-full 2xl:h-100">
                        <div className="relative h-full w-full">
                            k
                        </div>
                    </div>
                </div>
                <div />
            </div>
            <div ref={wrapperRef} className="flex h-10.5 w-screen items-center justify-center">
                <div ref={marqueeRef} className="flex whitespace-nowrap">
                    {[...marqueeTextItems, ...marqueeTextItems].map((text, i) => (
                        <div key={i} className="flex items-center" style={{ minWidth: '25vw', justifyContent: 'center' }}>
                            <span className="text-text-secondary text-[10px] uppercase hover:text-primary transition-colors cursor-default">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer