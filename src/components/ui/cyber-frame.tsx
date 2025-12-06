import React from 'react';

/**
 * CyberFrame
 * 
 * Replicates the visual style requested:
 * A rectangular container with Top-Left and Bottom-Right corners cut (chamfered).
 * Uses `clip-path` for the shape to ensure background and borders follow the cut.
 */


export interface CyberComponentProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  cutSize?: number; // Size of the corner cut in pixels
}

export interface GeneratedContent {
  title: string;
  status: string;
  details: string;
}
export const CyberFrame: React.FC<CyberComponentProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  onClick,
  cutSize = 20 
}) => {
  
  // Define colors based on variant
  const getColors = () => {
    switch(variant) {
      case 'primary': return 'bg-cyber-primary text-cyber-black hover:bg-white';
      case 'secondary': return 'bg-cyber-secondary text-cyber-black hover:bg-white';
      case 'accent': return 'bg-cyber-accent text-white hover:bg-pink-400';
      case 'outline': return 'bg-transparent border-2 border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10';
      case 'ghost': return 'bg-cyber-gray/50 text-gray-300 hover:bg-cyber-gray';
      default: return 'bg-cyber-dark text-white';
    }
  };

  // We use a polygon clip-path to cut the corners.
  // TL: Top-Left, TR: Top-Right, BR: Bottom-Right, BL: Bottom-Left
  // The shape requested has TL and BR cut.
  // Polygon points:
  // 1. (cutSize, 0)         -> Start top edge, shifted right
  // 2. (100%, 0)            -> Top Right corner
  // 3. (100%, 100% - cut)   -> Right edge, shifted up
  // 4. (100% - cut, 100%)   -> Bottom edge, shifted left
  // 5. (0, 100%)            -> Bottom Left corner
  // 6. (0, cutSize)         -> Left edge, shifted down
  
  const clipPathStyle = {
    clipPath: `polygon(
      ${cutSize}px 0, 
      100% 0, 
      100% calc(100% - ${cutSize}px), 
      calc(100% - ${cutSize}px) 100%, 
      0 100%, 
      0 ${cutSize}px
    )`
  };

  return (
    <div 
      className={`relative group bro inline-block ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {/* 
        Background Layer with Clip Path 
        We separate this to allow for "border" effects if needed by layering slightly larger divs behind.
      */}
      <div 
        className={`relative transition-all duration-300 ease-out px-8 py-4 flex items-center justify-center font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,0,0,0.5)] ${getColors()}`}
        style={clipPathStyle}
      >
        {children}
        
        {/* Optional decorative lines inside the shape often seen in this style */}
        {variant === 'outline' && (
           <div className="absolute top-0 border right-0 w-2 h-2 bg-current opacity-50"></div>
        )}
      </div>

      {/* 
        Decorative "Ghost" Element behind for a glow/offset effect on hover 
        Only visible for solid variants to give depth
      */}
      {variant !== 'outline' && variant !== 'ghost' && (
        <div 
          className={`absolute inset-0 border -z-10 translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
          style={clipPathStyle}
        />
      )}
    </div>
  );
};