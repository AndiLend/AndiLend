"use client";

import type { NextPage } from "next";
import CryptoCapHome from "~~/components/Home/CryptoCapHome/CryptoCapHome";
import FooterHome from "~~/components/Home/FooterHome/FooterHome";
import HeroHome from "~~/components/Home/HereHome/HeroHome";
import NavbarHome from "~~/components/Home/NavbarHome/NavbarHome";

// import MarketHome from "~~/components/Home/MarketHome/MarketHome";
// import AboutHome from "~~/components/Home/AboutHome/AboutHome";
// import StartHome from "~~/components/Home/StartHome/StartHome";

const Home: NextPage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${"/assets/home/homeLP.png"})` }}
        className="absolute inset-0 bg-center bg-cover w-screen h-screen bg-error z-1"
      />

      <div className="absolute inset-0 bg-primary opacity-95 h-screen " />
      <div className="z-1">
        <NavbarHome />
      </div>
      <div className="z-1">
        <HeroHome />
      </div>
      <div className="z-1">
        <CryptoCapHome />
      </div>
      {/* <MarketHome /> */}
      {/* <StartHome /> */}
      {/* <AboutHome /> */}
      <FooterHome />
    </>
  );
};

export default Home;
