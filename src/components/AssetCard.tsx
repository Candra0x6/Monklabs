import React from 'react';
import { Diamond } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Asset } from '@/lib/types/type';
import { CornerMarkers } from './CornerMarkers';

interface AssetCardProps {
  asset: Asset;
}

export const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <Card className="group w-full h-full border-r  border-border last:border-r-0 flex flex-col items-center justify-center p-6 transition-colors duration-300 overflow-hidden relative">
                                 <CornerMarkers />

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Image Container */}
      <div className="relative mb-4 transform group-hover:scale-105 transition-transform duration-500 ease-out">
        <div className="w-24 h-24 rounded-lg overflow-hidden border border-border shadow-2xl">
           <img src={asset.image} alt={asset.name} className="w-full h-full object-cover" />
        </div>
        
        {/* Type Badge (e.g. SOL logo or just styling) */}
        <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 border border-border">
            {asset.type === 'TOKEN' ? (
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
            ) : (
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
            )}
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-foreground font-display font-bold text-sm tracking-wide text-center uppercase mb-1">
        {asset.name}
      </h3>
      
      <div className="text-muted-foreground text-xs line-through font-mono mb-2">
        ${asset.originalPrice.toLocaleString()}
      </div>

      {/* Price / Ticket Cost */}
      <div className="flex items-center gap-2 text-primary font-bold font-mono text-lg">
        <Diamond size={16} className="fill-current" />
        <span>{asset.ticketCost}</span>
      </div>
      
    </Card>
  );
};
