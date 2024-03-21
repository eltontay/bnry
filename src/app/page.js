"use client";

import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
// import DynamicBubblesBackground from "../components/DynamicBubblesBackground";
import WhyChooseSection from "@/components/WhyChooseSection";
import PotentialSection from "@/components/PotentialSection";
import GetStartedSection from "@/components/GetStartedSection";

export default function Home() {
  return (
    <>
      {/* <DynamicBubblesBackground /> */}
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <PotentialSection />
      <GetStartedSection />
    </>
  );
}
