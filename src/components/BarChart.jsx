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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    subtitle: {
      display: false,
    },
  },
  scales: {
    bar: {
      ticks: {
        min: 0,
        stepSize: 0.2,
        beginAtZero: true,
      },
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "07/12",
  "07/14",
  "07/18",
  "07/20",
  "07/22",
  "07/24",
  "07/26",
  "07/28",
  "07/30",
  "08/01",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      backgroundColor: [
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#774CD0",
        "#D9D9D9",
        "#D9D9D9",
        "#5681EF",
      ],

      barPercentage: 1.0,
      categoryPercentage: 1.0,
      yAxisID: "bar",
    },
  ],
};

export default function Chart() {
  return <Bar height={120} options={options} data={data} />;
}
