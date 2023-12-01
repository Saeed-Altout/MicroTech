import Image from "next/image";
import React from "react";

import logoIconDark from "@/public/logoIconDark.svg";

import { TitleArticle } from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import Section from "@/components/common/Section";
import Descraption from "@/components/common/Description";
import Box from "@/components/common/Box";
import { Separator } from "@/components/ui/separator";

const StartProject = () => {
  return (
    <Section id="start-project" styles="bg-secondary">
      <div className="container flex justify-between items-center flex-col gap-10">
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-5">
          <Image src={logoIconDark} alt="Logo" width={80} height={80} />
          <div className="flex justify-start items-start flex-col">
            <TitleArticle>
              Embark on an exciting journey of creativity and accomplishment
              with us
            </TitleArticle>
            <Descraption>
              Combining the power of design, engineering, and project management
              to create transformative digital experiences. They invite you to
              join them on their journey and discover how they can help bring
              your digital ideas to life.
            </Descraption>
          </div>
        </div>
        <Separator />
        <Box>
          <Descraption>Let's start your project now!</Descraption>
          <Button>Start Project</Button>
        </Box>
      </div>
    </Section>
  );
};

export default StartProject;
