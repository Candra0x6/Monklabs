import React from 'react';

export const InfoBox: React.FC<{ content: string }> = ({ content }) => (
    <div className="flex h-[225px] max-w-[225px] items-center justify-center border border-border-secondary bg-background-secondary p-4">
        <p className='max-w-[148px] text-right text-sm font-medium text-muted'>
            {content}
        </p>
    </div>
);
