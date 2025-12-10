import React from 'react';
import { FeatureItem } from './feature-item';
import { FeatureDescription } from './feature-description';

export const FeatureMarquee: React.FC = () => (
    <div className="flex w-fit gap-[200px]">
        {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
                <FeatureItem />
                <FeatureDescription />
            </React.Fragment>
        ))}
    </div>
);
