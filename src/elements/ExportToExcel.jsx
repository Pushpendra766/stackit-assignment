import React from "react";
import * as ExcelJS from "exceljs";

const ExportToExcel = ({ data }) => {
  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("SampleSheet");

    data.forEach((row) => {
      worksheet.addRow(row);
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "SampleData.xlsx";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      className="bg-green-600 px-4 py-1 rounded-full text-white"
      onClick={exportToExcel}
    >
      Export to Excel
    </button>
  );
};

export default ExportToExcel;
