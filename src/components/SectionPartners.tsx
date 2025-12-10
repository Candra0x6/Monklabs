import React from 'react';
import { CHAINS } from '@/lib/contants/constants';

export const SectionPartners: React.FC = () => {
     return (
          <div className="border-b border-border">
               {/* Row 1: Partners */}
               <div className="grid grid-cols-2 md:grid-cols-5 border-b border-border">

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
