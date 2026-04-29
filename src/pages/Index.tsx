import { useEffect } from "react";
import HeartsRain from "@/components/HeartsRain";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Queen's Gifts — Romantic Gifts of Love & Peace";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Queen's Gifts — handcrafted romantic gifts including teddy bears, couple bracelets and Valentine surprise boxes. Soft, elegant, made with love."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeartsRain />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
