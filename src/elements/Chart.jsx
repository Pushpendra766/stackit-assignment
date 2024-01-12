import React, { useState } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Chart = ({ data, selectedColumns }) => {
  const [currentChart, setCurrentChart] = useState("line");
  return (
    <div>
      <div className="flex gap-2 pt-4 pl-4">
        <button
          className={`${
            currentChart === "line" && "bg-blue-200"
          } px-3 py-1 rounded-full`}
          onClick={() => setCurrentChart("line")}
        >
          Price Chart
        </button>
        <button
          className={`${
            currentChart === "bar" && "bg-blue-200"
          } px-3 py-1 rounded-full`}
          onClick={() => setCurrentChart("bar")}
        >
          Volume Chart
        </button>
      </div>
      {currentChart === "line" ? (
        <LineChart data={data} selectedColumns={selectedColumns} />
      ) : (
        <BarChart data={data} selectedColumns={selectedColumns} />
      )}
    </div>
  );
};

export default Chart;
