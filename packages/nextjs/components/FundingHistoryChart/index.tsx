import React from "react";
import Image from "next/image";
import "./FundingHistoryChart.css";

const FundingHistoryChart = () => {
  return (
    <div className="w-full bg-white p-8 rounded-xl shadow-lg container-funding-history-chart">
      <div className="grid grid-cols-3 gap-4 text-center mb-8">
        <div>
          <p className="text-2xl font-bold">$108.00</p>
          <p className="text-gray-500">Total Funding Received</p>
          <p className="text-gray-500">from last month</p>
        </div>
        <div>
          <p className="text-2xl font-bold">5.1%</p>
          <p className="text-gray-500">Interest</p>
          <p className="text-gray-500">from last week</p>
        </div>
        <div>
          <p className="text-2xl font-bold">$1,078</p>
          <p className="text-gray-500">Total Payment</p>
          <p className="text-gray-500">to return in 3 months</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Funding History</h2>
        {/* <Line data={data} /> */}
        <Image src="/assets/chart.png" width={758} height={295} alt="greed" />
      </div>
      <p className="text-gray-600 mt-6">
        You have received $980 USDT and you must pay it in 3 months, so keep the date in mind to have a good credit
        history.
      </p>
    </div>
  );
};

export default FundingHistoryChart;
