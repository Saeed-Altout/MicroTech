import React from "react";
import Hero from "@/components/layouts/Hero";
import type { NextPage } from "next";
import About from "@/components/layouts/About";
import Services from "@/components/layouts/Services";
import Projects from "@/components/layouts/Projects";
import StartProject from "@/components/layouts/StartProject";
import Contact from "@/components/layouts/Contact";
import Faqs from "@/components/layouts/Faqs";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <StartProject />
      <About />
      <Services />
      <Projects />
      <Faqs />
      <Contact />
    </main>
  );
};

export default Home;
