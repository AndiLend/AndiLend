"use client";

import { useState } from "react";
import { IntegerInput } from "../scaffold-eth";
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
      const amountFinal = BigInt(amount) * BigInt(1_000_000);
      const loanTime = BigInt(numberTime) * BigInt(2_628_000);
      const interest = 14;
      const pendingFeesCount = numberTime;
      console.log(amountFinal);
      await writeContractAsync({
        functionName: "requestLoan",
        args: [amountFinal, loanTime, interest, pendingFeesCount],
        account: address,
      } as never);
      setAmount("");
      setTime("");
    }
  };

  return (
    <form
      className="lex items-center shadow-lg justify-start h-full w-full flex flex-col bg-neutral gap-12 p-8"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Amount to get in USDT
        </label>
        <IntegerInput
          value={amount}
          onChange={e => {
            setAmount(e);
          }}
          placeholder="USDT"
          name="amount"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="months" className="text-sm font-medium text-gray-700">
          Estimated months of payment
        </label>
        <input
          value={time}
          onChange={handleTimeChange}
          type="number"
          name="national-identity"
          id="months"
          className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none "
          placeholder="3"
        />
      </div>
      <label htmlFor="national-identity" className="w-full text-sm font-medium text-gray-700">
        The actual interest rate is 14% monthly.
      </label>
      <div className="flex flex-col gap-2 w-2/4">
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-4 text-sm font-medium text-white bg-secondary border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
          disabled={isPending}
        >
          Get Funding
        </button>
      </div>
    </form>
  );
};

export default FoundingForm;
