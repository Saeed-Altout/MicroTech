import React from "react";
import Link from "next/link";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useStateContext } from "@/context/ContextProvider";

interface ItemProps {
  href: string;
  label: string;
}

const Item: React.FC<ItemProps> = ({ href, label }) => {
  const { setMenuActive } = useStateContext();

  const onClick = () => {
    setMenuActive(false);
  };

  return (
    <NavigationMenuItem onClick={onClick}>
      {/* legacyBehavior passHref */}
      <Link href={href}>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} capitalize bg-transparent font-medium md:font-semibold`}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

interface ItemIconProps extends ItemProps {
  children: any;
}

export const ItemIcon: React.FC<ItemIconProps> = ({
  href,
  label,
  children,
}) => {
  return (
    <NavigationMenuItem>
      <Tooltip>
        <TooltipTrigger>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {children}
            </NavigationMenuLink>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </NavigationMenuItem>
  );
};

export default Item;
