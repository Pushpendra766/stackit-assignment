import React from "react";
import DataInterval from "../elements/DataInterval";
import { COLUMNS } from "../constants";

const LeftPanel = ({
  selectedColumns,
  updateSelectedColumns,
  selectedInterval,
  updateSelectedInterval,
}) => {
  const handleChange = (column, isChecked) => {
    if (isChecked) {
      updateSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      updateSelectedColumns((prev) => [...prev, column]);
    }
  };
  return (
    <div>
      <h1 className="text-lg font-semibold text-center py-4">Filters</h1>
      <p className="font-semibold">Select columns :</p>
      <div className="p-4 flex flex-wrap gap-4">
        {COLUMNS.map((column) => {
          const isChecked = selectedColumns.includes(column);
          return (
            <div className="flex gap-2" key={column}>
              <input
                type="checkbox"
                className="w-4"
                defaultChecked={isChecked}
                onChange={() => handleChange(column, isChecked)}
              />
              {column}
            </div>
          );
        })}
      </div>
      <DataInterval
        selectedInterval={selectedInterval}
        updateSelectedInterval={updateSelectedInterval}
      />
    </div>
  );
};

export default LeftPanel;
