"use client"

import BrandSection from "@/components/brand/BrandSection";
import FAQ from "@/components/faq/FAQ";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import LayerHeader from "@/components/layerHeader/LayerHeader";
import PR from "@/components/pr/PR";
import Pricing from "@/components/pricing/Pricing";
import UpgradeSection from "@/components/upgrade/UpgradeSection";
import { useEffect, useState } from "react";
import Up from '../assets/linear_arrow_up.svg'
import Image from "next/image";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > window.innerHeight) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <LayerHeader />
      <BrandSection />
      <Features/>
      <PR/>
      <Pricing />
      <FAQ />
      <div className="relative">
        <UpgradeSection/>
      </div>
      <Footer/>

      {showDropdown && (
        <div 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-4 cursor-pointer p-2 rounded-full shadow-md"
        >
          <Image src={Up} alt="Scroll to top" />
        </div>
      )}
    </main>
  );
}