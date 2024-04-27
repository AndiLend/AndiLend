import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const useQuests = () => {
  const result = useAccount();
  const address = result.address as "0x{string}";
  const { data: qualification } = useScaffoldReadContract({
    contractName: "AndinLend",
    functionName: "borrowerQualification",
    args: [address],
  });
  console.log("qualification: ", qualification);
  return { scoreData: qualification ? qualification * 500 : 0 };
};

export default useQuests;
