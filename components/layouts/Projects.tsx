"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import Section from "@/components/common/Section";
import Wrapper from "@/components/common/Wrapper";
import { TitleSection } from "@/components/common/Title";
import ProjectCard from "@/components/cards/ProjectCard";
import Description from "@/components/common/Description";

import { projects } from "@/constants";

const Projects = () => {
  return (
    <Section id="projects">
      <Wrapper styles="!flex-col">
        <div className="flex justify-center items-center flex-col lg:max-w-3xl text-center">
          <TitleSection>Projects</TitleSection>
          <Description>
            At MicroTech, we specialize in turning visions into captivating
            digital realities. From the initial spark of an idea to the final
            product, we take a holistic approach, ensuring that every aspect
            aligns seamlessly to deliver a cohesive and impactful result.
          </Description>
        </div>

        <div className="flex flex-center justify-center flex-wrap gap-5">
          {[
            "all",
            "frontend",
            "backend",
            "fullstack",
            "mobile",
            "Software",
          ].map((category, key) => (
            <Button
              key={key}
              className="capitalize"
              variant={category == "all" ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 space-y-4">
          {projects.map((project, key) => (
            <ProjectCard
              key={key}
              title={project.title}
              image={project.img}
              description={project.description}
              github={project.domain}
              href={project.href}
            />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Projects;
