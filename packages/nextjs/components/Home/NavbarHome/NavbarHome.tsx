import React, { useState } from "react";
import Link from "next/link";

const NavbarHome = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <span className="w-full text-3xl font-bold">Andin Landing</span>
      </h1>
      <ul className=" flex items-center">
        <li className="p-4">Home</li>
        <li className="p-4">Business</li>
        <li className="p-4">Trade</li>
        <li className="p-4">Market</li>
        <li className="p-4">Learn</li>
        <li className="p-4">
          <Link href={"/login/user"}>
            <button className="bg-[#27AE60] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LOGIN</button>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden"></div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Crypto</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Business</li>
        <li className="p-4 border-b border-gray-600">Trade</li>
        <li className="p-4 border-b border-gray-600">Market</li>
        <li className="p-4">Learn</li>
      </ul>
    </div>
  );
};

export default NavbarHome;
