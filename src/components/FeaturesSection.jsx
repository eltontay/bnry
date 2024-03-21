import React from "react";
import WrapperContent from "./WrapperContent";
import { Button } from "@nextui-org/react";
import { LOGOS, FEATURES } from "@/common/constant";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="bg-fixed bg-featured text-white">
      <WrapperContent className={"py-24"}>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 py-16 mt-10 gap-y-10">
            <h1 className="col-span-2 block lg:sticky h-fit top-20 text-5xl font-semibold bg-gradient-to-b w-fit from-black/10 via-white to-white text-transparent bg-clip-text">
              Why $BNRY?
            </h1>
            <div className="col-span-3 flex flex-col">
              <h2 className="text-3xl leading-normal">
                Unlock the potential of decentralized innovation with $BNRY
              </h2>
              <p className="mt-2 text-[silver]">
                The native token empowering our ecosystem. $BNRY isn&apos;t just
                a cryptocurrency; it&apos;s a dynamic force driving transactions
                and interactions across diverse industries through The Binary
                Network. Seamlessly traverse the realms of social media,
                finance, telecommunications, eWallets, healthcare, and more. As
                a utility token, $BNRY isn&apos;t confined to one
                industry—it&apos;s the bridge connecting a multitude, making it
                resilient, diverse, and truly unique.
              </p>
              <Button
                className="bg-gradient-to-b w-fit mt-16 from-black/50 to-white border border-white px-10 py-6 font-semibold text-base hover:to-black/50 hover:bg-opacity-10 hover:text-white"
                radius="full"
              >
                Learn More
              </Button>
              <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-10 mt-16 flex-wrap">
                {LOGOS.map((logo, index) => {
                  return (
                    <span
                      className="rounded-full relative aspect-square bg-black"
                      key={logo.name}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        className="inline-block"
                        fill
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 py-16 gap-y-10">
            <h1 className="col-span-2 block lg:sticky h-fit top-20 text-5xl font-semibold bg-gradient-to-b w-fit from-black/10 via-white to-white text-transparent bg-clip-text">
              Key Features
            </h1>
            <div className="col-span-3 flex flex-col">
              <div className="col-span-3 flex flex-col">
                <h2 className="text-3xl leading-normal">
                  Amongst a myriad of features, $BNRY is best known for the
                  following
                </h2>
                <ul className="py-16 flex flex-col space-y-10">
                  {FEATURES.map((feature, index) => {
                    return (
                      <li key={index} className="flex items-start space-x-4 border-b-1 pb-10 border-[silver]">
                        <Image
                          src="/Ellipse-icon.svg"
                          alt={""}
                          className=" rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,1)]"
                          width={25}
                          height={25}
                        />
                        <div>
                          <h3 className="text-xl font-semibold">
                            {feature.title}
                          </h3>
                          <p className="mt-2 text-[#646366]">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  className="bg-gradient-to-b w-fit from-black/50 to-white border border-white px-10 py-6 font-semibold text-base hover:to-black/50 hover:bg-opacity-10 hover:text-white"
                  radius="full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default FeaturesSection;
