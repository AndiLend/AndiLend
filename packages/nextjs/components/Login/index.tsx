import React from "react";
import ImageSection from "./ImageSection";
import InvestorForm from "./InvestorForm";
import UserForm from "./UserForm";

interface ILogin {
  userType: string;
}
const Login = ({ userType }: ILogin) => {
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
      <div className="flex w-2/4 bg-primary flex flex-col items-center">
        <ImageSection {...imageProps} />
      </div>
      <div className="flex w-3/4 flex-col justify-center items-center">
        {userType === "investor" ? <InvestorForm /> : <UserForm />}
      </div>
    </div>
  );
};

export default Login;
