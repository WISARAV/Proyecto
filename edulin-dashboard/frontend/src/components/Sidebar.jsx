// frontend/src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px', position: 'fixed' }}>
      <h4 className="text-center mb-4">Menú</h4>
      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <a className="nav-link active" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/students')} role="button">
            Students
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/teachers')} role="button">
            Teachers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/departments')} role="button">
            Departments
          </a>
        </li>
        {/* ... más opciones */}
      </ul>
    </div>
  );
};

export default Sidebar;