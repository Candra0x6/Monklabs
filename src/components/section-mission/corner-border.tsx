import React from 'react';

export const CornerBorder: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
        className="w-fit bg-border-secondary p-px"
        style={{
            clipPath: 'polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)',
        }}
    >
        <div
            className="flex h-[83px] w-[341px] items-center justify-center bg-background-secondary"
            style={{
                clipPath: 'polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)',
            }}
        >
            {children}
        </div>
    </div>
);
