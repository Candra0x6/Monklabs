import React from 'react';
import { Badge } from '../ui/badge';

export const MissionHeader: React.FC = () => (
    <div className="border-border-secondary bg-background-secondary grid h-[79px] w-full border-t lg:grid-cols-8">
        <div className="max-lg:hidden" />
        <div className="border-border-secondary col-span-6 flex items-center justify-between gap-4 border-x px-6">
            <Badge variant="secondary">OUR MISSION</Badge>
            <Badge variant="secondary">OUR MISSION</Badge>
        </div>
    </div>
);
