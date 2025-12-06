import { Asset } from '@/lib/types/type';

export const ASSETS: Asset[] = [
  {
    id: '1',
    name: 'PUDGY PENGUINS',
    image: 'https://picsum.photos/id/1062/200/200',
    originalPrice: 200000,
    ticketCost: 10,
    type: 'NFT'
  },
  {
    id: '2',
    name: '10 SOL',
    image: 'https://picsum.photos/id/1070/200/200', // Placeholder for SOL logo
    originalPrice: 200000,
    ticketCost: 10,
    type: 'TOKEN'
  },
  {
    id: '3',
    name: 'WORLD OF WOMEN',
    image: 'https://picsum.photos/id/1027/200/200',
    originalPrice: 200000,
    ticketCost: 10,
    type: 'NFT'
  },
  {
    id: '4',
    name: '1 BTC',
    image: 'https://picsum.photos/id/1055/200/200', // Placeholder for BTC
    originalPrice: 200000,
    ticketCost: 10,
    type: 'TOKEN'
  },
  {
    id: '5',
    name: 'GEMESIS',
    image: 'https://picsum.photos/id/1078/200/200',
    originalPrice: 200000,
    ticketCost: 10,
    type: 'NFT'
  }
];

export const MARQUEE_TEXTS = [
  "NFTS STARTING FROM JUST $10!",
  "JOIN THE WAVE",
  "MORE LIQUID THAN OPENSEA",
  "START SELLING ON RAFLUX",
  "PROVABLY FAIR ON-CHAIN",
  "INSTANT SETTLEMENT"
];

export const PARTNERS = [
    { name: "PUDGY PENGUINS", img: "https://picsum.photos/id/101/100/100" },
    { name: "MOONBIRDS", img: "https://picsum.photos/id/102/100/100" },
    { name: "DOODLES", img: "https://picsum.photos/id/103/100/100" },
    { name: "MILADY", img: "https://picsum.photos/id/104/100/100" },
    { name: "AZUKI", img: "https://picsum.photos/id/105/100/100" },
];

export const CHAINS = [
    { name: "USDC ON BASE", icon: "S", color: "blue" },
    { name: "CBBTC ON BASE", icon: "B", color: "orange" },
    { name: "WETH ON BASE", icon: "E", color: "purple" },
    { name: "WBTC ON BASE", icon: "B", color: "orange" },
    { name: "BSX ON BASE", icon: "X", color: "blue" },
];

export const FEATURES = [
    { 
        title: "NFT TICKETS YOU CONTROL",
        desc: "Every ticket is minted as an NFT on-chain. You can buy just one or as many as you want."
    },
    { 
        title: "MORE TICKETS, HIGHER ODDS",
        desc: "Each ticket is an entry. The more you hold, the better your chance to win."
    },
    { 
        title: "FAIRNESS GUARANTEED BY CHAINLINK VRF",
        desc: "Even if you buy many tickets, the winner is always chosen randomly and provably fair using Chainlink VRF."
    }
];

export const LIVE_RAFFLES = [
    {
        id: 1,
        name: "Pudgy Penguins #7105",
        image: "https://picsum.photos/id/237/400/400",
        endsIn: "13D : 02H : 04M : 24S",
        tickets: 5
    },
    {
        id: 2,
        name: "Pudgy Penguins #7105",
        image: "https://picsum.photos/id/238/400/400",
        endsIn: "13D : 02H : 04M : 24S",
        tickets: 5
    },
    {
        id: 3,
        name: "Pudgy Penguins #7105",
        image: "https://picsum.photos/id/239/400/400",
        endsIn: "13D : 02H : 04M : 24S",
        tickets: 5
    }
]
