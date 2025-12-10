import { BrowseReflix } from "@/components/browse-reflix";
import { Footer } from "@/components/footer-section";
import { Hero } from "@/components/hero-section/hero";
import { SectionFeatures } from "@/components/section-features";
import { SectionLiveRaffles } from "@/components/section-live-raffles";
import { SectionMission } from "@/components/section-mission";
import { SectionSellers } from "@/components/section-sellers";


export default function Home() {
  return (
    <>
      <Hero />
      <SectionMission />
      <SectionSellers />
      <SectionFeatures />
      <SectionLiveRaffles />
      <BrowseReflix />
      <Footer />
    </>
  );
}
