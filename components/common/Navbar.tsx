import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";
const Navbar = () => {
  const navLinks = [
    { lable: "home", href: "/" },
    { lable: "about us", href: "/about-us" },
    { lable: "services", href: "/services" },
    { lable: "projects", href: "/projects" },
    { lable: "testimonials", href: "/testimonials" },
    { lable: "contact us", href: "/contact-us" },
  ];

  return (
    <nav className="flex justify-between items-center container mx-auto py-6">
      <div className="logo">
        <Image src={logo} alt="Logo" width={160} />
      </div>
      <ul className="flex justify-between items-center gap-5">
        {navLinks.map(({ lable, href }) => (
          <li key={lable}>
            <Link href={href} className="capitalize">
              {lable}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="listIcons flex justify-center items-center gap-3">
        <li className="icon">
          <Link href={"/"}>
            <FaGithub size={20} />
          </Link>
        </li>
        <li className="icon">
          <Link href={"/"}>
            <FaTelegram size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
