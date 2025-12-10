"use client"
import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useEmpowerAnimations } from '@/hooks/useEmpowerAnimations';

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

export const SectionEmpower: React.FC = () => {
    const sectionRef = useEmpowerAnimations();

    return (
        <div ref={sectionRef} className="bg-background relative z-10 h-[300vh]">
            <TopDecoration />
            <div className="h-20 w-full bg-background-secondary" />
            <div className="sticky top-[58px] flex h-[calc(100vh-60px)] flex-col">
                <MissionHeader />
                <MainContent />
            </div>
        </div>
    );
};

const TopDecoration: React.FC = () => (
    <div
        className="bg-background-secondary absolute bottom-full left-25 h-12 w-[550px] rotate-180"
        style={{ clipPath: 'polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)' }}
    />
);

const MissionHeader: React.FC = () => (
    <div className="border-border-secondary bg-background-secondary grid h-[79px] w-full border-t lg:grid-cols-8">
        <div className="max-lg:hidden" />
        <div className="border-border-secondary col-span-6 flex items-center justify-between gap-4 border-x px-6">
            <Badge variant="secondary">OUR MISSION</Badge>
            <Badge variant="secondary">OUR MISSION</Badge>
        </div>
    </div>
);

const MainContent: React.FC = () => (
    <div className="border-border-secondary relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-y px-6 lg:px-12">
        <BackgroundStars />
        <div className="w-full max-w-[1440px]">
            {TEXT_ROWS.map((row, i) => (
                <TextRow key={i} items={row} />
            ))}
        </div>
    </div>
);

const BackgroundStars: React.FC = () => (
    <>
        <Image
            src="/star-top.svg"
            alt="star top"
            loading="lazy"
            width={300}
            height={300}
            className="object-contain absolute right-0 top-0 h-auto w-[200px]"
            style={{ color: 'transparent' }}
        />
        <Image
            src="/star-bottom.svg"
            alt="star bottom"
            loading="lazy"
            width={300}
            height={300}
            className="object-contain absolute bottom-0 left-0 h-auto w-[250px]"
            style={{ color: 'transparent' }}
        />
    </>
);

const TextRow: React.FC<{ items: { text: string; x: string }[] }> = ({ items }) => (
    <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold uppercase text-orange-100 lg:text-[72px]">
        {items.map((item, index) => (
            <div
                key={index}
                className="empower-item"
                style={{ transform: item.x === 'none' ? 'none' : `translateX(${item.x})` }}
            >
                <div className="overflow-hidden">
                    <span>{item.text}</span>
                </div>
            </div>
        ))}
    </div>
);
