import React from "react";
import * as ExcelJS from "exceljs";
import { RiFileExcel2Fill } from "react-icons/ri";

const ExportToExcel = ({ data }) => {
  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("SampleSheet");
    worksheet.addRow([
      "Timestamp",
      "Open",
      "Low",
      "High",
      "Close",
      "Volume",
      "Open Interest",
    ]);
    data.forEach((row) => {
      worksheet.addRow(row);
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "stock_data.xlsx";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      className="bg-green-600 px-4 py-1 rounded-full text-white flex justify-center gap-2 items-center"
      onClick={exportToExcel}
    >
      <span>
        <RiFileExcel2Fill />
      </span>
      Export to Excel{" "}
    </button>
  );
};

export default ExportToExcel;
