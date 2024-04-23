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
      <NavbarHome />
      <HeroHome />
      <CryptoCapHome />
      {/* <MarketHome /> */}
      {/* <StartHome /> */}
      {/* <AboutHome /> */}
      <FooterHome />
    </>
  );
};

export default Home;
