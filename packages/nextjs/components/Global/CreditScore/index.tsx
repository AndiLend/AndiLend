import React, { useState } from "react";
import Score from "../Score/Score";

const CreditScore = () => {
  const [scoreData, setScoreData] = useState(80);
  console.log(setScoreData);

  return (
    <div className="p-8 shadow-lg h-full">
      <h3 className="text-lg font-semibold text-black">Credit Score</h3>
      <div className="max-w-xs mx-auto gap-4 flex">
        <div className="text-center">
          <div className="h-22 w-22">
            <Score title={"High Score"} value={scoreData} />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            The score goes from 1 to 1000, the closer to 1000, the better financing opportunities you will have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
