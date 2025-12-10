"use client"

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    duration?: number;
    reverse?: boolean;
    repeat?: number;
}

export function Marquee({
    children,
    className,
    duration = 20,
    reverse = false,
    repeat = -1,
    ...props
}: MarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!marqueeRef.current) return;

            const width = marqueeRef.current.scrollWidth;
            // We have 2 copies, so we scroll by half the total width (which is the width of one copy)
            const distance = width / 2;

            gsap.fromTo(marqueeRef.current,
                { x: reverse ? -distance : 0 },
                {
                    x: reverse ? 0 : -distance,
                    duration: duration,
                    ease: "none",
                    repeat: repeat,
                    force3D: true, // Force GPU acceleration
                }
            );
        }, wrapperRef);

        return () => ctx.revert();
    }, [duration, reverse, repeat, children]);

    return (
        <div ref={wrapperRef} className={cn("overflow-hidden flex w-full", className)} {...props}>
            <div
                ref={marqueeRef}
                className="flex w-max min-w-full shrink-0 items-center"
                style={{ willChange: 'transform', transform: 'translateZ(0)' }} // Hint browser to promote to layer
            >
                <div className="flex shrink-0 items-center justify-around">
                    {children}
                </div>
                <div className="flex shrink-0 items-center justify-around">
                    {children}
                </div>
            </div>
        </div>
    );
}
