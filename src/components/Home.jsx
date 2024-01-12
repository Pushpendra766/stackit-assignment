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
      <div className="bg-blue-300 px-10 py-3 text-center shadow-lg">
        <h1 className="text-lg font-semibold text-blue-900">
          {" "}
          Data Analysis Tool
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 mx-2 md:mx-6 xl:mx-10 py-10">
        <div className="xl:w-2/12 bg-gray-200 rounded-md p-2 border-red-500 border-2">
          <LeftPanel
            selectedColumns={selectedColumns}
            updateSelectedColumns={(state) => setSelectedColumns(state)}
            selectedInterval={selectedInterval}
            updateSelectedInterval={(state) => setSelectedInterval(state)}
          />
        </div>
        <div className="xl:w-10/12 rounded-md p-2 border-red-500 border-2">
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
