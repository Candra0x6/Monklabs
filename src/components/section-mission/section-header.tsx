import React from 'react';
import { HeaderContent } from './header-content';
import { HeaderDescription } from './header-description';

export const SectionHeader: React.FC = () => (
    <div className="grid lg:h-[436px] lg:grid-cols-6">
        <div className="max-lg:hidden" />
        <div className="col-span-4 relative flex h-full max-lg:flex-col gap-3 p-6 lg:items-center">
            <HeaderContent />
            <HeaderDescription />
        </div>
    </div>
);
