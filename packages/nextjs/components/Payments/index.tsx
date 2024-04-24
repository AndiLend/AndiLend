"use client";

import React from "react";
import HeaderPage from "../Global/HeaderPage";
import usePayments from "./usePayments";

// // import { Address } from "viem";
// import { useAccount } from "wagmi";
// import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
// import { CONTRACT_ADDRESS } from "~~/utils/scaffold-eth/constants";

// type Loan = {
//   amount: bigint;
//   balanceDue: bigint;
//   loanTime: bigint;
//   fee: bigint;
//   interest: number;
//   creditScore: number;
//   pendingFeesCount: number;
//   status: number;
//   proof: `0x${string}`;
// };

// const contractName = "AndinLend";

const LoanTable = () => {
  // const config = useConfig();
  // const { writeContractAsync, isPending } = useScaffoldWriteContract(contractName, {
  //   config: config,
  // });

  // const { writeContractAsync: writeContractAsyncERC20, isPending: isPendingERC20 } = useScaffoldWriteContract(
  //   "USDTMock",
  //   { config },
  // );
  // const onPayFee = async (loan: Loan, address: Address, lender: Address) => {
  //   await writeContractAsyncERC20({
  //     functionName: "approve",
  //     args: [CONTRACT_ADDRESS, loan.amount],
  //     account: address,
  //   } as never);
  //   await writeContractAsync({
  //     functionName: "payFee",
  //     args: [lender],
  //     account: address,
  //   } as never);
  // };

  const { paymentsData } = usePayments();

  const handlePayNow = () => {
    console.log("handlePayNow");
  };

  return (
    <div className="overflow-hidden ring-1 ring-white ring-opacity-5 md:rounded-lg w-full">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Request Date
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Amount
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              % Interest
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Total
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Pay Day
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {paymentsData?.map((payments, index) => {
            const { date, amount, interest, total, payDay, status, actions } = payments;
            return (
              <tr key={index}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{date}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">${amount}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{interest}%</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">${total}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{payDay}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{status}</td>
                <td className="px-3 py-4 text-sm text-gray-900">
                  {actions === "pending" ? (
                    <button
                      className="bg-secondary text-white px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg border-2 border-secondary  hover:bg-primary border-none"
                      onClick={handlePayNow}
                      disabled={false}
                    >
                      {status}
                    </button>
                  ) : (
                    <button
                      className="bg-transparent text-secondary px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg border-2 border-secondary"
                      disabled={true}
                    >
                      {status}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Payments = () => {
  // const result = useAccount();
  // const address = result.address as `0x${string}`;
  // if(typeof(address is `0x${string}`){

  // }
  // const { data: loan } = useScaffoldReadContract({
  //   contractName,
  //   functionName: "loans",
  //   args: [address],
  // });
  // const { data: lender } = useScaffoldReadContract({
  //   contractName,
  //   functionName: "getLenderByBorrowerAddress",
  //   args: [address],
  // });

  return (
    <div className="p-4 h-full flex flex-col">
      <HeaderPage title="Payments" description="Your history" />
      <div className="flex h-full gap-4 pt-4">
        <LoanTable />
      </div>
    </div>
  );
};

export default Payments;
