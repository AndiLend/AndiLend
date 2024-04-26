"use client";

import { RefObject, useRef } from "react";
import type { NextPage } from "next";
import About from "~~/components/Home/About/About";
import Footer from "~~/components/Home/Footer/Footer";
import GettingStarted from "~~/components/Home/GettingStarted/GettingStarted";
import HeroSection from "~~/components/Home/HeroSection/HeroSection";
import NavbarHome from "~~/components/Home/NavbarHome/NavbarHome";

const Home: NextPage = () => {
  const refsNavbar: RefObject<HTMLDivElement>[] = [useRef(null), useRef(null), useRef(null)];

  const scrollToComponent = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${"/assets/home/homeLP.png"})` }}
        className="absolute inset-0 bg-center bg-cover w-screen h-screen bg-error z-1"
      />

      <div className="absolute inset-0 bg-primary opacity-95 h-screen " />

      <div className="z-1">
        <NavbarHome scrollToComponent={scrollToComponent} refsNavbar={refsNavbar} />
      </div>

      <div className="z-1" ref={refsNavbar[0]}>
        <HeroSection />
      </div>

      <div className="z-1" ref={refsNavbar[1]}>
        <About />
      </div>

      <div className="z-1" ref={refsNavbar[2]}>
        <GettingStarted />
      </div>

      <Footer />
    </>
  );
};

export default Home;
