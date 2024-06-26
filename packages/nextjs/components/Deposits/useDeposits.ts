import type { Address } from "blo";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type IScore = 0 | 1 | 2;

const useDeposits = () => {
  const result = useAccount();
  const address = result.address as Address;
  const { data: loan } = useScaffoldReadContract({
    contractName: "AndinLend",
    functionName: "loans",
    args: [address],
  });
  const scoreData: IScore = 0;
  const fundingReceived = loan ? Number(loan[0]) / 1_000_000 : "100";
  const interest = loan ? Number(loan[4]) : "14%";
  const totalPayment = loan ? Number(loan[1]) / 1_000_000 : "114";
  const feeCounts = loan ? Number(loan[6]) : "3";
  const isPending = loan ? loan[7] === 0 : false;

  return { fundingReceived, interest, totalPayment, scoreData, feeCounts, isPending };
};

export default useDeposits;
