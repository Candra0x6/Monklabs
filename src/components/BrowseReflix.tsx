"use client";
import React from 'react';
import ArrowRight from './svg/arrow-right';
import { Button } from './ui/button';
import ChevronRight from './svg/chevron-right';
import CarouselCard from './CarouselCard';
import { useBrowseCarousel } from '@/hooks/useBrowseCarousel';

const BrowseReflix: React.FC = () => {
  const { carouselRef, handleNext, handlePrev, isFirst, isLast } = useBrowseCarousel(3);

  return (
    <section className='bg-background-secondary'>
      <div className="border-border-secondary grid border-y">
        <TopSection />
        <BottomSection
          carouselRef={carouselRef}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={isFirst}
          isLast={isLast}
        />
      </div>
      <FooterDecoration />
    </section>
  );
};

const TopSection: React.FC = () => (
  <div className="relative grid gap-6 max-lg:px-6 lg:h-[580px] lg:grid-cols-8">
    <BackgroundGrid>
      <p className='text-muted absolute left-5 top-1/4 text-right text-sm uppercase max-lg:hidden lg:max-w-[145px] '>
        {'// EVM COMPATIBLE (BASE)'}
      </p>
    </BackgroundGrid>
    <div className="h-full w-full max-lg:hidden" />
    <HeaderContent />
  </div>
);

const HeaderContent: React.FC = () => (
  <div className="relative z-10 col-span-6 flex h-full w-full items-center justify-between py-14.5 max-lg:flex-col max-lg:gap-6">
    <div className="flex w-full gap-6 justify-between max-lg:flex-col lg:gap-34">
      <div className="border-border-secondary bg-background w-full space-y-11 border px-8 py-6 lg:-ml-5 lg:max-w-[462px]">
        <div className="bg-primary/10 text-primary flex w-fit items-center justify-center gap-2 text-nowrap px-4.5 py-1.4 text-lg font-semibold uppercase">
          FOR SELELR
        </div>
        <h1 className='text-pumpkin-100 text-4xl font-semibold uppercase leading-[120%] lg:text-[80px]'>
          DON&apos;T MISS OUT
        </h1>
      </div>
    </div>
    <div className="flex flex-col justify-between max-lg:w-full max-lg:gap-2 lg:h-full lg:items-end">
      <Button variant="ghost" className="group hover:bg-transparent hover:text-primary text-primary flex cursor-pointer items-center gap-4 text-nowrap px-0 text-2xl font-medium uppercase">
        <span>BROWSE RAFLUX</span>
        <div className="border-border-secondary bg-background -mr-1 border p-2">
          <ArrowRight />
        </div>
      </Button>
      <p className='text-muted mr-2 text-right text-sm uppercase max-lg:hidden lg:max-w-[101px]'>
        {'// CHAINLINK VRF'}
      </p>
    </div>
  </div>
);

interface BottomSectionProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const BottomSection: React.FC<BottomSectionProps> = ({ carouselRef, onNext, onPrev, isFirst, isLast }) => (
  <div className="border-border-secondary relative grid overflow-hidden border-t max-lg:w-full max-lg:py-6 lg:h-[580px] lg:grid-cols-8">
    <BackgroundGrid />
    <div />
    <div className="relative z-10 col-span-7 flex w-full gap-6 max-lg:flex-col max-lg:justify-center lg:items-center">
      <CarouselControls onNext={onNext} onPrev={onPrev} isFirst={isFirst} isLast={isLast} />
      <CarouselTrack carouselRef={carouselRef} />
    </div>
  </div>
); const CarouselControls: React.FC<Omit<BottomSectionProps, 'carouselRef'>> = ({ onNext, onPrev, isFirst, isLast }) => (
  <div className="z-10 flex items-center -space-x-px max-lg:px-6 lg:-translate-x-[calc(50%+0.5px)]">
    <CarouselButton onClick={onNext} disabled={isLast}>
      <ChevronRight />
    </CarouselButton>
    <CarouselButton onClick={onPrev} disabled={isFirst}>
      <ChevronRight className='rotate-180' />
    </CarouselButton>
  </div>
);

const CarouselButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode }> = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className='bg-background hover:border-primary border-border-secondary group flex h-[150px] w-[60px] cursor-pointer items-center justify-center border-x border-y transition-all duration-300 hover:z-10 disabled:cursor-not-allowed disabled:opacity-50'
  >
    {children}
  </button>
);

const CarouselTrack: React.FC<{ carouselRef: React.RefObject<HTMLDivElement | null> }> = ({ carouselRef }) => (
  <div className="border-border-secondary relative w-full overflow-hidden border-l">
    <div ref={carouselRef} className="flex h-[580px] overflow-y-hidden max-lg:gap-6 max-lg:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
    </div>
  </div>
); const BackgroundGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="absolute inset-0 z-0 grid grid-cols-8">
    <div className="border-border-secondary h-full border-r" />
    <div className="border-border-secondary col-span-3 grid h-full grid-cols-2 lg:border-r">
      <div className="border-border-secondary h-full border-r" />
    </div>
    <div className="border-border-secondary col-span-3 grid h-full grid-cols-2 relative lg:border-r">
      {children}
      <div className="border-border-secondary h-full border-r" />
    </div>
    <div className="border-border-secondary h-full border-r" />
  </div>
);

const FooterDecoration: React.FC = () => (
  <div className="grid h-[200px] grid-cols-8 max-lg:hidden">
    <div className='border-border-secondary col-span-3 border-r' />
    <div className='border-border-secondary relative col-span-4 flex items-center justify-center border-r'>
      <div className='bg-background-secondary absolute top-full h-12 w-[550px]' style={{ clipPath: "polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)" }} />
    </div>
  </div>
);

export default BrowseReflix;