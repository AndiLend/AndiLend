import { IApprovedTable } from ".";
import { Loan } from "../Requests";
import type { Address } from "blo";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const useApproved = () => {
  const result = useAccount();
  const address = result.address as Address;
  const { data: loans } = useScaffoldReadContract({
    contractName: "AndinLend",
    functionName: "getLoansByLend",
    args: [address],
  });
  const approvedData: IApprovedTable[] =
    loans?.map((loan: Loan) => {
      return {
        amount: Number(loan.amount / BigInt(1_000_000)),
        balanceDue: Number(loan.balanceDue / BigInt(1_000_000)),
        interest: loan.interest,
        pendingFeesCount: loan.pendingFeesCount,
        totalLoanTime: `${BigInt(loan.loanTime) / BigInt(2_628_000)} months`,
        status: loan.status === 1 ? "Waiting payment" : "Received",
      };
    }) ?? ([] as IApprovedTable[]);
  return { approvedData };
};

export default useApproved;
