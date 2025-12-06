import React from 'react';
import { PARTNERS, CHAINS } from '@/lib/contants/constants';
import { CornerMarkers } from './CornerMarkers';

export const SectionPartners: React.FC = () => {
    return (
        <div className="border-b border-border">
             {/* Row 1: Partners */}
             <div className="grid grid-cols-2 md:grid-cols-5 border-b border-border">
                {PARTNERS.map((p, i) => (
                    <div key={i} className="h-32 border-r border-border last:border-r-0 flex flex-col items-center justify-center gap-3 bg-background hover:bg-card transition-colors group relative">
                        <CornerMarkers />
                        <div className="w-12 h-12 rounded-lg bg-gray-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                             <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">{p.name}</span>
                    </div>
                ))}
             </div>
             
             {/* Row 2: Chains/Tokens */}
             <div className="grid grid-cols-2 md:grid-cols-5 bg-background">
                {CHAINS.map((c, i) => (
                     <div key={i} className="h-40 border-r border-border last:border-r-0 flex flex-col items-center justify-center gap-4 group relative">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border border-border bg-card group-hover:border-${c.color}-500 transition-colors duration-300`}>
                             <span className={`text-2xl font-bold text-${c.color}-500`}>{c.icon}</span>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{c.name}</span>
                     </div>
                ))}
             </div>
        </div>
    );
};
