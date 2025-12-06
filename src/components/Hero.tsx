import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Hexagon, Menu } from 'lucide-react';
import { AssetCard } from '@/components/AssetCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Marquee from './Marquee';
import { ASSETS } from '@/lib/contants/constants';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(".hero-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      });

      gsap.from(".side-box", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });

      gsap.from(".asset-card-hero", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.8
      });

      gsap.from(".bottom-text-char", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(2)",
        delay: 1.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* --- Navbar --- */}
      <nav className="h-20 border-b border-border flex justify-between items-center px-8 relative z-50 bg-background/95 backdrop-blur-sm sticky top-0">
        <div className="nav-item flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <Hexagon className="text-primary fill-primary/20" size={32} strokeWidth={2.5} />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-ping" />
            </div>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
            RAFLUX
          </span>
        </div>
        
        <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
                {['MARKETPLACE', 'LEADERBOARD', 'REWARDS'].map((item) => (
                    <a key={item} href="#" className="nav-item text-xs font-mono text-muted-foreground hover:text-white transition-colors tracking-widest">
                        {item}
                    </a>
                ))}
            </div>
            <Button className="nav-item">Launch App</Button>
            <button className="md:hidden nav-item text-white">
                <Menu />
            </button>
        </div>
      </nav>

      {/* --- Marquee --- */}
      <Marquee />

      {/* --- Main Hero Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        <div className="lg:col-span-8 border-r border-border p-12 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03]" 
                style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
             </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight uppercase z-10">
              <span className="block hero-word">Own NFTS,</span>
              <span className="block hero-word">Tokens,</span>
              <span className="block hero-word text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Or RWA Assets
              </span>
            </h1>
            
            <p className="mt-8 text-muted-foreground font-mono max-w-lg hero-word">
                The world&apos;s first decentralized raffle protocol. 
                Liquify your assets or win blue-chip collections for pennies.
            </p>

            <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-border/50" />
        </div>

        <div className="lg:col-span-4 flex flex-col side-box">
          <div className="h-1/2 border-b border-border relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                 style={{backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")'}}>
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                 <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <div className="absolute bottom-4 left-4 z-10">
                <Badge variant="default" className="bg-black/80 backdrop-blur">Featured Pool</Badge>
            </div>
          </div>

          <div className="h-1/2 bg-card flex flex-col justify-center items-center p-8 relative">
             <div className="absolute top-0 left-0 w-4 h-4 border-b border-r border-border" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-border" />
             
             <p className="text-muted-foreground font-mono text-xs mb-4 uppercase tracking-widest">Limited Time Offer</p>
             <Button className="w-full gap-2 group">
                Buy Tickets Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
             </Button>
          </div>
        </div>
      </div>

      {/* --- Asset Grid Row --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-y border-border">
        {ASSETS.map((asset) => (
            <div key={asset.id} className="asset-card-hero">
                 <AssetCard asset={asset} />
            </div>
        ))}
      </div>

      {/* --- Footer / Bottom Hero --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border min-h-[300px]">
         <div className="border-r border-border p-12 flex flex-col justify-end relative overflow-hidden">
             <div className="text-muted-foreground font-mono text-sm mb-2">Try Your Luck Today</div>
             <Separator className="mb-4" />
             <div className="absolute top-10 left-10 w-20 h-20 border border-border rounded-full animate-[spin_10s_linear_infinite] opacity-20 border-dashed" />
         </div>

         <div className="p-12 flex flex-col justify-center items-end text-right bg-[#0f0f0f]">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                 <div className="flex flex-wrap justify-end gap-x-4">
                    {"STARTING AS LOW".split("").map((char, i) => (
                        <span key={i} className="bottom-text-char inline-block">{char === " " ? "\u00A0" : char}</span>
                    ))}
                 </div>
                 <div className="text-raflux-text/50 flex flex-wrap justify-end gap-x-4 mt-2">
                    {"AS $10!".split("").map((char, i) => (
                         <span key={i} className="bottom-text-char inline-block">{char === " " ? "\u00A0" : char}</span>
                    ))}
                 </div>
             </h2>
         </div>
      </div>
    </div>
  );
};
