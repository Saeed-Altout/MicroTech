import React from "react";

import { FaGithub, FaPhone, FaTelegram } from "react-icons/fa";

import { NavigationMenuList } from "@/components/ui/navigation-menu";

import { ItemIcon } from "@/components/navbar/Item";

const MenuIcons = () => {
  return (
    <NavigationMenuList className="hidden lg:flex justify-center items-center">
      <ItemIcon href="/" label="Github">
        <FaGithub size={20} />
      </ItemIcon>
      <ItemIcon href="/" label="Telegram">
        <FaTelegram size={20} />
      </ItemIcon>
      <ItemIcon href="/" label="Call Us">
        <FaPhone size={20} />
      </ItemIcon>
    </NavigationMenuList>
  );
};

export default MenuIcons;
