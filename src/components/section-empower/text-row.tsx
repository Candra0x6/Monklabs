import React from 'react';

interface TextRowProps {
    items: { text: string; x: string }[];
}

export const TextRow: React.FC<TextRowProps> = ({ items }) => (
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
