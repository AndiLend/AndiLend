import React from "react";
import HeaderPage from "../Global/HeaderPage";
import "./Requests.css";

const RequestTable = () => {
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
          <tr>
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
          </tr>

          <tr>
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
          </tr>

          <tr>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Requests = () => {
  return (
    <div className="main-requests">
      <HeaderPage
        title="Welcome, Juan!"
        description="You can see the request for funding, one of the variables to evaluate is the score"
      />
      <div className="container-requests container mx-auto p-4">
        <RequestTable />
      </div>
    </div>
  );
};

export default Requests;
