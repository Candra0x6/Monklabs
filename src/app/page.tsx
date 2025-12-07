import BrowseReflix from "@/components/BrowseReflix";
import Footer from "@/components/Footer";
import { Hero } from "@/components/landing-paage/hero";
import { SectionFeatures } from "@/components/SectionFeatures";
import { SectionFuture } from "@/components/SectionFuture";
import { SectionLiveRaffles } from "@/components/SectionLiveRaffles";
import { SectionSellers } from "@/components/SectionSellers";

export default function Home() {
  return (
    <>

      <Hero />
      <SectionFuture />
      <SectionSellers />
      <SectionFeatures />
      <SectionLiveRaffles />
      <BrowseReflix />
      <Footer />
    </>
  );
}
