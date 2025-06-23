// src/components/ui/ReportCard.jsx
import React from "react";

const ReportCard = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default ReportCard;
