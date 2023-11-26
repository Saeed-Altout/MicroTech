import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import logo from "@/public/logoIcon.svg";
interface Props {
  title: string;
  image: StaticImageData;
  description: string;
  github: string;
  href: string;
}

const ProjectCard = ({ title, image, description, github, href }: Props) => {
  return (
    <Card className="relative overflow-hidden group border-0 w-full !bg-transparent">
      <CardHeader className="!p-0">
        <div className="h-fit w-full">
          <Image
            src={logo}
            alt="logo"
            width={50}
            className="absolute top-10 left-5 group-hover:block hidden duration-300 ease-linear"
          />
          <Image
            src={image}
            className="w-full h-full rounded-t-md object-cover"
            alt={title}
          />
        </div>
      </CardHeader>

      <CardContent className="absolute w-full duration-300 ease-linear bottom-0 left-0 bg-black-100  border-t-0 border-black-400 pt-5 rounded-md rounded-t-none translate-y-full group-hover:translate-y-0">
        <CardTitle className="text-white w-full text-3xl capitalize font-semibold tracking-wider">
          {title}
        </CardTitle>

        <div className="mt-10 flex justify-between items-center text-white">
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
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
{
  /* <Card className="relative overflow-hidden group border-0 w-full !bg-transparent">
<CardHeader className="!p-0">
  <div className="h-fit w-full">
    <Image
      src={image}
      className="w-full h-full rounded-t-md object-cover"
      alt={title}
    />
  </div>
</CardHeader>

<CardContent className="absolute w-full transit bottom-0 left-0 bg-black-100  border-t-0 border-black-400 pt-5 rounded-md rounded-t-none translate-y-full group-hover:translate-y-0">
  <CardTitle className="text-white w-full text-3xl capitalize font-semibold tracking-wider py-2">
    {title}
  </CardTitle>

  <div className="mt-10 flex justify-between items-center text-white">
    <Link
      href={github}
      target="_blank"
      className="flex-center gap-2 cursor-pointer"
    >
      Github
      <FaGithub size={20} />
    </Link>
    <Link
      href={href}
      target="_blank"
      className="flex-center gap-2 cursor-pointer"
    >
      Privew
      <FiArrowUpRight size={20} />
    </Link>
  </div>
</CardContent>
</Card> */
}
