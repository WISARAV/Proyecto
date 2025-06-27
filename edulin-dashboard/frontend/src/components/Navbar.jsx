import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/dashboard">
          Plataforma Educativa
        </a>
        <button
          className="btn btn-outline-secondary d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
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
  );
};

export default Navbar;