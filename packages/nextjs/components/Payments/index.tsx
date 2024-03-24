"use client";

import React from "react";
import HeaderPage from "../Global/HeaderPage";
import "./Payments.css";

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

  return (
    <div className="overflow-hidden ring-1 ring-white ring-opacity-5 md:rounded-lg w-full">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              #
            </th>
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
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
              {new Date().toLocaleDateString("en-GB")}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">Lili.eth</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">High</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$300</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">5.1%</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">5 months</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
              <button
                className="bg-[#7B61E4] text-white px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg"
                // onClick={() => {}}
                // disabled={isPending || isPendingERC20}
              >
                Pay Fee
              </button>
            </td>
          </tr>
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
    <div className="main">
      <HeaderPage title="Payments" description="Your history" />
      <div className="container-payments container mx-auto p-4">
        <LoanTable />
      </div>
    </div>
  );
};

export default Payments;
