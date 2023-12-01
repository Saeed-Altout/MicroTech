"use client";
import React from "react";

import { useStateContext } from "@/context/ContextProvider";

import { NavigationMenu } from "@/components/ui/navigation-menu";

import Logo from "@/components/common/Logo";
import MenuToggle from "@/components/navbar/MenuToggle";
import MenuDesktop from "@/components/navbar/MenuDesktop";
import MenuMobile from "@/components/navbar/MenuMobile";
import MenuIcons from "@/components/navbar/MenuIcons";

const Navbar = () => {
  const { menuActive } = useStateContext();
  return (
    <NavigationMenu className="bg-white container py-6">
      <Logo size={160} />
      <MenuDesktop />
      <MenuIcons />
      {menuActive && <MenuMobile />}
      <MenuToggle />
    </NavigationMenu>
  );
};

export default Navbar;
