import React from "react";
import Link from "next/link";

const NavbarHome = () => {
  return (
    <div className="w-full h-24 flex justify-center absolute z-20">
      <ul className=" flex justify-center items-center gap-10 w-2/3">
        <li className="p-4 hover:bg-secondary rounded">Home</li>
        <li className="p-4 hover:bg-secondary rounded">Businesses</li>
        <li className="p-4 hover:bg-secondary rounded">Trade</li>
        <li className="p-4 hover:bg-secondary rounded">Market</li>
        <li className="p-4 hover:bg-secondary rounded">Learn</li>
      </ul>
      <div className="flex flex-row w-1/3 items-center justify-center gap-8">
        <select id="language" className="h-10 items-center bg-transparent">
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="PT">PT</option>
        </select>
        <Link href={"/signup/user"}>
          <button className="bg-secondary w-32 h-10 rounded-md text-black font-medium">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarHome;
