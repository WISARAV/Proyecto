// src/components/ui/AttendanceChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart = ({ present, absent }) => {
  const data = {
    labels: ["Presente", "Ausente"],
    datasets: [
      {
        label: "Asistencia",
        data: [present, absent],
        backgroundColor: ["#10B981", "#EF4444"],
        borderColor: ["#065F46", "#9F1239"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default AttendanceChart;