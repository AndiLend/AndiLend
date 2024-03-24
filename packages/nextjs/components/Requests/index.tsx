"use client";

import React from "react";
import HeaderPage from "../Global/HeaderPage";
import "./Requests.css";
import { Address } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type Loan = {
  amount: bigint;
  balanceDue: bigint;
  loanTime: bigint;
  fee: bigint;
  interest: number;
  creditScore: number;
  pendingFeesCount: number;
  status: number;
  proof: `0x${string}`;
};

type loansType = readonly Loan[] | undefined;

const RequestTable = ({ loans, addresses }: { loans: loansType; addresses: Address[] }) => {
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
              Address
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Score
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Amount
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              %Interest
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Period
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Requests
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {loans?.map((loan: Loan, id): React.ReactNode => {
            return (
              <tr key={id}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{id}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  {new Date().toLocaleDateString("en-GB")}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{addresses[id]}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{loan.creditScore}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">${Number(loan.amount)}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{loan.interest}%</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{Number(loan.loanTime)} months</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  <button className="bg-[#7B61E4] text-white px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg">
                    Approve
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const contractName = "AndinLend";
const Requests = () => {
  const { data } = useScaffoldReadContract({
    contractName,
    functionName: "getAllLoans",
  });
  const iterator = [...(data as unknown as any[])];
  const [loans, addresses] = iterator;

  return (
    <div className="main-requests">
      <HeaderPage
        title="Welcome, Juan!"
        description="You can see the request for funding, one of the variables to evaluate is the score"
      />
      <div className="container-requests container mx-auto p-4">
        <RequestTable loans={loans} addresses={addresses} />
      </div>
    </div>
  );
};

export default Requests;
