import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import imageHero from "@/public/imageHero.svg";
import imageAbout from "@/public/imageAbout.svg";
const About = () => {
  const features = [
    {
      title: "Our Vision",
      description:
        "we are a fresh face in the world of digital innovation. Our journey has just begun, but our aspirations are grand, our passion is unwavering, and our dedication is resolute.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is clear - to provide businesses with cutting-edge digital solutions that leave a lasting impact. We're here to help you navigate the complexities of the digital world, create beautiful and functional designs, and build applications that drive your success.",
    },
    {
      title: "Our Values",
      description:
        "Our core values are the foundation upon which we build relationships, create solutions, and drive our company forward.",
    },
    {
      title: "Our Promise",
      description:
        "We may be new, but we promise unwavering commitment to your success, a fresh perspective on digital solutions, and the unyielding pursuit of excellence.",
    },
  ];
  return (
    <section className="about py-20" id="about">
      <div className="container mx-auto gap-10 flex justify-between items-center lg:items-start flex-col lg:flex-row">
        <div className="lg:max-w-2xl flex flex-col gap-2 justify-start items-start">
          <h1 className="text-4xl leading-[50px] font-semibold">
            Who is MicroTech?{" "}
          </h1>
          <p className="leading-8 font-medium text-neutral-600 mb-10">
            MicroTech is a leading software company specializing in web and app
            development, as well as UI/UX design.
          </p>
          <Image src={imageAbout} alt="about Image" className="mx-auto" />
        </div>
        <div className="lg:max-w-2xl flex justify-center items-center gap-10 flex-wrap">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-neutral-950 rounded-md p-5"
            >
              <h3 className="py-3 text-xl font-semibold">{title}</h3>
              <p className="leading-8 text-neutral-600 font-normal">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
