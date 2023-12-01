import React from "react";
import Image from "next/image";

import { TitleSection } from "@/components/common/Title";

import Section from "@/components/common/Section";
import Wrapper from "@/components/common/Wrapper";
import Descraption from "@/components/common/Description";
import FeatureCard from "@/components/cards/FeatureCard";

import imageAbout from "@/public/imageAbout.svg";
import { features } from "@/constants";

const About = () => {
  return (
    <Section id="about">
      <Wrapper styles="md:items-start">
        <div className="flex justify-start items-start flex-col lg:max-w-3xl">
          <TitleSection>Who is MicroTech?</TitleSection>
          <Descraption>
            MicroTech is a leading software company specializing in web and app
            development, as well as UI/UX design.
          </Descraption>
          <Image
            src={imageAbout}
            alt="about Image"
            className="w-full h-full object-contain max-w-xl mt-8 lg:mt-12"
          />
        </div>

        <div className="flex justify-center items-center flex-col gap-10 max-w-2xl">
          {features.map(({ title, description }) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default About;
