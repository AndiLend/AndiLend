"use client";

import { useState } from "react";
import { IntegerInput } from "../scaffold-eth";
import "./FoundingForm.css";
import { useAccount, useConfig } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const contractName = "AndinLend";
const FoundingForm = () => {
  const [amount, setAmount] = useState<string | bigint>("");
  const [time, setTime] = useState("");
  const { address } = useAccount();
  const config = useConfig();
  const { writeContractAsync, isPending } = useScaffoldWriteContract(contractName, {
    config: config,
  });

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (address) {
      const numberTime = Number(time);
      const amountFinal = BigInt(amount);
      const loanTime = BigInt(numberTime) * BigInt(2628000);
      const interest = 14;
      const pendingFeesCount = numberTime;
      const creditScore = 2;
      const proof = "0x35";
      await writeContractAsync({
        functionName: "requestLoan",
        args: [amountFinal, loanTime, interest, pendingFeesCount, creditScore, proof],
        account: address,
      } as never);
      setAmount("");
      setTime("");
    }
  };

  return (
    <div className="container-founding">
      <form className="space-y-6 form-founding" onSubmit={handleSubmit}>
        <div className="form-login-input">
          <div>
            <label htmlFor="amount" className="text-sm font-medium text-gray-700">
              Amount to get in USDT
            </label>
            <div className="mt-1">
              <IntegerInput
                value={amount}
                onChange={e => {
                  setAmount(e);
                }}
                placeholder="USDT"
                name="amount"
              />
            </div>
          </div>
          <div>
            <label htmlFor="months" className="text-sm font-medium text-gray-700">
              Estimated months of payment
            </label>
            <div className="mt-1">
              <input
                value={time}
                onChange={handleTimeChange}
                type="number"
                name="national-identity"
                id="months"
                className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="3"
              />
            </div>
          </div>
          <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
            Your Interest estimated is: 5.1%
          </label>
        </div>
        <div className="form-submit">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
            disabled={isPending}
          >
            Get Funding
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoundingForm;
