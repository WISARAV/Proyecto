// src/components/layouts/ParentLayout.jsx
import React from "react";

const ParentLayout = ({ children }) => {
  return (
    <div>
      <h1>Padre Layout</h1>
      {children}
    </div>
  );
};

export default ParentLayout;
