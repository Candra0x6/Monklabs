import React from 'react';

interface MarqueeItemProps {
    text: string;
    index: number;
}

export const MarqueeItem: React.FC<MarqueeItemProps> = ({ text, index }) => (
    <div key={index} className="flex items-center mx-24">
        <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest hover:text-primary transition-colors cursor-default">
            {text}
        </span>
    </div>
);
