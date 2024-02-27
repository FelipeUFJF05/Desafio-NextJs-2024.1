import AboutUS from "@/components/about-us";
import HeroSection from "@/components/hero-section";
import KnowMembers from "@/components/know-members";
import OurProducts from "@/components/our-products";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-24 w-full md:p-0 min-h-screen mx-auto">
      <HeroSection />
      <OurProducts />
      <AboutUS />
      <KnowMembers />
    </div>
    
  )
}
