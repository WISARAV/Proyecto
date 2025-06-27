import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div style={{ marginLeft: '250px', padding: '2rem', width: '100%' }}>
        {/* Navbar */}
        <Navbar />

        {/* Tarjetas de resumen */}
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Usuarios" value="1,234" subtitle="+12% desde la última semana" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Cursos Activos" value="89" subtitle="+5 nuevos esta semana" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Ingresos" value="$25,400" subtitle="Este mes" />
          </div>
          <div className="col-md-6 col-xl-3">
            <DashboardCard title="Tareas Pendientes" value="23" subtitle="Por revisar" />
          </div>
        </div>

        {/* Gráfico + Tabla */}
        <div className="row g-4">
          {/* Gráfico de progreso */}
          <div className="col-md-7">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Progreso Semanal</div>
              <div className="card-body">
                <canvas id="progressChart" height="100"></canvas>
              </div>
            </div>
          </div>

          {/* Tabla de estudiantes destacados */}
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Estudiantes Destacados</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Puntaje</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carlos M.</td>
                      <td>98%</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Ver</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Juan P.</td>
                      <td>95%</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Ver</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Ana L.</td>
                      <td>93%</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Ver</button>
                      </td>
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