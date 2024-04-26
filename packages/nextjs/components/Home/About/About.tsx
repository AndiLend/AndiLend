import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen bg-gradient-to-b bg-white flex flex-col items-center justify-center gap-14">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-primary text-6xl font-bold">Get loan in cryptocurrency</h1>
        <div className="text-black text-2xl mb-4">
          Get loans in your favorite cryptocurrency, we evaluate you and receive it instantly in your wallet
        </div>
      </div>
      <div className="bg-error"></div>
      <div className="flex items-center gap-20 justify-center">
        <div className="flex flex-col items-center w-1/4">
          <Image src={"/assets/home/handLP.png"} alt={"hand"} width={200} height={200} />
          <p className="text-black text-center">We protect your information and it is safe from scammers.</p>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <Image src={"/assets/home/secure.png"} alt={"hand"} width={250} height={250} />
          <p className="text-black text-center">We protect your information and it is safe from scammers.</p>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <Image src={"/assets/home/timeLP.png"} alt={"hand"} width={230} height={230} />
          <p className="text-black text-center">We protect your information and it is safe from scammers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
