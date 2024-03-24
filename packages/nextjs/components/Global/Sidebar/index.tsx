import React from "react";
import Image from "next/image";
import Link from "next/link";

const SidebarUser = () => {
  return (
    <div className="h-screen bg-purple-800 text-white w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <a href="/" className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">Andin Lend</span>
      </a>
      <nav>
        <Link
          href={"/dashboard/quests"}
          className="flex flex-row block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white"
        >
          <Image src="/assets/sidebar/quests.svg" alt="quests" width={24} height={24} className="ml-4" />
          <span className="px-4">Quests</span>
        </Link>
        <Link
          href={"/dashboard/deposits"}
          className="flex flex-row block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white"
        >
          <Image src="/assets/sidebar/wallet.svg" alt="quests" width={24} height={24} className="ml-4" />
          <span className="px-4">Deposits</span>
        </Link>
        <Link
          href={"/dashboard/payments"}
          className="flex flex-row block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white"
        >
          <Image src="/assets/sidebar/card.svg" alt="quests" width={24} height={24} className="ml-4" />
          <span className="px-4">Payments</span>
        </Link>
        <Link
          href={"/dashboard/help"}
          className="flex flex-row block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white"
        >
          <Image src="/assets/sidebar/help.svg" alt="quests" width={24} height={24} className="ml-4" />
          <span className="px-4">Help</span>
        </Link>
        <Link
          href={"/dashboard/settings"}
          className="flex flex-row block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white"
        >
          <Image src="/assets/sidebar/settings.svg" alt="quests" width={24} height={24} className="ml-4" />
          <span className="px-4">Settings</span>
        </Link>
      </nav>
      <div className="absolute bottom-0 my-10">
        <a href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
          Islam Ali
        </a>
      </div>
    </div>
  );
};
const SidebarInvestor = () => {
  return <div>SidebarInvestor</div>;
};
const Sidebar = ({ userType }: { userType: string }) => {
  if (userType === "user") {
    return <SidebarUser />;
  }
  return <SidebarInvestor />;
};

export default Sidebar;
