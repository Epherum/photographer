import HeroSection from "./home/components/HeroSection/HeroSection";
import StudioSection from "./home/components/StudioSection/StudioSection";
import ParallaxVideo from "./home/components/ParallaxVideo/ParallaxVideo";
import PortfolioSection from "./home/components/PortfolioSection/PortfolioSection";
import TestimonialSection from "./home/components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StudioSection />
      <ParallaxVideo />
      <PortfolioSection />
      <TestimonialSection />
    </>
  );
}
