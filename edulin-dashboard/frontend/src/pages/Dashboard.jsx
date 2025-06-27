// frontend/src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div className="d-flex flex-column p-3 text-white bg-dark" style={{ width: '250px' }}>
        <h4 className="text-center mb-4">Plataforma Educativa</h4>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <a href="/dashboard" className="nav-link active">Inicio</a>
          </li>
          <li className="nav-item mb-2">
            <a href="/students" className="nav-link">Estudiantes</a>
          </li>
          <li className="nav-item mb-2">
            <a href="/courses" className="nav-link">Cursos</a>
          </li>
          <li className="nav-item mb-2">
            <a href="/settings" className="nav-link">Configuración</a>
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4 overflow-auto">
        {/* Navbar superior */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-4">
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">Bienvenido, Admin 👋</span>
            <button
              className="btn btn-outline-secondary d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Notificaciones</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Perfil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-danger text-white" href="/login">Cerrar Sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Tarjetas de resumen */}
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Usuarios</h5>
                <h2 className="card-text text-primary">1,234</h2>
                <small className="text-muted">+12% desde la última semana</small>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Cursos Activos</h5>
                <h2 className="card-text text-success">89</h2>
                <small className="text-muted">+5 nuevos esta semana</small>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Ingresos</h5>
                <h2 className="card-text text-warning">$25,400</h2>
                <small className="text-muted">Este mes</small>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Tareas Pendientes</h5>
                <h2 className="card-text text-danger">23</h2>
                <small className="text-muted">Por revisar</small>
              </div>
            </div>
          </div>
        </div>

        {/* Gráfico y tabla */}
        <div className="row g-4">
          <div className="col-md-7">
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Progreso Semanal</div>
              <div className="card-body">
                <canvas id="myChart" height="100"></canvas>
              </div>
            </div>
          </div>

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
                      <td><button className="btn btn-sm btn-primary">Ver</button></td>
                    </tr>
                    <tr>
                      <td>Juan P.</td>
                      <td>95%</td>
                      <td><button className="btn btn-sm btn-primary">Ver</button></td>
                    </tr>
                    <tr>
                      <td>Ana L.</td>
                      <td>93%</td>
                      <td><button className="btn btn-sm btn-primary">Ver</button></td>
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