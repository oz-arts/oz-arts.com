/**
 * DESIGN: Dark Atelier — Page d'accueil OzArt
 * Assemblage de toutes les sections dans un flux vertical cohérent.
 * Fond noir absolu, accents cuivrés, galerie d'art industrielle.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import RealisationsSection from "@/components/RealisationsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <RealisationsSection />
      <ProcessSection />
      <AboutSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
}
