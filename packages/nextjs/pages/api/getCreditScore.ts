import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  ethAddress: string;
  dni: string;
  creditScore: string;
};
function externalServiceCreditScore(address: any, dni: any) {
  console.log({ address, dni });
  const min = 0;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { ethAddress, dni } = req.query;
  if (typeof ethAddress != "string" || typeof dni != "string") return;

  const creditScore = String(externalServiceCreditScore(ethAddress, dni));
  res.status(200).json({ ethAddress, dni, creditScore });
}
