import CaroulselSection from "@/components/sections/carousel-section";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";


export default function Home() {
  return (
    <div className="px-2 pt-14 md:pt-20 md:px-28">
      <HeroSection />
      <CaroulselSection />
      <ServicesSection />
    </div>
  );
}
