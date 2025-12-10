import React from 'react';
import Image from 'next/image';

export const BackgroundStars: React.FC = () => (
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
