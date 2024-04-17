"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaucetButton, RainbowKitCustomConnectButton } from "../scaffold-eth";

const UserForm = () => {
  const router = useRouter();
  const handleLoginUser = (e: any) => {
    e.preventDefault();
    localStorage.setItem("rol", "user");
    router.push("/dashboard/quests", { scroll: false });
  };

  return (
    <>
      <div className="flex justify-between w-3/5">
        <Link
          href="/"
          className="text-[25px] font-bold text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Register as user
        </Link>
        <Link
          href="/"
          className="text-[25px] text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Register as investor
        </Link>
      </div>

      <form className="flex flex-col justify-center w-3/5 h-1/2 " action="#" method="POST">
        <div className="flex h-4/5 flex-col justify-center gap-4 ">
          <div>
            <label htmlFor="wallet" className="text-sm font-medium text-gray-700">
              Connect your wallet
            </label>
            <RainbowKitCustomConnectButton />
            <FaucetButton />
          </div>
          <div>
            <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
              National Identity
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="national-identity"
                id="national-identity"
                className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0000000005-9"
              />
            </div>
          </div>
          <div>
            <label htmlFor="national-identity-upload" className="text-sm font-medium text-gray-700">
              Upload a pic of your National Identity
            </label>
            <div className="mt-1">
              <input
                type="file"
                name="national-identity-upload"
                id="national-identity-upload"
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-2/5">
          <button
            onClick={handleLoginUser}
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
          >
            GET CREDIT SCORE
          </button>

          <div className="text-sm font-medium text-center text-[#999999] mt-2">
            ALREADY A USER?{" "}
            <a href="#" className="text-primary underline underline-offset-4 font-bold hover:text-indigo-700 ">
              LOGIN HERE
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
