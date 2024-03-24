import React from "react";
import Image from "next/image";

const CreditScore = () => {
  return (
    <div>
      <div className="max-w-xs mx-auto">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Credit Score | last month</h3>
          <Image src="/assets/greed.png" width={365} height={173} alt="greed" />

          <p className="text-sm text-gray-600 mt-1">
            The score goes from 1 to 1000, the closer to 1000, the better financing opportunities you will have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
