import React, { useEffect, useState } from "react";
import Dropdown from "../elements/Dropdown";
import Summary from "../elements/Summary";
import Table from "../elements/Table";
import Chart from "../elements/Chart";
import { API_ENDPOINT } from "../constants";

const RightPanel = ({ selectedColumns, selectedInterval }) => {
  const [selectedViz, setSelectedViz] = useState("Summary");

  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch(API_ENDPOINT);
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
        <Summary
          data={data.slice(0, selectedInterval)}
          selectedColumns={selectedColumns}
        />
      )}
      {selectedViz === "Table" && (
        <Table
          data={data.slice(0, selectedInterval)}
          selectedColumns={selectedColumns}
        />
      )}
      {selectedViz === "Chart" && (
        <Chart
          data={data.slice(0, selectedInterval)}
          selectedColumns={selectedColumns}
        />
      )}
    </div>
  );
};

export default RightPanel;
