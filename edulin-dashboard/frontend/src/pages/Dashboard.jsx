// frontend/src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import useAuth from '../hooks/useAuth';
import UserTable from '../components/UserTable';
import ProgressChart from '../components/ProgressChart';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    console.log('Usuario logueado:', user);
  }

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido Principal */}
      <div style={{ marginLeft: '250px', width: '100%', padding: '2rem' }}>
        {/* Navbar */}
        <Navbar />

        {/* Título */}
        <h2 className="mb-4">Overview</h2>

        {/* Fila de Tarjetas */}
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Students" value="50055" subtitle="Total students enrolled" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Awards" value="50+" subtitle="Awards won this year" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Revenue" value="$505" subtitle="Monthly revenue" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Teachers" value="123" subtitle="Active teachers" />
          </div>
        </div>

        {/* Gráfico + Tabla */}
        <div className="row g-4">
          {/* Gráfico de progreso */}
          <div className="col-md-7">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Progress Overview</div>
              <div className="card-body">
                <canvas id="progressChart" height="100"></canvas>
              </div>
            </div>
          </div>
            {/* Tabla reutilizable */}
            <UserTable 
            title="Star Students" 
            columns={[
            { label: 'ID', key: 'id' },
            { label: 'Name', key: 'name' },
            { label: 'Marks', key: 'marks' },
            { label: 'Percentage', key: 'percentage' },
            { label: 'Year', key: 'year' }
            ]}
            data={[
            { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: '2019' },
            { id: 'PRE1245', name: 'Jolie Hoskins', marks: 1195, percentage: '99.5%', year: '2018' },
            { id: 'PRE1625', name: 'Pennington Joy', marks: 1196, percentage: '99.6%', year: '2017' },
            { id: 'PRE2516', name: 'Millie Marsden', marks: 1187, percentage: '98.2%', year: '2016' },
            { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: '2015' }
            ]}
            />
            {/* Gráfico de progreso */}
<div className="col-md-7">
  <div className="card shadow-sm">
    <div className="card-header fw-bold">Progress Overview</div>
    <div className="card-body">
      <ProgressChart
        data={{
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          values: [80, 85, 90, 95],
          label: 'Progress (%)'
        }}
      />
    </div>
  </div>
</div>
          {/* Tabla de estudiantes destacados */}
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Star Students</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Marks</th>
                      <th>Percentage</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PRE2209</td>
                      <td>John Smith</td>
                      <td>1185</td>
                      <td>98%</td>
                      <td>2019</td>
                    </tr>
                    <tr>
                      <td>PRE1245</td>
                      <td>Jolie Hoskins</td>
                      <td>1195</td>
                      <td>99.5%</td>
                      <td>2018</td>
                    </tr>
                    <tr>
                      <td>PRE1625</td>
                      <td>Pennington Joy</td>
                      <td>1196</td>
                      <td>99.6%</td>
                      <td>2017</td>
                    </tr>
                    <tr>
                      <td>PRE2516</td>
                      <td>Millie Marsden</td>
                      <td>1187</td>
                      <td>98.2%</td>
                      <td>2016</td>
                    </tr>
                    <tr>
                      <td>PRE2209</td>
                      <td>John Smith</td>
                      <td>1185</td>
                      <td>98%</td>
                      <td>2015</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;