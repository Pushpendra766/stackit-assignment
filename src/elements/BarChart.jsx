import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ data, selectedColumns }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Stock Volume",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 1,
  };

  const labels = data.map((el) => el[0].split("T")[1].split("+")[0]);

  const graphData = {
    labels,
    datasets: [
      {
        label: "Volume",
        data: data.map((el) => el[5]),
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return <Bar options={options} data={graphData} />;
}

export default BarChart;
