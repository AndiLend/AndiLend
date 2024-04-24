"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserForm = () => {
  const router = useRouter();
  const handleLoginUser = (e: any) => {
    e.preventDefault();
    localStorage.setItem("rol", "user");
    router.push("/dashboard/quests", { scroll: false });
  };

  return (
    <>
      <form className="flex flex-col justify-center w-3/5" action="#" method="POST">
        <div className="flex h-4/5 flex-col justify-center gap-4">
          <div>
            <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
              National Identity <span className="text-error">*</span>
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
              Upload the front part of your National Identity <span className="text-error">*</span>
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
          <div>
            <label htmlFor="national-identity-upload" className="text-sm font-medium text-gray-700">
              Upload the back part of your National Identity <span className="text-error">*</span>
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
      </form>
      <div className="flex items-end justify-start w-3/5">
        <div className="flex flex-col">
          <button
            onClick={handleLoginUser}
            type="submit"
            className="bg-secondary text-black px-16 py-3 rounded hover:bg-primary hover:text-white"
          >
            GET CREDIT SCORE
          </button>

          <div className="text-sm font-medium text-start text-[#999999] mt-2">
            ALREADY AN USER?{" "}
            <Link
              href="/login/user"
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

export default UserForm;
