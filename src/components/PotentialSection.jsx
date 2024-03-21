import React from "react";
import WrapperContent from "./WrapperContent";
import { Button } from "@nextui-org/react";
import { POTENTIAL_USE_CASES } from "@/common/constant";
import Card from "./Card";

const PotentialSection = () => {
  return (
    <section className="w-full text-white">
      <WrapperContent>
        <div className="flex flex-col py-24 mt-10 space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-semibold bg-gradient-to-b w-fit from-black/10 via-white to-white text-transparent bg-clip-text">
              Potential use cases
            </h1>
            <Button
              className="hover:bg-gradient-to-b w-fit hover:from-black/10 hover:text-black hover:to-white border border-white px-10 py-6 font-semibold text-base text-white bg-transparent transition-all duration-150"
              radius="xl"
            >
              View All
            </Button>
          </div>
          <p className="text-[silver]">
            In egestas volutpat nam laoreet amet nullam id tincidunt. Tellus
            iaculis est vestibulum diam sagittis vitae. Consequat at
            pellentesque lacinia a vestibulum massa. In vitae et mi sit interdum
            netus.
          </p>
          <div className="grid lg:grid-cols-3 gap-4">
            {POTENTIAL_USE_CASES.map((useCase, index) => {
              return (
                <Card
                  key={index}
                  title={useCase.title}
                  description={useCase.description}
                />
              );
            })}
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default PotentialSection;
