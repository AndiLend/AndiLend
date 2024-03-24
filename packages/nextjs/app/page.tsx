"use client";

import type { NextPage } from "next";
import AboutHome from "~~/components/Home/AboutHome/AboutHome";
import CryptoCapHome from "~~/components/Home/CryptoCapHome/CryptoCapHome";
import FooterHome from "~~/components/Home/FooterHome/FooterHome";
import HeroHome from "~~/components/Home/HereHome/HeroHome";
import MarketHome from "~~/components/Home/MarketHome/MarketHome";
import NavbarHome from "~~/components/Home/NavbarHome/NavbarHome";
import StartHome from "~~/components/Home/StartHome/StartHome";

const Home: NextPage = () => {
  return (
    <div>
      <NavbarHome />
      <HeroHome />
      <CryptoCapHome />
      <MarketHome />
      <StartHome />
      <AboutHome />
      <FooterHome />
    </div>
  );
};

export default Home;
