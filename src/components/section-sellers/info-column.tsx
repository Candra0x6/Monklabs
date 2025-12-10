import React from 'react';

export const InfoColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="relative flex w-full flex-col overflow-hidden border-x border-border-secondary bg-background-secondary lg:w-[628px]">
        <div className="p-6">
            <div className="flex w-fit items-center justify-center gap-2 text-nowrap bg-primary/10 px-4.5 py-1.4 text-lg font-semibold uppercase text-primary">
                <span>{title}</span>
            </div>
        </div>
        {children}
    </div>
);
