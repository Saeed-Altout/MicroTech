import React from "react";

import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import Box from "@/components/common/Box";
import Descraption from "@/components/common/Description";
import Logo from "@/components/common/Logo";
import Wrapper from "@/components/common/Wrapper";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-10">
      <Wrapper styles="!flex-col">
        <div className="gap-10 w-full flex justify-between items-center flex-col md:flex-row">
          <Logo size={180} />
          <Box>
            <Descraption>Stay Connected</Descraption>
            <div className="flex justify-between items-center gap-3">
              <FaFacebook size={20} />
              <FaTwitter size={20} />
              <FaLinkedin size={20} />
            </div>
          </Box>
        </div>

        <Separator />

        <div className="flex w-full justify-between items-center flex-col md:flex-row gap-10 ">
          <div className="flex justify-start items-center gap-4 flex-col md:flex-row">
            <div className="flex justify-start items-center gap-3">
              <FaEnvelope size={20} />
              <Descraption>microtech.softteam.com</Descraption>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaPhone size={20} />
              <Descraption>+963 996 697 253</Descraption>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaLocationArrow size={20} />
              <Descraption>Syria, Damascus</Descraption>
            </div>
          </div>

          <Descraption>© 2023 MicroTech. All rights reserved.</Descraption>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
