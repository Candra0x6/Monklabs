import React from 'react';
import TypeAnim from '../animations/type-anim';

export const CharacterSpacing: React.FC<{ text: string }> = ({ text }) => (
    <div className="overflow-hidden">
        {text.split('').map((char, i) => (
            <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
    </div>
);
