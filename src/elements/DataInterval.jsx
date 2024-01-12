import React from "react";

const DataInterval = ({ selectedInterval, updateSelectedInterval }) => {
  const handleDropdownChange = (event) => {
    updateSelectedInterval(event.target.value);
  };

  return (
    <div>
      <label className="font-semibold">Select interval : </label>
      <select
        value={selectedInterval}
        onChange={handleDropdownChange}
        className="px-2 py-1"
      >
        <option value="30">Last 30 min</option>
        <option value="60">Last 60 min</option>
        <option value="120">Last 2 hour</option>
        <option value="180">Last 3 hour</option>
      </select>
    </div>
  );
};

export default DataInterval;
