import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieBefore = (props) => {
  const data = {
    labels: ["Non-Churn", "Churn"],
    datasets: [
      {
        data: [2850, 483],
        backgroundColor: ["#339966", "#0099cc"],
        borderWidth: 2,
      },
    ],
  };
  return <Pie data={data} />;
};

export default PieBefore;
