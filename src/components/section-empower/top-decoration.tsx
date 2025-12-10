import React from 'react';

export const TopDecoration: React.FC = () => (
    <div
        className="bg-background-secondary absolute bottom-full left-25 h-12 w-[550px] rotate-180"
        style={{ clipPath: 'polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)' }}
    />
);
