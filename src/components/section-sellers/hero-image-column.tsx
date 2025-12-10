import React from 'react';
import Image from 'next/image';

export const HeroImageColumn: React.FC<{
    imageSrc: string;
    imageAlt: string;
    title: string;
    isBuyer?: boolean;
}> = ({ imageSrc, imageAlt, title, isBuyer }) => (
    <div className="relative flex h-full w-full items-start justify-end border-x border-border-secondary bg-background p-8 max-lg:min-h-[300px] lg:w-[869px] lg:p-16">
        <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-end">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                loading='lazy'
                className={`h-full w-auto object-contain max-lg:object-cover ${isBuyer ? 'lg:h-fit lg:w-full' : ''}`}
            />
        </div>
        <h1 className='relative z-10 text-4xl font-bold uppercase text-primary max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-[488px] lg:text-right lg:text-[56px]'>
            {title}
        </h1>
    </div>
);
