export interface Asset {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  ticketCost: number;
  type: 'NFT' | 'TOKEN' | 'RWA';
}

export interface MarqueeItem {
  text: string;
}

export interface TechCardProps {
  // Front face content
  frontTitle: string;
  frontDescription: string;
  showFrontArrow?: boolean;

  // Back face content
  backTopText?: string;
  backBottomText?: string;
  backImage?: string;
  backImageWidth?: number;
  backImageHeight?: number;
  backImageOpacity?: number;

  // Center image (back face)
  centerImage?: string;
  centerImageWidth?: number;
  centerImageHeight?: number;

  // Styling
  width?: string;
  height?: string;
  cornerMarkersVariant?: 'default' | 'inner' | 'outer' | 'top' | 'bottom' | 'wide-top';

  // Custom transform on hover
  hoverTranslateX?: number;
  hoverTranslateY?: number;
  hoverRotateZ?: number;
}
