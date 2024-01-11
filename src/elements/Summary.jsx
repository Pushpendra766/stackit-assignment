import React from "react";
import getSummaryData from "../helper/getPropertyData";

const Summary = ({ data, selectedColumns }) => {
  const summaryData = getSummaryData(data, selectedColumns);
  return (
    <div className="flex gap-4 justify-center pt-10">
      {summaryData.map((summary) => {
        return (
          <div
            className="bg-blue-300 p-3 rounded-md w-fit"
            key={summary.property}
          >
            <h1 className="text-lg font-semibold text-center">
              {summary.property}
            </h1>
            <p>Summation : {summary.summation}</p>
            <p>Average : {summary.average}</p>
            <p>Median : {summary.median}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
