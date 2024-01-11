import React, { useEffect, useState } from "react";
import Dropdown from "../elements/Dropdown";
import Summary from "../elements/Summary";
import Table from "../elements/Table";
import Chart from "../elements/Chart";

const RightPanel = ({ selectedColumns }) => {
  const [selectedViz, setSelectedViz] = useState("Summary");
  const endpoint =
    "https://api.upstox.com/v2/historical-candle/intraday/NSE_EQ%7CINE848E01016/1minute";

  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch(endpoint);
    const result = await res.json();
    setData(result.data.candles);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Dropdown selectedViz={selectedViz} setSelectedViz={setSelectedViz} />
      {selectedViz === "Summary" && (
        <Summary data={data} selectedColumns={selectedColumns} />
      )}
      {selectedViz === "Table" && (
        <Table data={data} selectedColumns={selectedColumns} />
      )}
      {selectedViz === "Chart" && <Chart />}
    </div>
  );
};

export default RightPanel;
