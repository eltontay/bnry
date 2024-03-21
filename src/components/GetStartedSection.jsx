import React from "react";
import WrapperContent from "./WrapperContent";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { GET_STARTED_ITEMS } from "@/common/constant";

const GetStartedSection = () => {
  return (
    <section className="text-white bg-enterprise bg-no-repeat bg-cover">
      <WrapperContent>
        <div className="py-32 flex flex-col lg:flex-row lg:space-x-20 space-y-10">
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:items-start lg:text-start space-y-10">
            <h1 className="text-5xl font-semibold bg-gradient-to-b w-fit from-black/10 via-white to-white text-transparent bg-clip-text">
              Get Started
            </h1>
            <p className="mt-2 text-[silver]">
              Become part of the $BNRY revolution. Whether you&apos;re an
              industry player, investor, or enthusiast, embrace the future of
              decentralized connectivity. Join us and redefine the possibilities
              within The Binary Holdings ecosystem. The power of $BNRY
              awaits—innovate, transact, and connect like never before.
            </p>
            <Button
              className="bg-gradient-to-b text-base w-fit from-black/50 to-white border border-white px-10 py-6 font-semibold hover:to-black/50 hover:bg-opacity-10 hover:text-white"
              radius="full"
            >
              Learn More
            </Button>
          </div>
          <div className="w-full lg:w-2/3 grid lg:grid-cols-2">
            {GET_STARTED_ITEMS.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    "flex flex-col py-8 lg:p-8 space-y-4 border-b-1 lg:border border-white" +
                    " lg:odd:ps-0 lg:odd:border-l-0" +
                    " lg:even:border-r-0" +
                    (index < 2 ? " lg:border-t-0" : " lg:border-b-0")
                  }
                >
                  <Image
                    alt="icon"
                    src={item.icon_src}
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <p className="text-[silver]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default GetStartedSection;
