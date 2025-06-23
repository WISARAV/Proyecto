// src/pages/director/Home.jsx
import React from "react";
import StatCard from "../../components/ui/StatCard";
import BarChartComponent from "../../components/ui/BarchartComponent";

const DirectorHome = () => {
  // Datos simulados
  const stats = [
    { title: "Alumnos", value: "450", icon: "🎓" },
    { title: "Profesores", value: "35", icon: "👨‍🏫" },
    { title: "Cursos Activos", value: "20", icon: "📚" },
    { title: "Asistencia Promedio", value: "92%", icon: "✅" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenido, Director</h1>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Gráfico de rendimiento académico */}
      <div className="bg-white p-6 rounded shadow">
        <BarChartComponent />
      </div>
    </div>
  );
};

export default DirectorHome;
