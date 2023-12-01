import React from "react";

import { NavigationMenuList } from "@/components/ui/navigation-menu";
import Item from "@/components/navbar/Item";

import { navLinks } from "@/constants";

const MenuMobile = () => {
  return (
    <div className="lg:hidden absolute top-[80px] w-full bg-white shadow-xl py-12 left-0 right-0">
      <NavigationMenuList className="flex justify-center items-center flex-col gap-5">
        {navLinks.map(({ lable, href }) => (
          <Item key={lable} href={href} label={lable} />
        ))}
      </NavigationMenuList>
    </div>
  );
};

export default MenuMobile;
