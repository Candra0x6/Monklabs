"use client"
import React from 'react';
import { MARQUEE_TEXTS } from '@/lib/contants/constants';
import { Marquee as MarqueeComponent } from './ui/marquee';

export default function Marquee() {
  return (
    <MarqueeComponent duration={60} className="border-base-placeholder -mt-px h-10.5 border-y z-20 gap-x-5">
      {[...MARQUEE_TEXTS, ...MARQUEE_TEXTS].map((text, i) => (
        <div key={i} className="flex items-center mx-24">
          <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest hover:text-primary transition-colors cursor-default">
            {text}
          </span>
        </div>
      ))}
    </MarqueeComponent>
  );
};
