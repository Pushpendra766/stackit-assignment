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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

function LineChart({ data }) {
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
    datasets: [
      {
        label: "Open",
        data: data.map((el) => el[1]),
        borderColor: "rgb(255, 99, 132)",
        fill: false,
        borderWidth: 1.2,
      },
      {
        label: "High",
        data: data.map((el) => el[2]),
        borderColor: "rgb(75, 192, 192)",
        fill: false,
        borderWidth: 1.2,
      },
      {
        label: "Low",
        data: data.map((el) => el[3]),
        borderColor: "rgb(53, 162, 235)",
        fill: false,
        borderWidth: 1.2,
      },
      {
        label: "Close",
        data: data.map((el) => el[4]),
        borderColor: "rgb(70, 70, 235)",
        fill: false,
        borderWidth: 1.2,
      },
    ],
  };

  return <Line options={options} data={graphData} />;
}

export default LineChart;
