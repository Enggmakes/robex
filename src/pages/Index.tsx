import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import GallerySection from "@/components/GallerySection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechStackSection />
      <GallerySection />
      <ArchitectureSection />
      <ResearchSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
