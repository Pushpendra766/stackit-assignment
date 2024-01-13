import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Home = () => {
  const [selectedColumns, setSelectedColumns] = useState([
    "Open",
    "Close",
    "High",
    "Low",
    "Volume",
  ]);
  const [selectedInterval, setSelectedInterval] = useState("60");
  return (
    <div>
      <div className="px-10 py-3 text-center border border-gray-300 bg-gray-100">
        <h1 className="text-lg font-semibold text-gray-700">
          {" "}
          Data Analysis Tool
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 mx-2 md:mx-6 xl:mx-10 py-10">
        <div className="xl:w-2/12 rounded-md p-3 border-gray-300 border">
          <LeftPanel
            selectedColumns={selectedColumns}
            updateSelectedColumns={(state) => setSelectedColumns(state)}
            selectedInterval={selectedInterval}
            updateSelectedInterval={(state) => setSelectedInterval(state)}
          />
        </div>
        <div className="xl:w-10/12 rounded-md p-3 border-gray-300 border">
          <RightPanel
            selectedColumns={selectedColumns}
            selectedInterval={selectedInterval}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
