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
  return (
    <div>
      <div className="bg-blue-300 px-10 py-3 text-center shadow-lg">
        <h1 className="text-lg font-semibold text-blue-900">
          {" "}
          Data Analysis Tool
        </h1>
      </div>
      <div className="flex gap-4 mx-20 py-10">
        <div className="w-2/12 bg-gray-200 rounded-md p-2">
          <LeftPanel
            selectedColumns={selectedColumns}
            updateSelectedColumns={(state) => setSelectedColumns(state)}
          />
        </div>
        <div className="w-10/12 rounded-md p-2">
          <RightPanel selectedColumns={selectedColumns} />
        </div>
      </div>
    </div>
  );
};

export default Home;
