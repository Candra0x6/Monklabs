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
