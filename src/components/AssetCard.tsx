import React, { useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';

import { Card } from '@/components/ui/card';
import { Asset } from '@/lib/types/type';
import { CornerMarkers } from './CornerMarkers';
import { ASSETS } from '@/lib/contants/constants';
import Image from 'next/image';
import UsdtIcon from './svg/usdt-icon';

interface AssetCardProps {
  asset?: Asset;
  className?: string;
  index?: number;
}

export const AssetCard: React.FC<AssetCardProps> = ({ className, index = 0 }) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const currentIndex = useRef(0);
  const assetCount = ASSETS.length;

  // Create a virtual list with only 10 unique items (much lighter than 250+)
  const virtualAssets = useMemo(() => {
    return Array(10).fill(ASSETS).flat();
  }, []);

  const totalItems = virtualAssets.length;

  useEffect(() => {
    // Initialize based on index to ensure each card shows a different asset by default
    // We add assetCount to start in the second set (buffer for scrolling up)
    const startIdx = assetCount + (index % assetCount);
    currentIndex.current = startIdx;

    if (stripRef.current) {
      // Use yPercent for responsive height
      // Each item is 1/totalItems of the strip height
      const percentPerItem = 100 / totalItems;
      gsap.set(stripRef.current, { y: 0, yPercent: -(startIdx * percentPerItem) });
    }
  }, [assetCount, index, totalItems]);

  const handleMouseEnter = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    // Spin by a random amount, e.g., 1 full cycle + random offset
    // Or just random 5-10 items
    const steps = Math.floor(Math.random() * 5) + 5; // 5 to 9 items
    const nextIndex = currentIndex.current + steps;

    const percentPerItem = 100 / totalItems;
    const targetPercent = -(nextIndex * percentPerItem);

    gsap.set(stripRef.current, { willChange: "transform" });
    gsap.to(stripRef.current, {
      yPercent: targetPercent,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(stripRef.current, { willChange: "auto" });
        isAnimating.current = false;

        // Seamless reset to the second set
        // The item at nextIndex is the same as at (nextIndex % assetCount)
        // We add assetCount to put it in the second set [5, 9]
        const resetIndex = (nextIndex % assetCount) + assetCount;
        currentIndex.current = resetIndex;
        gsap.set(stripRef.current, { yPercent: -(resetIndex * percentPerItem) });
      }
    });
  }; return (
    <Card
      onMouseEnter={handleMouseEnter}
      className={`group w-full h-full border-r aspect-square border-border last:border-r-0 flex flex-col items-center justify-center p-6 transition-colors duration-300 overflow-hidden relative ${className}`}
    >
      <div
        ref={stripRef}
        className="absolute top-0 left-0 w-full "
        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
      >
        {virtualAssets.map((item, i) => (
          <div className="w-full aspect-square flex flex-col items-center justify-center relative shrink-0" key={i}>
            <CornerMarkers />
            {/* Image Container */}
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden ">
                <Image
                  width={10}
                  height={10}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>


            </div>

            {/* Text Content */}
            <h3 className="text-foreground text-[16px] font-display font-bold text-sm tracking-wide text-center uppercase mb-1">
              {item.name}
            </h3>

            <div className="text-orange-800 text-xs line-through font-mono mb-2 lg:text-[15px] text-[12px]">
              ${item.originalPrice.toLocaleString()}
            </div>

            {/* Price / Ticket Cost */}
            <div className="flex items-center gap-2 text-primary font-bold font-mono lg:text-[16px] text-[12px]">
              <UsdtIcon />
              <span>{item.ticketCost}</span>
            </div>
          </div>
        ))}
      </div>

    </Card>
  );
};
