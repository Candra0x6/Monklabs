import React from 'react';
import { BackgroundStars } from './background-stars';
import { TextRow } from './text-row';

const TEXT_ROWS = [
    [
        { text: "EMPOWER", x: 'none' },
        { text: "COMMUNITIES", x: '-620px' }
    ],
    [
        { text: "A", x: '880px' },
        { text: "FAIR", x: '445px' },
        { text: "CHANCE", x: 'none' }
    ],
    [
        { text: "TO", x: 'none' },
        { text: "WIN,", x: '-255px' },
        { text: "OWN,", x: '-515px' },
        { text: "AND", x: '-780px' }
    ],
    [
        { text: "GROW", x: '880px' },
        { text: "TOGETHER", x: 'none' }
    ]
];

export const MainContent: React.FC = () => (
    <div className="border-border-secondary relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-y px-6 lg:px-12">
        <BackgroundStars />
        <div className="w-full max-w-[1440px]">
            {TEXT_ROWS.map((row, i) => (
                <TextRow key={i} items={row} />
            ))}
        </div>
    </div>
);
