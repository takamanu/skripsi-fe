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
      position: "top",
    },
    title: {
      display: false,
      text: "Hasil Akurasi Empat Metode",
    },
  },
};
const GraphRelatedWorks = (props) => {
  const [accSvmSmote, setAccSvmSmote] = useState("");

  useEffect(() => {
    const SVMSMOTE = JSON.parse(localStorage.getItem("acc_SVM-SMOTE"));
    setAccSvmSmote(SVMSMOTE);
  }, []);

  const data = {
    labels: ["Perbandingan Akurasi dengan Peneliti Terdahulu"],
    datasets: [
      {
        label: "Pradipta et al., 2021",
        data: [0.8125 * 100],
        borderColor: "#339966",
        backgroundColor: "#339966",
      },
      {
        label: "Asniar et al., 2022",
        data: [0.7513 * 100],
        borderColor: "#0099cc",
        backgroundColor: "#0099cc",
      },
      {
        label: "Thejas et al., 2022",
        data: [0.7586 * 100],
        borderColor: "#777777",
        backgroundColor: "#777777",
      },
      {
        label: "Proposed Method (2023)",
        data: [accSvmSmote * 100],
        borderColor: "#BB4D81",
        backgroundColor: "#BB4D81",
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default GraphRelatedWorks;
