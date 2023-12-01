import React from "react";
import Image from "next/image";

import imageHero from "@/public/imageHero.svg";

import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import Descraption from "@/components/common/Description";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="container flex justify-between items-center gap-10 flex-col lg:flex-row">
        <div className="flex justify-start items-start flex-col gap-5 lg:max-w-3xl">
          <Title>Crafting Innovative Digital Solutions</Title>
          <Descraption>
            At MicroTech, we&apos;re dedicated to transforming your ideas into
            powerful digital experiences. As a leading application design and
            development company, we specialize in creating customized,
            cutting-edge solutions that propel your business forward. Discover
            Our Expertise
          </Descraption>
        </div>

        <Image
          src={imageHero}
          alt="Image Hero"
          className="w-full h-full object-contain max-w-xl"
        />
      </div>
    </Section>
  );
};

export default Hero;
