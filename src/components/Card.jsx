import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Card = ({ title = "", description = "" }) => {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col space-y-4 border border-transparent hover:border-white transition-all duration-250"
      style={{
        backgroundImage:
          "linear-gradient(#1e1e1e, #141414), linear-gradient(84deg, rgba(3, 2, 9, 0), rgba(3, 2, 9, .17))",
      }}
    >
      <Image alt="icon" src={"/folder-open.png"} loading="lazy" width={50} height={50}/>
      <h1 className="font-semibold">{title}</h1>
      <p className="text-[silver] text-sm">{description}</p>
      <Button
        className="bg-gradient-to-b text-sm w-fit from-black/50 to-white border border-white px-6 py-4 font-semibold hover:to-black/50 hover:bg-opacity-10 hover:text-white"
        radius="full"
      >
        Learn More
      </Button>
    </div>
  );
};

export default Card;
