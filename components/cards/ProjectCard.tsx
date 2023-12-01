import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  image: StaticImageData;
  description: string;
  github: string;
  href: string;
}

const ProjectCard = ({ title, image, description, github, href }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden relative group">
      <Image
        src={image}
        alt="title"
        className="w-full grayscale group-hover:grayscale-0 transition cursor-pointer"
      />
      <div className="w-full z-10 left-0 p-4 absolute bottom-[-200px] group-hover:bottom-0 transition bg-neutral-950 bg-opacity-60">
        <h4 className="text-white text-xl font-semibold">{title}</h4>
        <p className="text-white pt-1">{description}</p>
        <div className="flex justify-between items-center mt-5 text-white">
          <Link
            href={github}
            target="_blank"
            className="flex flex-center gap-2 cursor-pointer"
          >
            Github
            <FaGithub size={20} />
          </Link>
          <Link
            href={href}
            target="_blank"
            className="flex flex-center gap-2 cursor-pointer"
          >
            Privew
            <FiArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
