# Monklabs Technical Test

A modern Next.js application built with React 19, TypeScript, Tailwind CSS, and advanced animations using GSAP and Three.js.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Candra0x6/Monklabs-Technical-Test.git
   cd monklabs-test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Start with `src/app/page.tsx` to modify the main page.

## Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create an optimized production build
- `npm start` - Run the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
.
├── components.json               # UI generator/config (e.g., shadcn/radix)
├── eslint.config.mjs             # ESLint config
├── next-env.d.ts                 # Next.js TypeScript helpers
├── next.config.ts                # Next.js configuration
├── package.json                  # Scripts and dependencies
├── postcss.config.mjs            # Tailwind/PostCSS config
├── tsconfig.json                 # TypeScript configuration
├── public/
│   └── nft-assets/               # Static assets, served from "/nft-assets"
└── src/
   ├── app/                      # App Router entry (layouts + routes)
   │   ├── globals.css           # Global styles
   │   ├── layout.tsx            # Root layout (Server Component)
   │   ├── layout-client.tsx     # Client-only helpers for layout
   │   └── page.tsx              # Home page route
   ├── components/               # Reusable UI and page sections
   │   ├── CornerMarkers.tsx
   │   ├── LoadingScreen.tsx
   │   ├── SectionPartners.tsx
   │   ├── TechCard.tsx
   │   ├── animations/           # Lightweight visual/animation pieces
   │   │   ├── decode-anim.tsx
   │   │   ├── gold-noise.tsx
   │   │   └── type-anim.tsx
   │   ├── browse-reflix/        # Composite "Browse" section
   │   │   ├── background-grid.tsx
   │   │   ├── bottom-section.tsx
   │   │   ├── carousel-button.tsx
   │   │   ├── carousel-controls.tsx
   │   │   ├── carousel-track.tsx
   │   │   ├── footer-decoration.tsx
   │   │   ├── header-content.tsx
   │   │   ├── index.tsx         # Section composer/export
   │   │   └── top-section.tsx
   │   ├── carousel-card/        # Card primitives for carousels
   │   │   ├── bid-button.tsx
   │   │   ├── card-header.tsx
   │   │   ├── countdown-timer.tsx
   │   │   ├── index.tsx         # Barrel exports
   │   │   ├── nft-content.tsx
   │   │   ├── progress-bar.tsx
   │   │   └── use-countdown.ts  # Hook used by timer
   │   ├── footer-section/
   │   │   ├── footer-header.tsx
   │   │   ├── footer-info-bar.tsx
   │   │   ├── footer-placeholder.tsx
   │   │   └── index.tsx
   │   ├── hero-section/         # Landing hero composition
   │   │   ├── asset-card.tsx
   │   │   ├── asset-grid.tsx
   │   │   ├── hero-footer.tsx
   │   │   ├── hero-header.tsx
   │   │   ├── hero-marquee.tsx
   │   │   ├── hero-pricing.tsx
   │   │   ├── hero-title.tsx
   │   │   ├── hero-visual.tsx
   │   │   └── hero.tsx
   │   ├── icons/                # SVG icons as React components
   │   │   ├── arrow-right.tsx
   │   │   ├── chevron-right.tsx
   │   │   ├── clock.tsx
   │   │   ├── discord.tsx
   │   │   ├── help-icon.tsx
   │   │   ├── line-vector.tsx
   │   │   ├── point.tsx
   │   │   ├── twitter.tsx
   │   │   └── usdt-icon.tsx
   │   ├── layout-navbar/
   │   │   ├── layout-client.tsx
   │   │   ├── main-content.tsx
   │   │   └── navbar.tsx
   │   ├── loading-screen/
   │   │   └── loading-screen.tsx
   │   ├── main-footer/
   │   │   ├── help-section.tsx
   │   │   ├── index.tsx
   │   │   ├── network-status.tsx
   │   │   └── social-links.tsx
   │   ├── marquee-section/
   │   │   ├── index.tsx
   │   │   └── marquee-item.tsx
   │   ├── section-empower/
   │   │   ├── background-stars.tsx
   │   │   └── index.tsx         # + other related files
   │   ├── section-features/     # Feature highlights (WIP)
   │   ├── section-live-raffles/ # Live raffles section (WIP)
   │   ├── section-mission/      # Mission section (WIP)
   │   ├── section-partners/     # Partners section (WIP)
   │   ├── section-sellers/      # Sellers section (WIP)
   │   ├── tech-card/            # Tech showcase card(s)
   │   └── ui/                   # Generic UI primitives
   ├── hooks/                    # Custom hooks used across sections
   │   ├── useBrowseCarousel.ts
   │   ├── useEmpowerAnimations.ts
   │   ├── useFooterMarquee.ts
   │   ├── useHeroAnimations.ts
   │   ├── useHorizontalScroll.ts
   │   ├── useMarqueeAnimations.ts
   │   ├── useMissionMarquee.ts
   │   └── useTechCardAnimations.ts
   └── lib/
      ├── utils.ts              # Misc helpers
      ├── contants/             # App constants (folder name as in repo)
      ├── types/                # Shared TypeScript types
      └── utils/                # Grouped utility modules
```

- App Router: `src/app` uses Server/Client Components (`layout.tsx`, `page.tsx`).
- Sections: Folders under `src/components/*-section/` compose the homepage.
- Hooks: All custom logic is colocated in `src/hooks/*` for reuse.
- Assets: Place static files in `public/` (served from `/`).
- Utilities: Common helpers and types live in `src/lib/`.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) - React meta-framework
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/)
- **3D Graphics:** [Three.js](https://threejs.org/) with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** [ESLint](https://eslint.org/)

## Features

- Modern Next.js App Router setup
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Custom animations and visual effects
- 3D rendering capabilities
- Responsive carousel components
- Accessible UI components via Radix UI

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Three.js Documentation](https://threejs.org/docs/)

## Deployment

The easiest way to deploy this app is with [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/) and connect your repository
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed with a live URL

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is proprietary and owned by Monklabs.
