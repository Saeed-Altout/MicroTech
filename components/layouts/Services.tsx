import React from "react";

import Section from "@/components/common/Section";
import Wrapper from "@/components/common/Wrapper";
import Descraption from "@/components/common/Description";
import { TitleSection } from "@/components/common/Title";
import ServiceCard from "@/components/cards/ServiceCard";

import { services } from "@/constants";

const Services = () => {
  return (
    <Section id="services">
      <Wrapper styles="!flex-col">
        <div className="flex justify-center items-center flex-col lg:max-w-3xl text-center">
          <TitleSection>Services</TitleSection>
          <Descraption>
            Unleash the potential of your business with MicroTech Solutions. As
            a new entrant, we bring fresh energy and a unique perspective to the
            world of digital design and development.
          </Descraption>
        </div>

        <div className="grid grid-flow-row lg:grid-cols-3 gap-10 w-full grid-cols-1 md:grid-cols-2">
          {services.map(({ icon, title, descraption }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={descraption}
            />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Services;
