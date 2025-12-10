import React from 'react';

type Variant = 'default' | 'inner' | 'outer' | 'top' | 'bottom' | 'wide-top';

interface CornerMarkersProps {
    variant?: Variant;
}

export const CornerMarkers: React.FC<CornerMarkersProps> = ({ variant = 'default' }) => {
    const getPositionClass = () => {
        switch (variant) {
            case 'inner':
                return { top: 'top-4', right: 'right-4', bottom: 'bottom-4', left: 'left-4' };
            case 'outer':
                return { top: 'top-0', right: 'right-0', bottom: 'bottom-0', left: 'left-0' };
            case 'top':
                return { top: 'top-2', right: 'right-2', bottom: 'bottom-1/2', left: 'left-2' };
            case 'bottom':
                return { top: 'top-1/2', right: 'right-2', bottom: 'bottom-2', left: 'left-2' };
            case 'wide-top':
                return { topLeft: 'top-6 left-8', topRight: 'top-6 right-8', bottom: 'bottom-2', left: 'left-2', right: 'right-2' };
            case 'default':
            default:
                return { top: 'top-2', right: 'right-2', bottom: 'bottom-2', left: 'left-2' };
        }
    };

    const pos = getPositionClass();

    return (
        <>
            {/* Top Left */}
            <div className={`absolute ${variant === 'wide-top' ? pos.topLeft : `${pos.top} ${pos.left}`} w-2 h-2 border-t border-l border-primary opacity-60 pointer-events-none`} />
            {/* Top Right */}
            <div className={`absolute ${variant === 'wide-top' ? pos.topRight : `${pos.top} ${pos.right}`} w-2 h-2 border-t border-r border-primary opacity-60 pointer-events-none`} />
            {/* Bottom Left */}
            <div className={`absolute ${pos.bottom} ${pos.left} w-2 h-2 border-b border-l border-primary opacity-60 pointer-events-none`} />
            {/* Bottom Right */}
            <div className={`absolute ${pos.bottom} ${pos.right} w-2 h-2 border-b border-r border-primary opacity-60 pointer-events-none`} />
        </>
    );
};
