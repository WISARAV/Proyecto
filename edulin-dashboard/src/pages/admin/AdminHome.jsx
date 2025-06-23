// src/pages/admin/AdminHome.jsx
import React from "react";
import StatCard from "../../components/ui/StatCard";
import DataIssueCard from "../../components/ui/DataIssueCard";

const AdminHome = () => {
  // Datos simulados
  const stats = [
    { title: "Usuarios Totales", value: "1,200", icon: "👥" },
    { title: "Profesores", value: "85", icon: "👨‍🏫" },
    { title: "Alumnos", value: "950", icon: "🎓" },
    { title: "Datos Duplicados", value: "7", icon: "⚠️" },
  ];

  const issues = [
    {
      id: 1,
      title: "Usuario duplicado",
      description: "Juan Pérez aparece con dos correos diferentes.",
    },
    {
      id: 2,
      title: "Curso sin profesor asignado",
      description: "Matemáticas - 3° A no tiene docente responsable.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Datos duplicados o erróneos */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Datos Erróneos o Duplicados</h2>
        {issues.length > 0 ? (
          issues.map(issue => (
            <DataIssueCard key={issue.id} issue={issue} />
          ))
        ) : (
          <p>No hay datos problemáticos.</p>
        )}
      </div>
    </div>
  );
};

export default AdminHome;