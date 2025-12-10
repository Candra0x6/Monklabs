import { Asset } from '@/lib/types/type';

export const ASSETS: Asset[] = [
  {
    id: '1',
    name: 'PUDGY PENGUINS',
    image: '/nft-assets/pudgy_penguins.svg',
    originalPrice: 200000,
    ticketCost: 10,
    type: 'NFT'
  },
  {
    id: '2',
    name: '1 BTC',
    image: '/nft-assets/bitcoin.svg', // Placeholder for SOL logo
    originalPrice: 200000,
    ticketCost: 10,
    type: 'TOKEN'
  },
  {
    id: '3',
    name: 'DOODLES',
    image: '/nft-assets/doodles.svg',
    originalPrice: 200000,
    ticketCost: 10,
    type: 'NFT'
  },
  {
    id: '4',
    name: '10 SOL',
    image: '/nft-assets/sol.svg', // Placeholder for BTC
    originalPrice: 200000,
    ticketCost: 10,
    type: 'TOKEN'
  },
  {
    id: '5',
    name: 'GEMESIS',
    image: '/nft-assets/gemsis.svg',
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

export const NFT_DATA = [
    { name: "PUDGY PENGUINS", img: "/nft-assets/pudgy_penguins.svg" },
    { name: "MOONBIRDS", img: "/nft-assets/moonbirds.svg" },
    { name: "DOODLES", img: "/nft-assets/doodles.svg" },
    { name: "MILADY", img: "/nft-assets/milady.svg" },
    { name: "AZUKI", img: "/nft-assets/azuki.svg" },
];

export const TOKEN_DATA = [
    { name: "CBTC ON BASE", img: "/nft-assets/bitcoin.svg" },
    { name: "WETH ON BASE", img: "/nft-assets/ethereum.svg" },
    { name: "WBTC ON BASE", img: "/nft-assets/wbtc.svg" },
    { name: "USDC ON BASE", img: "/nft-assets/usdc.svg" },
    { name: "BSK ON BASE", img: "/nft-assets/bsk.svg" },
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
        image: "/nft-assets/pudgy_penguins.svg",
        endsIn: "13D : 02H : 04M : 24S",
        tickets: 5
    },
    {
        id: 2,
        name: "Pudgy Penguins #7105",
        image: "/nft-assets/pudgy_penguins.svg",
        endsIn: "13D : 02H : 04M : 24S",
        tickets: 5
    },
    {
        id: 3,
        name: "Pudgy Penguins #7105",
        image: "/nft-assets/pudgy_penguins.svg",
        endsIn: "13D : 02H : 04M : 24S",
        tickets: 5
    }
]
