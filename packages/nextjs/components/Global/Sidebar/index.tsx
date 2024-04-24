import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ISidebarProps } from "./Sidebar.types";

const userLinks = [
  {
    href: "/dashboard/quests",
    src: "/assets/sidebar/quests.svg",
    title: "Quests",
  },
  {
    href: "/dashboard/deposits",
    src: "/assets/sidebar/wallet.svg",
    title: "Deposits",
  },
  {
    href: "/dashboard/payments",
    src: "/assets/sidebar/card.svg",
    title: "Payments",
  },
];

const investorLinks = [
  {
    href: "/dashboard/requests",
    src: "/assets/sidebar/quests.svg",
    title: "Dashboard",
  },
  {
    href: "/dashboard/approved",
    src: "/assets/sidebar/wallet.svg",
    title: "Approved",
  },
];

const SidebarComponent = ({ links }: ISidebarProps) => {
  return (
    <aside className="flex flex-col bg-primary fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 space-y-6 py-7 px-2 ">
      <Link href="/" className="text-white flex items-center justify-center py-2.5 rounded hover:bg-indigo-700">
        <span className="text-2xl font-extrabold">Andin Lend</span>
      </Link>

      <hr></hr>
      <div className="flex-grow">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex flex-row py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            <Image src={link.src} alt="quests" width={24} height={24} className="ml-4" />
            <span className="px-4">{link.title}</span>
          </Link>
        ))}
        <hr className="mt-4"></hr>
        <div className="mt-4">
          <Link
            href={"/dashboard/help"}
            className="flex flex-row py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            <Image src="/assets/sidebar/help.svg" alt="quests" width={24} height={24} className="ml-4" />
            <span className="px-4">Help</span>
          </Link>
          <Link
            href={"/dashboard/settings"}
            className="flex flex-row py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            <Image src="/assets/sidebar/settings.svg" alt="quests" width={24} height={24} className="ml-4" />
            <span className="px-4">Settings</span>
          </Link>
        </div>
      </div>

      <div className="mt-auto">
        <hr className="mb-4"></hr>
        <Link
          href="/"
          className="flex flex-row w-full mt-auto py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
        >
          <div className="relative w-12 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600  ml-4">
            <svg
              className="absolute w-13 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="flex items-center w-4/5 px-4">Islam Ali</span>
        </Link>
      </div>
    </aside>
  );
};

const Sidebar = ({ userType }: { userType: string }) => {
  return <SidebarComponent links={userType === "user" ? userLinks : investorLinks} />;
};

export default Sidebar;
