"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface LoadingProps {
    onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const percentRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) {
                        onComplete();
                    }
                }
            });

            // 1. Initial Setup
            gsap.set(percentRef.current, { opacity: 0 });
            gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left" });

            // Animate Title Entrance (Fade in + slight move up)
            gsap.from(textRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out"
            });

            // 2. Show Counter
            tl.to(percentRef.current, { opacity: 1, duration: 0.5 }, "-=0.5");

            // 3. Main Fill Animation Sequence
            // We animate the backgroundPosition to reveal the orange color from the left
            const counter = { val: 0 };

            // Start all these animations together
            const fillDuration = 4;  // Total time until 100%

            tl.addLabel("startFill");

            // Text Fill: Animates background position to slide the orange gradient from left to right
            // Start at "100% 0" (showing right half/dark) -> End at "0% 0" (showing left half/orange)
            tl.to(textRef.current, {
                backgroundPosition: "0% 0%",
                duration: fillDuration,
                ease: "power2.inOut",
            }, "startFill");

            // Counter Number: 0 -> 100
            tl.to(counter, {
                val: 100,
                duration: fillDuration,
                ease: "power2.inOut",
                onUpdate: () => {
                    if (percentRef.current) {
                        percentRef.current.innerText = Math.floor(counter.val) + "%";
                    }
                }
            }, "startFill");

            // Loading Bar: Width 0 -> 100%
            tl.to(barRef.current, {
                scaleX: 1,
                duration: fillDuration,
                ease: "power2.inOut"
            }, "startFill");

            // 4. Final Flair
            // Add a glow bloom when it hits 100%
            tl.to(textRef.current, {
                textShadow: "0 0 30px rgba(255, 102, 0, 0.6)",
                duration: 0.3,
                ease: "power2.out"
            });

            // 5. Exit Animation (small delay then slide out)
            // Slide the whole screen up like a curtain
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: "expo.inOut",
                delay: 0.5
            });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-background text-white overflow-hidden select-none"
        >
            {/* 
         Text Fill Gradient Strategy (Left to Right):
         - The text has a background gradient that is 200% width.
         - Left half (0% to 50%) is the 'fill' color (Orange #ff6600).
         - Right half (50% to 100%) is the 'empty' color (Dark Grey #222).
         - Initially, background-position is "100% 0%" which shows the Right half (Dark).
         - We animate background-position to "0% 0%" to scroll to the Left half (Orange).
         - This creates a "Filling from Left to Right" visual effect.
      */}
            <h1
                ref={textRef}
                className=" text-6xl md:text-8xl lg:text-9xl font-black mb-8 md:mb-12"
                style={{
                    // Gradient: Left (Orange), Right (Dark)
                    backgroundImage: "linear-gradient(to right, #ff6600 50%, #222222 50%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "100% 0%", // Start at right (Dark)
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                }}
            >
                RAFLUX
            </h1>

            {/* Percentage Counter Container */}
            <div className="relative flex flex-col items-center justify-center w-64">
                <div
                    ref={percentRef}
                    className=" text-primary text-xl md:text-2xl font-bold tracking-widest mb-3"
                >
                    0%
                </div>

                {/* Loading Bar Track */}
                <div className="w-full h-1 bg-background-secondary rounded overflow-hidden">
                    {/* Loading Bar Fill */}
                    <div
                        ref={barRef}
                        className="w-full h-full text-primary bg-primary shadow-[0_0_15px_rgba(255,102,0,0.8)]"
                    />
                </div>
            </div>
        </div>
    );
};
