import React from 'react';
import TechCard from '../TechCard';

export interface CardData {
    front_title: string;
    front_description: string;
    back_top_text: string;
    back_bottom_text: string;
    hoverRotateZ: number;
    hoverTranslateX: number;
    hoverTranslateY: number;
    image: string;
}

interface TechCardWrapperProps {
    card: CardData;
}

export const TechCardWrapper: React.FC<TechCardWrapperProps> = ({ card }) => (
    <div
        className="tech-card-item transform-3d z-10 max-lg:transform-[rotateY(180deg)]!"
        style={{
            transform: `translate(${card.hoverTranslateX}px, ${card.hoverTranslateY}px) rotate(${card.hoverRotateZ}deg)`
        }}
    >
        <TechCard
            frontDescription={card.front_description}
            frontTitle={card.front_title}
            backTopText={card.back_top_text}
            backBottomText={card.back_bottom_text}
            backImage={card.image}
            hoverRotateZ={0}
            hoverTranslateX={0}
            hoverTranslateY={0}
        />
    </div>
);
