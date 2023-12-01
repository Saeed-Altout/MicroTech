import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Section from "@/components/common/Section";
import Wrapper from "@/components/common/Wrapper";
import { TitleSection } from "@/components/common/Title";
import Descraption from "@/components/common/Description";

const Faqs = () => {
  return (
    <Section id="faqs" styles="bg-secondary">
      <Wrapper styles="!flex-col">
        <div className="flex justify-center items-center flex-col lg:max-w-3xl text-center">
          <TitleSection>FAQ</TitleSection>
          <Descraption>Most frequently asked questions</Descraption>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Who is MicroTech?
            </AccordionTrigger>
            <AccordionContent className="leading-8 tracking-wide font-semibold text-neutral-700">
              MicroTech is a leading software company specializing in web and
              app development, as well as UI/UX design.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              What services do we provide?
            </AccordionTrigger>
            <AccordionContent className="leading-8 tracking-wide font-semibold text-neutral-700">
              <ul className="flex justify-start items-start flex-col gap-3">
                <li className="flex justify-start items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" />
                  <p>Website Development</p>
                </li>
                <li className="flex justify-start items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" />
                  <p>UX & UI Design</p>
                </li>
                <li className="flex justify-start items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" />
                  <p>Application Development</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Wrapper>
    </Section>
  );
};

export default Faqs;
