import React from "react";

// import Image from "next/image";

interface IFundingHistoryChart {
  fundingReceived: string;
  interest: string;
  totalPayment: string;
  feeCounts: string;
  isPending: boolean;
}

const FundingHistoryChart = ({
  fundingReceived,
  interest,
  totalPayment,
  feeCounts,
  isPending,
}: IFundingHistoryChart) => {
  return (
    <div className="w-full bg-white p-8 rounded-xl shadow-lg text-black">
      <div className="grid grid-cols-3 gap-4 text-center mb-8">
        <div>
          <p className="text-gray-500">Total Funding Received</p>
          <p className="text-2xl font-bold">${fundingReceived}</p>
          <p className="text-gray-500">from last month</p>
        </div>
        <div>
          <p className="text-gray-500">Interest</p>
          <p className="text-2xl font-bold">{interest}%</p>
          <p className="text-gray-500">from last week</p>
        </div>
        <div>
          <p className="text-gray-500">Total Payment</p>
          <p className="text-2xl font-bold">${totalPayment}</p>
          <p className="text-gray-500">to return in 3 months</p>
        </div>
      </div>
      {/* <div>
        <Line data={data} />
        <Image src="/assets/chart.png" width={758} height={295} alt="greed" />
      </div> */}
      {isPending ? (
        <div className="flex justify-center items-center md:rounded-lg w-full">
          <h2 className="text-error text-2xl text-bold">Wait to receive your loan to pay.</h2>
        </div>
      ) : feeCounts === "0" ? (
        <div className="flex justify-center items-center w-full">
          <h2 className="text-[#88c010] text-2xl text-bold">Congrats! You paid all your debt.</h2>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Remember</h2>
          <p className="text-gray-600 mt-6">
            You have received ${fundingReceived} USDT and you must pay it in {feeCounts} months, so keep the date in
            mind to have a good credit history.
          </p>
        </>
      )}
    </div>
  );
};

export default FundingHistoryChart;
