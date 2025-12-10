import React from 'react';
import HelpIcon from '../icons/help-icon';

export const HelpSection: React.FC = () => (
    <div className="flex cursor-pointer items-center gap-2 transition-all duration-300 text-muted">
        <HelpIcon />
        <span className='lg:flex'>
            Help and Support
        </span>
    </div>
);
