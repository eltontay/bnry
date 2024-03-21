"use client"
import WrapperContent from "./WrapperContent";
import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io";
import { useLenis } from "@studio-freight/react-lenis";
import { FOOTER_ITEMS } from "@/common/constant";

const Footer = () => {
  const lenis = useLenis(({ scroll }) => {
  });
  return (
    <footer className="py-14 bg-enterprise bg-no-repeat bg-cover text-white border-t">
      {/* Footer content goes here */}
      <WrapperContent>
        <div className="grid lg:grid-cols-2 w-full lg:space-y-0 space-y-10">
          <div className="w-full flex flex-col justify-between space-y-20">
            <h1 className="font-semibold text-xl">BNRY</h1>
            <div className="lg:w-1/2 flex flex-wrap gap-x-5 gap-y-5">
              {FOOTER_ITEMS.map((item, index) => {
                return (
                  <>
                    <Link key={index} href={item.url}>{item.title}</Link>
                    <p className="text-[silver]">/</p>
                  </>
                )
              })}
            </div>
          </div>
          <div className="w-full flex flex-col justify-between h-full items-end space-y-10 lg:space-y-0">
            <button onClick={() => {lenis.scrollTo("#hero", { lerp: 0.5 })}} href={"#hero"} className="w-fit flex p-2 text-2xl bg-white rounded-full text-black scroll-smooth"><IoMdArrowUp /></button>
            <span className="text-[silver] text-xs">© 2024 The Binary Holdings</span>
          </div>
        </div>
      </WrapperContent>
    </footer>
  );
};

export default Footer;
