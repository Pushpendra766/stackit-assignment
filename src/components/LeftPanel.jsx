import React, { useState } from "react";

const LeftPanel = ({ selectedColumns, updateSelectedColumns }) => {
  const columns = ["Open", "Close", "High", "Low", "Volume"];

  const handleChange = (column, isChecked) => {
    if (isChecked) {
      updateSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      updateSelectedColumns((prev) => [...prev, column]);
    }
  };
  return (
    <div>
      <p>Select columns to be included in report :</p>
      <div className="p-4 flex flex-col gap-4">
        {columns.map((column) => {
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
    </div>
  );
};

export default LeftPanel;
