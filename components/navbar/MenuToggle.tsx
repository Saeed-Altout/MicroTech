import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FiMenu, FiX } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { useStateContext } from "@/context/ContextProvider";

const MenuToggle = () => {
  const { menuActive, setMenuActive } = useStateContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          onClick={() => setMenuActive(!menuActive)}
          className="lg:hidden"
        >
          {menuActive ? <FiX size={20} /> : <FiMenu size={20} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{menuActive ? "Close Menu" : "Open Menu"}</TooltipContent>
    </Tooltip>
  );
};

export default MenuToggle;
