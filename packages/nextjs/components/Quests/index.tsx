import React from "react";
import FoundingForm from "../FoundingForm";
import CreditScore from "../Global/CreditScore";
import HeaderPage from "../Global/HeaderPage";
import useQuests from "./useQuests";

const Quests = () => {
  const { scoreData } = useQuests();
  return (
    <div className="p-4 h-full flex flex-col">
      <HeaderPage title="¡Welcome!" description="Receive funds for your projects, filling out the form" />
      <div className="flex h-full gap-4 pt-4">
        <div className="flex-auto w-64">
          <FoundingForm />
        </div>
        <div className="flex-auto w-32 h-dvh bg-neutral">
          <CreditScore scoreData={scoreData} />
        </div>
      </div>
    </div>
  );
};

export default Quests;
