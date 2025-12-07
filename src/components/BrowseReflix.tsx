/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React, { useState, useRef, useEffect } from 'react'
import ArrowRight from './svg/arrow-right'
import { Button } from './ui/button'
import ChevronRight from './svg/chevron-right'
import CarouselCard from './CarouselCard'
import gsap from 'gsap'

function BrowseReflix() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 3;

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      if (card) {
        const containerStyle = window.getComputedStyle(carouselRef.current);
        const gap = parseFloat(containerStyle.gap) || 0;
        const itemWidth = card.offsetWidth;
        const moveAmount = itemWidth + gap;

        gsap.set(carouselRef.current, { willChange: "transform" });
        gsap.to(carouselRef.current, {
          x: -currentIndex * moveAmount,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(carouselRef.current, { willChange: "auto" });
          }
        });
      }
    }
  }, [currentIndex]);

  return (
    <section className=''>
      <div className="border-border-2 grid border-y">
        <div className="relative grid gap-6 max-lg:px-6 lg:h-[580px] lg:grid-cols-8">
          <div className="absolute inset-0 grid grid-cols-8 z-0">
            <div className="border-border-2 h-full border-r " />
            <div className="border-border-2 col-span-3 grid h-full grid-cols-2 lg:border-r">
              <div className="border-border-2 h-full border-r"></div>

            </div>

            <div className="border-border-2 col-span-3 grid h-full grid-cols-2 lg:border-r relative">
              <p className='text-text-tertiary absolute text-left text-sm uppercase max-lg:hidden lg:max-w-[143px] top-1/4 ml-5 '>
                    // EVM COMPATIBLE(BASE)
              </p>
              <div className="border-border-2 h-full border-r"></div>

            </div>
            <div className="border-border-2 h-full border-r " />


          </div>
          <div className="h-full w-full max-lg:hidden"></div>
          <div className="relative z-10 col-span-6 flex h-full w-full items-center justify-between py-14.5 max-lg:flex-col max-lg:gap-6 ">
            <div className="flex w-full gap-6 max-lg:flex-col lg:gap-34 justify-between">
              <div className="border-border-2 bg-background w-full space-y-11 border px-8 py-6 lg:-ml-5 lg:max-w-[462px]">
                <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                  FOR SELELR</div>
                <h1 className='text-pumpkin-100 text-4xl leading-[120%] font-semibold uppercase lg:text-[80px]'>
                  DONT MISS OUT
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-between max-lg:w-full max-lg:gap-2 lg:h-full lg:items-end ">
              <Button variant="ghost" className="group px-0 text-primary flex cursor-pointer items-center gap-4 text-2xl font-medium text-nowrap uppercase">
                <span>BROWSE RAFLUX</span>
                <div className="border-border-2 bg-background-2 border p-2">
                  <ArrowRight />
                </div>
              </Button>
              <p className='text-text-tertiary mr-2 text-right text-sm uppercase max-lg:hidden lg:max-w-[101px]'>
                // CHAINLINK VRF
              </p>
            </div>
          </div>
        </div>
        <div className="border-border-2 relative grid overflow-x-hidden border-t max-lg:w-full max-lg:py-6 lg:h-[580px] lg:grid-cols-8">
          <div className="absolute inset-0 grid grid-cols-8 z-0">
            <div className="border-border-2 h-full border-r " />
            <div className="border-border-2 col-span-3 grid h-full grid-cols-2 lg:border-r">
              <div className="border-border-2 h-full border-r"></div>

            </div>

            <div className="border-border-2 col-span-3 grid h-full grid-cols-2 lg:border-r relative">

              <div className="border-border-2 h-full border-r"></div>

            </div>
            <div className="border-border-2 h-full border-r " />


          </div>
          <div />
          <div className="relative z-10 col-span-7 flex w-full gap-6 max-lg:flex-col max-lg:justify-center lg:items-center">
            {/*MOVE THE CARAOUSEL */}
            <div className="z-10 flex items-center -space-x-px max-lg:px-6 lg:-translate-x-[calc(50%+0.5px)]">
              <button
                onClick={handleNext}
                disabled={currentIndex === totalItems - 1}
                className='bg-base-dark-secondary hover:border-primary group border-base-border-2 flex h-[150px] w-[60px] cursor-pointer items-center justify-center border-x border-y transition-all duration-300 hover:z-10 disabled:cursor-not-allowed disabled:opacity-50'>
                <ChevronRight />
              </button>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className='bg-base-dark-secondary hover:border-primary group border-base-border-2 flex h-[150px] w-[60px] cursor-pointer items-center justify-center border-x border-y transition-all duration-300 hover:z-10 disabled:cursor-not-allowed disabled:opacity-50'>
                <ChevronRight className='rotate-180' />
              </button>
            </div>
            <div className="border-base-border-2 relative w-full overflow-hidden border-l">
              {/* CARAOUSEL CARD */}
              <div ref={carouselRef} className="flex h-[580px] max-lg:gap-6 max-lg:px-6">
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-[200px] grid-cols-8 max-lg:hidden">
        <div className='border-border-2 col-span-3 border-r' />
        <div className='border-border-2 relative col-span-4 flex items-center justify-center border-r' >


          <div className='bg-background absolute top-full h-12 w-[550px] bg-white' style={{ clipPath: "polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)" }} />

        </div>
      </div>
    </section>
  )
}

export default BrowseReflix