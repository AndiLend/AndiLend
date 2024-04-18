import React from "react";
import Score from "../Score/Score";

const CreditScore = () => {
  return (
    <div>
      <div className="max-w-xs mx-auto">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Credit Score | last month</h3>
          <div className="h-22 w-22">
            <Score title={"High Score"} value={100} />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            The score goes from 1 to 1000, the closer to 1000, the better financing opportunities you will have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
