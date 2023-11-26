"use client";
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";
import im1 from "@/public/projects/1.svg";
import im2 from "@/public/projects/2.svg";
import im3 from "@/public/projects/3.svg";
const Projects = () => {
  const projects = [
    {
      title: "MicroTech",
      img: im1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
    {
      title: "MicroTech",
      img: im2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias accusamus explicabo ullam pariatur sint eveniet doloribus, quidem enim consectetur magnam praesentium blanditiis consequuntur illo quibusdam exercitationem corporis",
      domain: "/",
      href: "/",
    },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto w-full">
        <div className="lg:max-w-4xl text-center mx-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl leading-[50px] font-semibold">Projects</h1>
          <p className="leading-8 font-medium text-neutral-600 mb-10">
            At MicroTech, we specialize in turning visions into captivating
            digital realities. From the initial spark of an idea to the final
            product, we take a holistic approach, ensuring that every aspect
            aligns seamlessly to deliver a cohesive and impactful result.
          </p>
        </div>
        <div className="flex flex-center gap-10 justify-center">
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

        <div className="mt-20 columns-1 md:columns-2 lg:columns-3 space-y-4">
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
      </div>
    </section>
  );
};

export default Projects;
