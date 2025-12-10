import React from 'react';
import { NetworkStatus } from './network-status';
import { SocialLinks } from './social-links';
import { HelpSection } from './help-section';

export const MainFooter: React.FC = () => {
    return (
        <div className="bg-dark-secondary border-t-base-placeholder flex w-full items-center justify-between gap-1 rounded-t-xl border-t py-2 text-xs text-white max-md:flex-col lg:h-8 lg:px-6">
            <NetworkStatus />
            <div className="text-text-secondary flex items-center space-x-4 text-xs leading-[120%]">
                <SocialLinks />
                <span className='hidden cursor-pointer transition-all duration-300 text-muted lg:flex'>
                    Terms of Service
                </span>
                <HelpSection />
            </div>
        </div>
    );
};
