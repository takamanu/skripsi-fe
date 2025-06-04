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
      display: true,
      text: "Hasil Akurasi Tiga Metode",
    },
  },
};
const Graph = (props) => {
  const [accSmote, setAccSmote] = useState("");
  const [accAdasyn, setAccAdasyn] = useState("");
  const [accSvmSmote, setAccSvmSmote] = useState("");
  const [accRf, setAccRf] = useState("");

  useEffect(() => {
    const SMOTE = JSON.parse(localStorage.getItem("acc_SMOTE"));
    const SVMSMOTE = JSON.parse(localStorage.getItem("acc_SVM-SMOTE"));
    const ADASYN = JSON.parse(localStorage.getItem("acc_ADASYN"));
    const Rf = JSON.parse(localStorage.getItem("acc_RandomForest"));
    setAccSmote(SMOTE);
    setAccSvmSmote(SVMSMOTE);
    setAccAdasyn(ADASYN);
    setAccRf(Rf);
  }, []);

  const data = {
    labels: ["Akurasi Tiga Metode"],
    datasets: [
      {
        label: "Akurasi XGBoost",
        data: [accRf * 100],
        borderColor: "#0099cc",
        backgroundColor: "#0099cc",
      },
      {
        label: "Akurasi XGBoost dan SMOTE",
        data: [accSmote * 100],
        borderColor: "#339966",
        backgroundColor: "#339966",
      },
      {
        label: "Akurasi XGBoost dan SMOTE-Tomek Link",
        data: [accAdasyn * 100],
        borderColor: "#777777",
        backgroundColor: "#777777",
      },
    ],
  };
  return (
    <div className="">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Graph;
