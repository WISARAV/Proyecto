// src/components/ui/AlertBadge.jsx
import React from "react";

const AlertBadge = ({ type }) => {
  const styles = {
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    success: "bg-green-500 text-white",
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${styles[type]}`}>
      {type === "danger" ? "Alto" : type === "warning" ? "Medio" : "Bajo"}
    </span>
  );
};

export default AlertBadge;
