import React from "react";
import Image from "next/image";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import logo from "@/public/logo.svg";

interface LogoProps {
  size: number;
}
const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Image src={logo} alt="Logo" width={size} />
      </TooltipTrigger>
      <TooltipContent>MicroTech</TooltipContent>
    </Tooltip>
  );
};

export default Logo;
