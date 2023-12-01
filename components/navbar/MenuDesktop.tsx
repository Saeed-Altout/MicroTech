import React from "react";

import { NavigationMenuList } from "@/components/ui/navigation-menu";
import Item from "@/components/navbar/Item";

import { navLinks } from "@/constants";

const MenuDesktop = () => {
  return (
    <NavigationMenuList className="lg:flex justify-between items-center hidden">
      {navLinks.map(({ lable, href }) => (
        <Item key={lable} href={href} label={lable} />
      ))}
    </NavigationMenuList>
  );
};

export default MenuDesktop;
