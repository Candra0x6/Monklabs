import React from 'react';
import { Button } from '../ui/button';
import Discord from '../icons/discord';
import Twitter from '../icons/twitter';

export const SocialLinks: React.FC = () => (
    <div className="flex items-center space-x-4">
        <Button variant="link" className="p-0">
            <Discord />
        </Button>
        <Button variant="link" className="p-0">
            <Twitter />
        </Button>
    </div>
);
