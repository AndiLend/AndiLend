import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type IScore = 0 | 1 | 2;

const useQuests = () => {
  const result = useAccount();
  const address = result.address as "0x{string}";
  const { data: qualification } = useScaffoldReadContract({
    contractName: "AndinLend",
    functionName: "borrowerQualification",
    args: [address],
  });
  console.log("qualification: ", qualification);
  const scoreData = qualification as IScore;
  return { scoreData };
};

export default useQuests;
