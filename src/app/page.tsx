import CaroulselSection from "@/components/sections/carousel-section";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import TopDestinationsSection from "@/components/sections/top-destinations-section";


export default function Home() {
  return (
    <div className="px-2 pt-14 md:pt-20 md:px-28">
      <div className="w-3/4 h-1/2 absolute rounded-full -z-10 left-0 top-0 -translate-x-1/2 -translate-y-1/2
        bg-[radial-gradient(circle_at_center,#FF5722,transparent)] opacity-40 blur-3xl
        overflow-x-hidden
        "></div>
      <div className="w-1/3 h-1/3 absolute rounded-full -z-10 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
        bg-[radial-gradient(circle_at_center,#FACD49,transparent)] opacity-40 blur-3xl
        overflow-x-hidden
        "></div>
      <HeroSection />
      <CaroulselSection />
      <ServicesSection />
      <TopDestinationsSection />
    </div>
  );
}
