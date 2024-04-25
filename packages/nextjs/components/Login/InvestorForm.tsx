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
      <div className="h-1/4 w-2/4 flex flex-col justify-center">
        <div className="w-full flex justify-center items-center">
          <div>
            <RainbowKitCustomConnectButton text="Connect your wallet as investor" />
          </div>
          <FaucetButton />
        </div>
      </div>

      <form className="flex flex-col justify-center items-center w-3/5 " action="#" method="POST">
        <div className="flex flex-col w-2/5">
          <button
            onClick={handleLoginInvestor}
            type="submit"
            className="bg-secondary text-black px-16 py-3 rounded hover:bg-primary hover:text-white"
          >
            LOGIN
          </button>

          <div className="text-sm font-medium text-center text-[#999999] mt-2">
            NEW INVESTOR?{" "}
            <Link
              href="/signup/investor"
              className="text-primary underline underline-offset-4 font-bold hover:text-indigo-700 "
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default InvestorForm;
