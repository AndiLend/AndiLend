import React from "react";
import Link from "next/link";
import Card from "~~/components/Global/Card/Card";

const GettingStarted = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center py-20">
      <div className="flex w-4/5 px-10 py-32">
        <div className="w-2/3">
          <h2 className="text-5xl font-bold">How it works?</h2>
          <p className="text-2xl leading-relaxed w-2/3">
            We want that you receive the cryptocurrency fast and secure but at the same time you need to pay on time.
            You can be user (someone who wants to get a loan or an investor (someone who gets the loans).
          </p>
        </div>
        <Link href={"/signup/user"} className="w-1/3 flex items-center justify-center">
          <button className="bg-secondary w-1/2 h-1/3 rounded-md text-black font-medium">Sign Up</button>
        </Link>
      </div>

      <div className="flex flex-col w-4/5 px-10 ">
        <h2 className="text-5xl font-bold py-20">Do you want to get a loan?</h2>
        <Card
          src="/assets/home/user-plus.png"
          title="Sign up as user "
          description="Connect your wallet and complete your information. "
          rightImage={false}
        />
        <Card
          src="/assets/home/stars.png"
          title="Get your credit score"
          description="We need to validate and  you need to wait to get your credit score from web2. "
          rightImage={true}
        />
        <Card
          src="/assets/home/card.png"
          title="Choose what amount you need"
          description="You can select the amount you want and the period of time to pay it. "
          rightImage={false}
        />
        <h2 className="text-5xl font-bold py-20">Do you want to give the load and earn interests?</h2>
        <Card
          src="/assets/home/user-plus.png"
          title="Sign up as investor"
          description="Just need to connect your wallet "
          rightImage={true}
        />
        <Card
          src="/assets/home/card.png"
          title="Choose which user your want to give the loan to"
          description="Based in the web2 score, you can choose which person need your help and earn interest. "
          rightImage={false}
        />
      </div>
      <Link href={"/signup/investor"} className="w-1/3 flex items-center justify-center py-20">
        <button className="bg-secondary w-1/2 h-16 rounded-md text-black text-2xl">Sign Up Now</button>
      </Link>
    </div>
  );
};

export default GettingStarted;
