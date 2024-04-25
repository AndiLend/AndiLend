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
          href="/login/user"
          className="text-[30px] font-bold text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Login as user
        </Link>
        <Link
          href="/login/investor"
          className="text-[30px] text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Login investor
        </Link>
      </div>

      <div className="h-1/4 w-2/4 flex flex-col justify-center">
        <div className="w-full">
          <RainbowKitCustomConnectButton text="Connect your wallet as user" />
          <FaucetButton />
        </div>
      </div>

      <form className="flex flex-col justify-center items-center w-3/5 " action="#" method="POST">
        <div className="flex flex-col w-2/5">
          <button
            onClick={handleLoginUser}
            type="submit"
            className="bg-secondary text-black px-16 py-3 rounded hover:bg-primary hover:text-white"
          >
            LOGIN
          </button>

          <div className="text-sm font-medium text-center text-[#999999] mt-2">
            NEW USER?{" "}
            <Link
              href="/signup/user"
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

export default UserForm;
