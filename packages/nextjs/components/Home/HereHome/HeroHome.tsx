import React from "react";
import Link from "next/link";

const HeroHome = () => {
  return (
    <div className="text-white bg-primary">
      <div className="mt-18 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className=" ">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">AndiLending</h1>
          <h1 className="md:text-2xl text-2xl  font-bold ">Get loans easy and fast!</h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            A new way to get qualified and get a crypto loan.
          </p>
          <Link href={"/login/investor"}>
            <button className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
