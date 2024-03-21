import React from "react";
import WrapperContent from "./WrapperContent";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { WHY_CHOOSE } from "@/common/constant";

const WhyChooseSection = () => {
  return (
    <section className="w-full text-white">
      <WrapperContent>
        <div className="w-full rounded-3xl bg-why-choose bg-no-repeat relative flex flex-col space-y-10 lg:flex-row p-10 lg:p-16 bg-cover items-center">
          <Image
            src={"/line-glow.webp"}
            alt=""
            className="lg:h-full w-full absolute lg:top-0 bottom-0 lg:bottom-auto right-0 z-0"
            width={1200}
            height={1000}
          ></Image>
          <div className="flex flex-col w-full lg:w-1/2 space-y-10 lg:space-y-14">
            <h1 className="text-4xl font-bold">Why Choose $BNRY?</h1>
            <h2 className="text-base leading-normal">
              In a landscape crowded with tokens, $BNRY stands out for three
              reasons
            </h2>
            <ul className="flex flex-col space-y-10">
              {WHY_CHOOSE.map((feature, index) => {
                return (
                  <li key={index} className="flex items-start space-x-4">
                    <Image
                      src="/Ellipse-icon.svg"
                      alt={""}
                      className=" rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,1)]"
                      width={25}
                      height={25}
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-[silver]">
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
          <div className="w-1/2 flex justify-center">
            <span className="rounded-full bg-white p-14 z-10 text-black text-7xl aspect-square text-center flex items-center shadow-[0_0_100px_2px_rgba(255,255,255,1)]">BNRY</span>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default WhyChooseSection;
