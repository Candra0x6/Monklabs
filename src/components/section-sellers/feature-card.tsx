import React from 'react';

export const FeatureCard: React.FC<{
    title: string;
    description: string;
    cornerPosition: 'left' | 'right';
    isLast?: boolean;
}> = ({ title, description, cornerPosition, isLast }) => (
    <div className={`relative flex h-full flex-col gap-4 border-border-secondary p-6 max-lg:min-h-[300px] max-lg:justify-center ${isLast ? 'max-lg:border-b' : 'border-y'}`}>
        <h2 className='text-[32px] font-bold uppercase text-pumpkin-100 lg:text-right'>
            <span>{title}</span>
        </h2>
        <p className='font-medium text-muted lg:text-right'>
            {description}
        </p>
    </div>
);
