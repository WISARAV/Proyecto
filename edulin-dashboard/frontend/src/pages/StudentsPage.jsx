import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';

const StudentsPage = () => {
  const tableData = [
    { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: '2019' },
    { id: 'PRE1245', name: 'Jolie Hoskins', marks: 1195, percentage: '99.5%', year: '2018' },
    { id: 'PRE1625', name: 'Pennington Joy', marks: 1196, percentage: '99.6%', year: '2017' },
    { id: 'PRE2516', name: 'Millie Marsden', marks: 1187, percentage: '98.2%', year: '2016' },
    { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: '2015' }
  ];

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido Principal */}
      <div style={{ marginLeft: '250px', padding: '2rem', width: '100%' }}>
        {/* Navbar */}
        <Navbar />

        <h2 className="mb-4">Estudiantes</h2>

        {/* Tabla dinámica */}
        <UserTable 
          title="Lista de Estudiantes"
          columns={[
            { label: 'ID', key: 'id' },
            { label: 'Nombre', key: 'name' },
            { label: 'Calificación', key: 'marks' },
            { label: 'Porcentaje', key: 'percentage' },
            { label: 'Año', key: 'year' }
          ]}
          data={tableData}
        />
      </div>
    </div>
  );
};

export default StudentsPage;