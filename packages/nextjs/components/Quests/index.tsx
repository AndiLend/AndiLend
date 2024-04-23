import React from "react";
import FoundingForm from "../FoundingForm";
import CreditScore from "../Global/CreditScore";
import HeaderPage from "../Global/HeaderPage";
import "./Quests.css";

const Quests = () => {
  return (
    <div className="">
      <HeaderPage title="¡Welcome, Pedro.eth!" description="Receive funds for your projects, filling out the form" />
      <div className="container">
        <div className="flex-auto w-64 right ">
          <FoundingForm />
        </div>
        <div className="flex-auto w-32 h-dvh left">
          <CreditScore />
        </div>
      </div>
    </div>
  );
};

export default Quests;
