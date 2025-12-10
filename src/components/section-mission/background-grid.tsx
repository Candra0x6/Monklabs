import React from 'react';

export const BackgroundGrid: React.FC = () => (
    <div className="absolute inset-0 grid grid-cols-6">
        <div className='h-full border-r border-border-secondary' />
        <div className='col-span-2 h-full border-r border-border-secondary' />
        <div className='col-span-2 h-full border-r border-border-secondary' />
        <div className='h-full border-r border-border-secondary' />
    </div>
);
