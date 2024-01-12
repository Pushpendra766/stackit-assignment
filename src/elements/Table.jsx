import React, { useState } from "react";
import { COLUMNS } from "../constants";

const Table = ({ data, selectedColumns }) => {
  return (
    <div className="h-screen overflow-scroll">
      <table className="mt-10 text-center min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Time</th>
            {selectedColumns.map((column) => (
              <th className="py-2 px-4" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4">
                {row[0].split("T")[1].split("+")[0]}
              </td>
              {selectedColumns.map((column) => (
                <td className="py-2 px-4" key={column}>
                  {row[COLUMNS.indexOf(column) + 1]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
