import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import imageHero from "@/public/imageHero.svg";
const Hero = () => {
  return (
    <section className="hero py-20">
      <div className="container mx-auto gap-10 flex justify-between items-center flex-col lg:flex-row">
        <div className="lg:max-w-2xl flex flex-col gap-5 justify-start items-start">
          <h1 className="text-4xl leading-[50px] md:text-5xl md:leading-[60px] lg:text-6xl lg:!leading-[70px] font-semibold">
            Crafting Innovative Digital Solutions
          </h1>
          <p className="leading-8 font-medium text-neutral-600">
            At MicroTech, we&apos;re dedicated to transforming your ideas into
            powerful digital experiences. As a leading application design and
            development company, we specialize in creating customized,
            cutting-edge solutions that propel your business forward. Discover
            Our Expertise
          </p>
          <Button>Start Project</Button>
        </div>
        <div>
          <Image
            src={imageHero}
            alt="Image Hero"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
