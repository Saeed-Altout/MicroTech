import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import mobile from "@/public/services/mobile.svg";
import web from "@/public/services/web.svg";
import uiux from "@/public/services/ui&ux.svg";
const Services = () => {
  const services = [
    {
      icon: web,
      title: "Website Development",
      descraption:
        "Creating stunning and functional websites that represent your brand and drive results.",
    },
    {
      icon: uiux,
      title: "UX & UI Design",
      descraption:
        "Crafting seamless and user-friendly experiences that captivate your audience.",
    },
    {
      icon: mobile,
      title: "Application Development",
      descraption:
        "Building applications that stand out, meet user needs, and drive business growth.",
    },
  ];
  return (
    <section className="hero py-20">
      <div className="container mx-auto gap-10 flex justify-between items-center flex-col">
        <div className="lg:max-w-2xl text-center mx-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl leading-[50px] font-semibold">Services</h1>
          <p className="leading-8 font-medium text-neutral-600 mb-10">
            Unleash the potential of your business with MicroTech Solutions. As
            a new entrant, we bring fresh energy and a unique perspective to the
            world of digital design and development.
          </p>
        </div>
        <div className="grid grid-flow-row lg:grid-cols-3 gap-10 w-full grid-cols-1 md:grid-cols-2 ">
          {services.map(({ icon, title, descraption }) => (
            <div
              key={title}
              className="border border-neutral-950 rounded-md p-5 flex flex-col gap-4"
            >
              <Image src={icon} alt={title} width={60} />
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="text-neutral-600 leading-8">{descraption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
