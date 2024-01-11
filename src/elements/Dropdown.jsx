import React from "react";

const Dropdown = ({ selectedViz, setSelectedViz }) => {
  const handleDropdownChange = (event) => {
    setSelectedViz(event.target.value);
  };

  return (
    <div>
      <label htmlFor="myDropdown">Select visualization type : </label>
      <select
        value={selectedViz}
        onChange={handleDropdownChange}
        className="px-2 py-1"
      >
        <option value="Summary">Summary</option>
        <option value="Table">Table</option>
        <option value="Chart">Chart</option>
      </select>
    </div>
  );
};

export default Dropdown;
