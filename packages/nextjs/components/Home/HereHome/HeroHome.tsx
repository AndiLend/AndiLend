import React from "react";
import Link from "next/link";

const HeroHome = () => {
  return (
    <div className="text-white bg-primary">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className=" ">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Get your loans for your projects with cryptocurrency
          </p>
          <Link href={"/login/investor"}>
            <button className="bg-[#27AE60] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
