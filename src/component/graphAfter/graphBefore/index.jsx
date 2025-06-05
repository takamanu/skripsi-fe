import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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
      position: "bottom",
    },
    title: {
      display: false,
      text: "Hasil Akurasi Empat Metode",
    },
  },
};
const GraphBefore = () => {
  const data = {
    labels: ["Hasil Sebelum Oversampling"],
    datasets: [
      {
        label: "Outcome 0",

        data: [385],
        borderColor: "#0099cc",
        backgroundColor: "#0099cc",
      },
      {
        label: "Outcome 1",
        data: [209],
        borderColor: "#339966",
        backgroundColor: "#339966",
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default GraphBefore;
