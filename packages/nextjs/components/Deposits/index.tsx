import React from "react";
import FundingHistoryChart from "../FundingHistoryChart";
import CreditScore from "../Global/CreditScore";
import HeaderPage from "../Global/HeaderPage";

const Deposits = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <HeaderPage title="Deposits" description="Dashboard with your credits" />
      <div className="flex h-full gap-4 pt-4">
        <div className="flex flex-auto w-64">
          <FundingHistoryChart />
        </div>
        <div className="flex-auto w-32 h-dvh bg-neutral">
          <CreditScore />
        </div>
      </div>
    </div>
  );
};

export default Deposits;
