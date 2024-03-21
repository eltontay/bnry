"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { HEADER_ITEMS } from "@/common/constant";
import WrapperContent from "./WrapperContent";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrollDown, setIsScrollDown] = React.useState(false);

  React.useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const checkIsDown = currentScrollY > previousScrollY ? true : false;

      if (checkIsDown !== isScrollDown) {
        setIsScrollDown(checkIsDown);
      }

      // Update previousScrollY for the next comparison
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollDown]);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={isScrollDown}
      className="lg:bg-transparent bg-black fixed text-white transition-all duration-500 px-6 md:px-20 lg:px-36 lx:px-80"
      maxWidth="full"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">BNRY</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex space-x-6" justify="start">
        <NavbarBrand className="flex-grow-0 me-16">
          <p className="font-bold text-inherit">BNRY</p>
        </NavbarBrand>
        {HEADER_ITEMS.map((item, index) => {
          return (
            <NavbarItem key={index}>
              <Link href={item.href} className="text-white">
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className="bg-black text-white">
        {HEADER_ITEMS.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" href="#" size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
