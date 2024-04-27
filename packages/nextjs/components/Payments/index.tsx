"use client";

import React from "react";
import HeaderPage from "../Global/HeaderPage";
import type { Address } from "blo";
import { useAccount, useConfig } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { scaffoldWriteContractVariables } from "~~/utils/scaffold-eth/contract";

type Loan = {
  amount: bigint;
  balanceDue: bigint;
  loanTime: bigint;
  fee: bigint;
  interest: number;
  qualification: number;
  pendingFeesCount: number;
  status: number;
};

const contractName = "AndinLend";
const LoanTable = ({ loan, lender }: { loan: Loan | undefined; lender: Address | undefined }) => {
  const { address, chainId } = useAccount();
  const config = useConfig();
  const { writeContractAsync, isPending } = useScaffoldWriteContract(contractName, {
    config: config,
  });

  const { writeContractAsync: writeContractAsyncERC20, isPending: isPendingERC20 } = useScaffoldWriteContract(
    "USDTMock",
    { config },
  );
  const onPayFee = async () => {
    try {
      if (chainId !== undefined) {
        if (chainId in deployedContracts) {
          const contractsInfo = deployedContracts[chainId as keyof typeof deployedContracts];
          await writeContractAsyncERC20(
            {
              functionName: "approve",
              args: [contractsInfo.AndinLend.address, loan?.fee],
              account: address,
            } as scaffoldWriteContractVariables<"USDTMock", "approve">,
            {
              onSuccess: async txnReceipt => {
                console.log("📦 Transaction blockHash", txnReceipt);
                console.log("==> loan = ", loan, " ==> address = ", address);
                await writeContractAsync({
                  functionName: "payFee",
                  args: [lender],
                  account: address,
                } as scaffoldWriteContractVariables<"AndinLend", "payFee">);
              },
            },
          );
        }
      }
    } catch (error) {
      console.error("Error while paying loan:", error);
    }
  };

  let auxLoansFee: Loan[] | undefined = undefined;
  if (loan?.pendingFeesCount !== undefined) {
    if (loan.pendingFeesCount === 0) {
      return (
        <div className="overflow-hidden h-[400px] text-2xl text-bold flex justify-center items-center md:rounded-lg w-full">
          <h2 className="text-[#88c010]">Congrats! You paid all your debt.</h2>
        </div>
      );
    }
    auxLoansFee = new Array(Number(loan?.pendingFeesCount)).fill(loan);
  }
  return (
    <div className="overflow-hidden ring-1 ring-white ring-opacity-5 md:rounded-lg w-full">
      {loan?.status === 0 && (
        <div className="flex justify-center items-center md:rounded-lg w-full">
          <h2 className="text-error text-2xl text-bold">Wait to receive your loan for more information.</h2>
        </div>
      )}
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Request Date
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Total received
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Fee amount
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              % Interest
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Residue
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {auxLoansFee?.map((auxLoan, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {new Date().toLocaleDateString("en-GB")}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {loan?.amount !== undefined ? Number(loan?.amount) : ""} USDT
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{Number(loan?.fee)} USDT</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{Number(loan?.interest)}%</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {loan?.fee ? Number(loan?.fee * BigInt(loan?.pendingFeesCount)) : ""} USDT
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                <button
                  className="bg-[#7B61E4] text-white px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg disabled:opacity-30"
                  onClick={onPayFee}
                  disabled={isPending || isPendingERC20 || loan?.status === 0}
                >
                  Pay Fee
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Payments = () => {
  const result = useAccount();
  const address = result.address as Address;
  const { data: loan } = useScaffoldReadContract({
    contractName,
    functionName: "loans",
    args: [address],
  });
  const { data: lender } = useScaffoldReadContract({
    contractName,
    functionName: "getLenderByBorrowerAddress",
    args: [address],
  });

  let formattedLoan: Loan | undefined = undefined;
  if (loan) {
    formattedLoan = {
      amount: loan[0],
      balanceDue: loan[1],
      loanTime: loan[2],
      fee: loan[3],
      interest: loan[4],
      qualification: loan[5],
      pendingFeesCount: loan[6],
      status: loan[7],
    };
  }

  return (
    <div className="p-4 h-full flex flex-col">
      <HeaderPage title="Payments" description="Your history" />
      <div className="container-payments container mx-auto p-4">
        <LoanTable loan={formattedLoan} lender={lender} />
      </div>
    </div>
  );
};

export default Payments;
