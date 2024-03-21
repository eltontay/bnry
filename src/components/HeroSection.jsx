"use client";

import DynamicBubblesBackground from "./DynamicBubblesBackground";
import WrapperContent from "./WrapperContent";
import LogosBubbles from "./LogosBubbles";
import { Button, Chip } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative lg:h-[1000px] text-white bg-hero bg-no-repeat bg-cover overflow-hidden">
      <WrapperContent className={"flex flex-col h-full"}>
        <div className="w-full grid grid-cols-3 h-full gap-x-10 pb-10 sm:pb-0">
          <div className="col-span-3 lg:col-span-2 flex flex-col items-center lg:items-start justify-center pt-32 pb-10 lg:py-5 lg:h-screen space-y-4">
            <Chip className="bg-black text-white py-4">$BNRY</Chip>
            <h1 className="text-3xl lg:text-6xl font-bold mb-4 leading-tight text-center lg:text-start">
              Explore the Power of <i className="text-black">$BNRY</i>:
              Unleashing Decentralized Possibilities
            </h1>
            <p className="mb-6 text-base text-center lg:text-start">
              Welcome to the heart of innovation—The $BNRY Token. Embark on a
              journey into a new era of decentralized connectivity within The
              Binary Holdings ecosystem. $BNRY isn&apos;t just a cryptocurrency;
              it&apos;s a dynamic force driving transactions and interactions
              across diverse industries through The Binary Network.
            </p>
            <Button
              className="bg-gradient-to-b from-black/50 to-white border border-white px-10 py-6 font-semibold text-base hover:to-black/50 hover:bg-opacity-10 hover:text-white"
              radius="full"
            >
              Learn More
            </Button>
          </div>
          <div className="hidden lg:block h-full col-span-1">
            <LogosBubbles />
          </div>
          <div className="h-full col-span-3 lg:hidden">
            <LogosBubbles flowDirection="x"/>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default HeroSection;
