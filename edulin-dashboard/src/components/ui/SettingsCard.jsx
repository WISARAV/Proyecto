// src/components/ui/SettingsCard.jsx
import React from "react";

const SettingsCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default SettingsCard;