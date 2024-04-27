"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import circuit from "../../../zk_credit_score/target/zk_credit_score.json";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";
import { Noir } from "@noir-lang/noir_js";
import { Buffer } from "buffer";
import { Address } from "viem";
import { useAccount, useConfig } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const verifierContract = "ZkCreditScoreVerifier";

const UserForm = () => {
  const router = useRouter();
  const { address } = useAccount();
  const [dni, setDni] = React.useState("");
  const config = useConfig();
  const { writeContractAsync, isPending } = useScaffoldWriteContract(verifierContract, {
    config: config,
  });

  const handleLoginUser = async (e: any) => {
    e.preventDefault();
    localStorage.setItem("rol", "user");
    console.log({ address, dni });
    // api call to /api/getCreditScore with axios
    if (typeof address != "string") return;
    // @ts-ignore
    const backend = new BarretenbergBackend(circuit);
    // @ts-ignore
    const noir = new Noir(circuit, backend);
    const res = await fetch(
      "/api/getCreditScore?" +
        new URLSearchParams({
          ethAddress: address,
          dni: dni,
        }),
    );
    const response = await res.json();
    console.log(response);
    const { creditScore } = response;
    const input = {
      x: creditScore,
    };
    const proofData = await noir.generateFinalProof(input);
    console.log({ proofData });
    const qualification = creditScore <= 300 ? 0 : creditScore <= 700 ? 1 : 2;
    const hexQualification = "0x" + qualification.toString(16).padStart(64, "0");
    // proof = "0x" + ethereumjs.Buffer.Buffer.from(proof.proof).toString("hex");
    const proof = "0x" + Buffer.from(proofData.proof).toString("hex");
    console.log({ proof });
    console.log([hexQualification]);
    await writeContractAsync(
      {
        functionName: "sendProof",
        args: [proof, [hexQualification]],
        account: address,
      } as never,
      {
        onSuccess: async (txnReceipt: Address) => {
          console.log("📦 Transaction blockHash", txnReceipt);
          router.push("/dashboard/quests", { scroll: false });
        },
      },
    );
  };

  return (
    <>
      <form className="flex flex-col justify-center w-3/5" action="#" method="GET">
        <div className="flex h-4/5 flex-col justify-center gap-4">
          <div>
            <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
              National Identity <span className="text-error">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="national-identity"
                id="national-identity"
                className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0000000005-9"
                onChange={e => setDni(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="national-identity-upload" className="text-sm font-medium text-gray-700">
              Upload the front part of your National Identity <span className="text-error">*</span>
            </label>
            <div className="mt-1">
              <input
                type="file"
                name="national-identity-upload"
                id="national-identity-upload"
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="national-identity-upload" className="text-sm font-medium text-gray-700">
              Upload the back part of your National Identity <span className="text-error">*</span>
            </label>
            <div className="mt-1">
              <input
                type="file"
                name="national-identity-upload"
                id="national-identity-upload"
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-end justify-start w-3/5">
        <div className="flex flex-col">
          <button
            onClick={handleLoginUser}
            type="submit"
            className="bg-secondary text-black px-16 py-3 rounded hover:bg-primary hover:text-white"
            disabled={!address || isPending}
          >
            GET CREDIT SCORE
          </button>

          <div className="text-sm font-medium text-start text-[#999999] mt-2">
            ALREADY AN USER?{" "}
            <Link
              href="/login/user"
              className="text-primary underline underline-offset-4 font-bold hover:text-indigo-700 "
            >
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
