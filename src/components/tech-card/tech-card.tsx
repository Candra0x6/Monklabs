import React from 'react';
import ArrowRight from '../icons/arrow-right';
import { CornerMarkers } from '../ui/corner-markers/corner-markers';
import Image from 'next/image';
import { TechCardProps } from '@/lib/types/type';

export const TechCard: React.FC<TechCardProps> = ({
    frontTitle,
    frontDescription,
    showFrontArrow = true,
    backTopText = '// NFT TICKETS',
    backBottomText = '// NFT TICKETS',
    backImage,
    centerImage,
    width = 'w-[379px]',
    height = 'h-[510px]',
    cornerMarkersVariant = 'wide-top',
    hoverTranslateX = 0,
    hoverTranslateY = 0,
    hoverRotateZ = 0,
}) => {
    const hoverTransform = `translateX(${hoverTranslateX}px) translateY(${hoverTranslateY}px) rotateZ(${hoverRotateZ}deg)`;
    const clipPathValue = `polygon(
    2.7rem 0%, 
    96% 0%, 
    96% 40%, 
    96% 55%, 
    100% 60%, 
    100% 100%, 
    100% 100%, 
    0% 100%, 
    0% 1.5rem
  )`;

    return (
        <div className={`group relative ${width} ${height} transform-3d`}>
            <div className="relative w-full h-full transition-all duration-500 transform-3d">
                <div style={{ transform: `${hoverTransform}` }} className="absolute inset-0 w-full h-full transition-transform duration-500 transform-3d">

                    {/* Front Face */}
                    <div className="absolute inset-0 " style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>

                        {/* Border Layer */}
                        <div
                            className="absolute inset-0 bg-border-secondary"
                            style={{ clipPath: clipPathValue, transform: 'scaleX(-1)' }}
                        />
                        {/* Main Card Shape Background */}
                        <div
                            className="absolute inset-px overflow-hidden bg-background "
                            style={{ clipPath: clipPathValue, transform: 'scaleX(-1)' }}
                        />

                        {/* --- Content Layout --- */}
                        <div className="absolute inset-px text-primary overflow-hidden">
                            <div className="relative h-full flex flex-col justify-between p-10 z-10">

                                {/* Header Area */}
                                <div className="flex justify-between items-start relative">
                                    {/* Main Headline */}
                                    <h1 className="font-regular text-[14px] uppercase ">
                                        {backTopText}
                                    </h1>
                                </div>

                                {/* Center Image */}
                                {centerImage && (
                                    <div className="w-full h-full relative flex items-center justify-center">
                                        <div className="absolute -right-10 -top-10 ">
                                            <Image
                                                src={centerImage}
                                                alt="center"
                                                width={400}
                                                height={400}
                                                loading='lazy'
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                )}

                                <CornerMarkers variant={cornerMarkersVariant} />

                                {/* Footer Area */}
                                <div className="absolute bottom-30 -left-5">
                                    <h1 className="font-regular text-[14px] -rotate-90 uppercase flex flex-col">
                                        {backBottomText}
                                    </h1>
                                </div>

                                {/* Back Image */}
                                {backImage && (
                                    <div className="absolute -right-5 top-20 ">
                                        <Image
                                            src={backImage}
                                            alt="center"
                                            width={250}
                                            height={250}
                                            loading='lazy'
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        {/* Border Layer */}
                        <div
                            className="absolute inset-0 bg-border-secondary"
                            style={{ clipPath: clipPathValue }}
                        />
                        {/* Main Card Shape Background */}
                        <div
                            className="absolute inset-px text-primary bg-background "
                            style={{ clipPath: clipPathValue }}
                        >
                            {/* --- Content Layout --- */}
                            <div className="relative h-full flex flex-col justify-between p-8 z-10">
                                {/* Top Right Arrow Icon */}
                                {showFrontArrow && (
                                    <div className="absolute top-3 right-7">
                                        <ArrowRight />
                                    </div>
                                )}
                                {/* Header Area */}
                                <div className="flex justify-between items-start relative">
                                    {/* Main Headline */}
                                    <h1 className="font-regular text-[48px] uppercase flex flex-col">
                                        {frontTitle}
                                    </h1>
                                </div>
                                {/* Footer Area */}
                                <div className="flex justify-end">
                                    <p style={{ fontFamily: 'var(--font-geist)' }} className="w-[185px] text-[12px] text-muted ">
                                        {frontDescription}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
