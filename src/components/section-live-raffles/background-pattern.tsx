import React from 'react';

export const BackgroundPattern: React.FC = () => (
    <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
    />
);
