import React from "react";
import CreditScore from "../Global/CreditScore";
import HeaderPage from "../Global/HeaderPage";
import "./Deposits.css";

const Deposits = () => {
  return (
    <div className="main">
      <HeaderPage title="Deposits" description="Dashboard with your credits" />
      <div className="container-deposits">
        <div className="flex-auto w-64 right ">{/* <FoundingForm /> */}</div>
        <div className="flex-auto w-32 h-dvh left">
          <CreditScore />
        </div>
      </div>
    </div>
  );
};

export default Deposits;
