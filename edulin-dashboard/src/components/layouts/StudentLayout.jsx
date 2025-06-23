// src/components/layouts/StudentLayout.jsx
import React from "react";

const StudentLayout = ({ children }) => {
  return (
    <div>
      <h1>Estudiante Layout</h1>
      {children}
    </div>
  );
};

export default StudentLayout;