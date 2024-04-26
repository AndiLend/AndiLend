import React, { RefObject, useEffect, useState } from "react";
import Link from "next/link";

interface INavbarHome {
  scrollToComponent: (ref: RefObject<HTMLDivElement>) => void;
  refsNavbar: RefObject<HTMLDivElement>[];
}
const NavbarHome = ({ scrollToComponent, refsNavbar }: INavbarHome) => {
  const [bgClass, setBgClass] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setBgClass(false);
      } else {
        setBgClass(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-24 flex justify-center z-20 fixed ${
        bgClass ? "bg-transparent" : "bg-primary shadow-md"
      } transition-all ease-in-out duration-500`}
    >
      <ul className=" flex justify-center items-center gap-10 w-2/3 text-xl">
        <li className="p-4 hover:bg-secondary rounded" onClick={() => scrollToComponent(refsNavbar[0])}>
          Home
        </li>
        <li className="p-4 hover:bg-secondary rounded" onClick={() => scrollToComponent(refsNavbar[1])}>
          About
        </li>
        <li className="p-4 hover:bg-secondary rounded" onClick={() => scrollToComponent(refsNavbar[2])}>
          Getting Started
        </li>
      </ul>
      <div className="flex flex-row w-1/3 items-center justify-center gap-8">
        <select id="language" className="h-10 items-center bg-transparent">
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="PT">PT</option>
        </select>
        <Link href={"/login/user"}>
          <button className="bg-secondary w-32 h-10 rounded-md text-black font-medium">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarHome;
