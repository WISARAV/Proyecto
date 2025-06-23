// src/components/ui/BarChartComponent.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartComponent = () => {
  const data = {
    labels: ["Matemáticas", "Lenguaje", "Ciencias", "Historia"],
    datasets: [
      {
        label: "Promedio General",
        backgroundColor: "#3b82f6",
        borderColor: "#2563eb",
        borderWidth: 1,
        data: [14.5, 15.2, 13.8, 14.9],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Rendimiento Académico por Curso",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChartComponent;