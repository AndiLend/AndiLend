import React from "react";
import Score from "../Score/Score";

interface ICreditScore {
  scoreData: 0 | 1 | 2;
}
const scoreTexts = {
  0: {
    text: "Low Score",
    score: 0,
  },
  1: {
    text: "Medium Score",
    score: 50,
  },
  2: {
    text: "High Score",
    score: 100,
  },
};
const CreditScore = ({ scoreData }: ICreditScore) => {
  const textScore = scoreData !== undefined ? scoreTexts[scoreData] : scoreTexts[2];

  return (
    <div className="p-8 shadow-lg h-full">
      <h3 className="text-lg font-semibold text-black">Credit Score</h3>
      <div className="max-w-xs mx-auto gap-4 flex">
        <div className="text-center">
          <div className="h-22 w-22">
            <Score title={textScore?.text} value={textScore?.score} />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            The score goes from 1 to 100, the closer to 100, the better financing opportunities you will have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
