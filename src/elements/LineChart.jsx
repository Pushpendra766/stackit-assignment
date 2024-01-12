import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { COLUMNS, COLORS } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

function LineChart({ data, selectedColumns }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Stock Price",
      },
    },
    responsive: true,
    scales: {
      x: {
        type: "linear", // Use linear scale for X-axis
      },
      y: {
        stacked: false, // No stacking for Y-axis
      },
    },
  };

  const labels = data.map((el, i) => i + 1);
  const graphData = {
    labels,
    datasets: selectedColumns
      .filter((column) => column != "Volume")
      .map((column) => {
        return {
          label: column,
          data: data.map((el) => el[COLUMNS.indexOf(column) + 1]),
          borderColor: COLORS[COLUMNS.indexOf(column)],
          fill: false,
          borderWidth: 1.2,
        };
      }),
  };

  return <Line options={options} data={graphData} />;
}

export default LineChart;
