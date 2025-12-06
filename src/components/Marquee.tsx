"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MARQUEE_TEXTS } from '@/lib/contants/constants';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Simple infinite scroll
        const width = marqueeRef.current?.scrollWidth || 0;
        
        gsap.to(marqueeRef.current, {
            x: -width / 2,
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="border-base-placeholder -mt-[1px] flex h-10.5 w-screen items-center justify-center border-y z-20">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {[...MARQUEE_TEXTS, ...MARQUEE_TEXTS, ...MARQUEE_TEXTS].map((text, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest hover:text-primary transition-colors cursor-default">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
