"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const InvestorForm = () => {
  const router = useRouter();
  const handleLoginInvestor = (e: any) => {
    e.preventDefault();
    localStorage.setItem("rol", "investor");
    router.push("/dashboard/requests");
  };

  return (
    <>
      <form className="flex flex-col justify-center w-3/5 " action="#" method="POST">
        <div className="flex h-4/5 flex-col justify-center gap-4 ">
          <div>
            <label htmlFor="career" className="text-sm font-medium text-gray-700">
              What is your career?<span className="text-error">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="career"
                id="career"
                className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Type here"
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="text-sm font-medium text-gray-700">
              Why are you interest in support people?<span className="text-error">*</span>
            </label>
            <div className="mt-1">
              <textarea
                name="interest"
                id="interest"
                rows={4}
                className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Type here"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="flex items-end justify-start w-3/5">
        <div className="flex flex-col">
          <button
            onClick={handleLoginInvestor}
            type="submit"
            className="bg-secondary text-black px-16 py-3 rounded hover:bg-primary hover:text-white"
          >
            SIGN UP
          </button>
          <div className="text-sm font-medium text-start text-[#999999] mt-2">
            ALREADY AN INVESTOR?{" "}
            <Link
              href="/login/investor"
              className="text-primary underline underline-offset-4 font-bold hover:text-indigo-700 "
            >
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorForm;
