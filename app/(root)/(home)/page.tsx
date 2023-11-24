import Hero from "@/components/layouts/Hero";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import scrollDown from "@/public/scrollDown.svg";
import About from "@/components/layouts/About";
const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <div>
        <Link
          href={"/#about"}
          className="flex justify-center items-center gap-3"
        >
          <Image
            src={scrollDown}
            alt="Scroll Down"
            className="animate-bounce"
          />
          <p>Scroll Down</p>
        </Link>
      </div>
      <About />
    </main>
  );
};

export default Home;
