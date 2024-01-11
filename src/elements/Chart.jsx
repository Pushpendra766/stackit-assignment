import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Chart = ({ data, selectedColumns }) => {
  return (
    <div>
      <LineChart data={data} selectedColumns={selectedColumns} />
      <BarChart data={data} selectedColumns={selectedColumns} />
    </div>
  );
};

export default Chart;
