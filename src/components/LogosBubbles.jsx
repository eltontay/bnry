import React from "react";
import { LOGOS } from "@/common/constant";
import { Parallax } from "./Parallax";
import Image from "next/image";

const LogosBubbles = ({ flowDirection = "y" }) => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row lg:space-x-10">
      <Parallax speed={flowDirection == "y" ? -3 : -6} className={"w-full lg:w-1/2 sm:ms-20 md:ms-60 self-start lg:self-end lg:ms-0 mb-5"} flowDirection={flowDirection}>
        <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
          {LOGOS.map((logo, index) => {
            if (index < LOGOS.length / 2) {
              return (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="inline-block aspect-square"
                  width={flowDirection == "y" ? 200 : 100}
                  height={flowDirection == "y" ? 200 : 100}
                />
              );
            }
          })}
        </div>
      </Parallax>
      <Parallax
        speed={flowDirection == "y" ? 3 : 6}
        className={"w-full lg:w-1/2 -ms-60 sm:-ms-0 lg:-mt-40 self-end lg:self-start"}
        flowDirection={flowDirection}
      >
        <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
          {LOGOS.map((logo, index) => {
            if (index >= LOGOS.length / 2) {
              return (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="inline-block aspect-square"
                  width={flowDirection == "y" ? 200 : 100}
                  height={flowDirection == "y" ? 200 : 100}
                />
              );
            }
          })}
        </div>
      </Parallax>
    </div>
  );
};

export default LogosBubbles;
