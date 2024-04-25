import React from "react";
import Link from "next/link";
import { FaucetButton, RainbowKitCustomConnectButton } from "../scaffold-eth";
import ImageSection from "./ImageSection";
import InvestorForm from "./InvestorForm";
import UserForm from "./UserForm";

interface ILogin {
  userType: string;
}

const InvestorSignUpComponent = () => {
  return (
    <>
      <div className="flex items-end justify-end w-3/5">
        <div>
          <RainbowKitCustomConnectButton text="Connect your wallet" />
          <FaucetButton />
        </div>
      </div>

      <div className="flex justify-between w-3/5">
        <Link
          href="/signup/user"
          className="text-[30px]  text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Sign up as user
        </Link>
        <Link
          href="/signup/investor"
          className="text-[30px] font-bold text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Sign up as investor
        </Link>
      </div>
      <span className="flex w-3/5 items-center justify-start text-black">
        Complete the next information, we want to know more about you.
      </span>
      <InvestorForm />
    </>
  );
};

const UserSinUpComponent = () => {
  return (
    <>
      <div className="flex items-end justify-end w-3/5">
        <div>
          <RainbowKitCustomConnectButton text="Connect your wallet" />
          <FaucetButton />
        </div>
      </div>

      <div className="flex justify-between w-3/5">
        <Link
          href="/signup/user"
          className="text-[30px] font-bold text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Sign up as user
        </Link>
        <Link
          href="/signup/investor"
          className="text-[30px] text-center text-primary underline underline-offset-8 hover:text-indigo-700"
        >
          Sign up as investor
        </Link>
      </div>
      <span className="flex w-3/5 items-center justify-start text-black">
        Complete the next information to make sure you are the person who need the loand
      </span>
      <UserForm />
    </>
  );
};

const SignUp = ({ userType }: ILogin) => {
  const imageProps = {
    title:
      userType === "investor"
        ? "Do you want to support someone and gain money for do that? ...Start Now"
        : "Do you want a loan?",
    subtitle: userType === "investor" ? "" : "Start here...",
    imageUrl: userType === "investor" ? "/assets/etherium.png" : "/assets/wallet.png",
    description: userType === "investor" ? "" : "In order to register, you must request your score first",
  };

  return (
    <div className="flex h-screen">
      <div className="flex w-2/4 bg-primary flex-col items-center">
        <ImageSection {...imageProps} />
      </div>
      <div className="flex w-3/4 flex-col justify-center items-center gap-16">
        {userType === "investor" ? <InvestorSignUpComponent /> : <UserSinUpComponent />}
      </div>
    </div>
  );
};

export default SignUp;
