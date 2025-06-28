// frontend/src/components/ProgressChart.jsx
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Importar Chart.js

const ProgressChart = ({ title, data }) => {
  const chartId = `progressChart-${Date.now()}`;

  useEffect(() => {
    let chartInstance = null;

    if (data && data.labels && data.values) {
      const ctx = document.getElementById(chartId).getContext('2d');

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label || 'Progress',
            data: data.values, // 👈 Correcto
            backgroundColor: '#0d6efd', // Color azul Bootstrap
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, chartId]);

  return (
    <div>
      <canvas id={chartId} width="100%" height="30"></canvas>
    </div>
  );
};

export default ProgressChart;