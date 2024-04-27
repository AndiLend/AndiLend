import React from "react";
import HeaderPage from "../Global/HeaderPage";
import useApproved from "./useApproved";

export interface IApprovedTable {
  amount: number;
  balanceDue: number;
  interest: number;
  pendingFeesCount: number;
  totalLoanTime: string;
  status: string;
}
const ApprovedTable = ({ approvedData }: { approvedData: IApprovedTable[] }) => {
  return (
    <div className="overflow-hidden ring-1 ring-white ring-opacity-5 md:rounded-lg w-full">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Amount
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Total amount to receive
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              %Interest
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Pending fees
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Total loan time
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {approvedData?.map((approved, index) => {
            const { amount, balanceDue, interest, pendingFeesCount, totalLoanTime, status } = approved;
            return (
              <tr key={index}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{amount} USDT</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{balanceDue} USDT</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{interest}%</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{pendingFeesCount}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{totalLoanTime}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  <div className="bg-transparent text-secondary px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg border-2 border-secondary grid place-items-center">
                    <p className="m-0">{status}</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Approved = () => {
  const { approvedData } = useApproved();
  return (
    <div className="p-4 h-full flex flex-col">
      <HeaderPage title="Approved Loans" description="You can see all the loans you made" />
      <div className="flex h-full gap-4 pt-4">
        <ApprovedTable approvedData={approvedData} />
      </div>
    </div>
  );
};

export default Approved;
