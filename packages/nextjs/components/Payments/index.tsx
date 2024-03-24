import React from "react";
import HeaderPage from "../Global/HeaderPage";
import "./Payments.css";

// components/LoanTable.js
const LoanTable = () => {
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
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">22/01/2024</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$108.00</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">5.1%</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$118.90</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">22/04/2024</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
              <span className="inline-flex rounded-full bg-purple-100 text-purple-800 px-2 text-xs font-semibold leading-5">
                Pending
              </span>
            </td>
          </tr>
          {/* ... más filas aquí ... */}
        </tbody>
      </table>
    </div>
  );
};

const Payments = () => {
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
