"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaucetButton, RainbowKitCustomConnectButton } from "../scaffold-eth";

const InvestorForm = () => {
  const router = useRouter();
  const handleLoginInvestor = (e: any) => {
    e.preventDefault();
    localStorage.setItem("rol", "investor");
    router.push("/dashboard/requests");
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
              Connect your wallet or ENS
            </label>
            <RainbowKitCustomConnectButton />
            <FaucetButton />
          </div>
          <div>
            <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                id="password"
                className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="*******"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-2/5">
          <button
            onClick={handleLoginInvestor}
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
          >
            LOGIN
          </button>

          <div className="text-sm font-medium text-center text-[#999999] mt-2">
            NEW USER?{" "}
            <a href="#" className="text-primary underline underline-offset-4 font-bold hover:text-indigo-700 ">
              SIGN UP
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default InvestorForm;
