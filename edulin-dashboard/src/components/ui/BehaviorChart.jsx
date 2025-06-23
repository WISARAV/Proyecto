// src/components/ui/BehaviorChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BehaviorChart = ({ percentage }) => {
  const data = {
    labels: ["Correcto", "Incidencias"],
    datasets: [
      {
        label: "Comportamiento",
        data: [percentage, 100 - percentage],
        backgroundColor: ["#10B981", "#F59E0B"],
        borderColor: ["#065F46", "#D97706"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default BehaviorChart;
