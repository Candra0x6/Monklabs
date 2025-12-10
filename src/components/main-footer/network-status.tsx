import React from 'react';
import Point from '../icons/point';

export const NetworkStatus: React.FC = () => (
    <div className="text-primary flex items-start space-x-4">
        <div className="flex items-center gap-1 space-x-1">
            <Point />
            <span>Client Network</span>
        </div>
        <div className="flex items-center gap-1 space-x-1">
            <Point />
            <span>Websocet Connection</span>
        </div>
    </div>
);
