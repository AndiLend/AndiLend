import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="z-10 text-white w-full h-screen mx-auto text-center flex flex-row justify-center">
        <div className="z-10 flex items-center justify-center pb-10 pl-20 w-1/3 opacity-55">
          <p className="text-xl text-black leading-8 tracking-widest w-full">
            You can choose your favorite cryptocurrency and receive it fast
          </p>
        </div>
        <div className="z-10 flex flex-col items-center justify-center w-2/3">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 z-10">AndiLending</h1>
          <h1 className="md:text-5xl text-2xl font-bold z-10">Get loans easy and fast!</h1>
          <p className="md:text-3xl text-xl text-gray-400 z-10">A new way to get qualified and get a crypto loan.</p>
          <Link href={"/signup/user"} className="z-10 pt-10 w-full">
            <button className="bg-secondary w-1/3 rounded-md font-medium my-6 py-4  text-black cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="z-10 flex items-center justify-center pb-10 w-1/3 pr-20 opacity-55">
          <p className="text-xl text-black leading-8 tracking-widest w-full">
            You can choose the period of time that want to make the payment{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
