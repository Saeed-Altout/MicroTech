"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "@/context/ContextProvider";
import { Button } from "../ui/button";
const Navbar = () => {
  const navLinks = [
    { lable: "home", href: "/" },
    { lable: "about us", href: "/about-us" },
    { lable: "services", href: "/services" },
    { lable: "projects", href: "/projects" },
    { lable: "testimonials", href: "/testimonials" },
    { lable: "contact us", href: "/contact-us" },
  ];

  const { menuActive, setMenuActive } = useStateContext();
  return (
    <nav className="relative flex justify-between items-center container mx-auto py-6">
      <div className="logo">
        <Image src={logo} alt="Logo" width={160} />
      </div>

      <ul className="lg:flex justify-between items-center gap-5 hidden">
        {navLinks.map(({ lable, href }) => (
          <li key={lable}>
            <Link href={href} className="capitalize">
              {lable}
            </Link>
          </li>
        ))}
      </ul>
      <Button onClick={() => setMenuActive(!menuActive)} className="lg:hidden">
        {menuActive ? <FiX size={25} /> : <FiMenu size={25} />}
      </Button>

      {menuActive && (
        <ul className="lg:hidden justify-between items-center gap-5 flex absolute top-[80px] flex-col w-full bgGlass py-10 left-0 right-0">
          {navLinks.map(({ lable, href }) => (
            <li key={lable}>
              <Link href={href} className="capitalize">
                {lable}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden lg:flex justify-center items-center gap-3">
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
