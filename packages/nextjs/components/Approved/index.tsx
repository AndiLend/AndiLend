import React from "react";
import HeaderPage from "../Global/HeaderPage";
import useApproved from "./useApproved";

interface IApprovedTable {
  requestDate: string;
  address: string;
  score: string | number;
  amount: string | number;
  interest: string | number;
  payDay: string;
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
              Pay Day
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {approvedData?.map((approved, index) => {
            const { requestDate, address, score, amount, interest, payDay, status } = approved;
            return (
              <tr key={index}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{requestDate}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{address}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{score}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">${amount}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{interest}%</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{payDay}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  <button
                    className="bg-transparent text-secondary px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg border-2 border-secondary"
                    disabled={true}
                  >
                    {status}
                  </button>
                </td>
              </tr>
            );
          })}
          {/* dummy data */}
          {/* <tr>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">22/01/2024</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">Lili.eth</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">High</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$1,500</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">5.8%</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">6months</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
              <button className="bg-[#7B61E4] text-white px-2 text-xs font-semibold leading-5 w-full h-10 rounded-lg">
                Approve
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

const Approved = () => {
  const { approvedData } = useApproved();
  return (
    <div className="p-4 h-full flex flex-col">
      <HeaderPage title="Approved Loans" description="You can see all the deposits made it" />
      <div className="flex h-full gap-4 pt-4">
        <ApprovedTable approvedData={approvedData} />
      </div>
    </div>
  );
};

export default Approved;
