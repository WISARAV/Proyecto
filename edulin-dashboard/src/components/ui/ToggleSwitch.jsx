// src/components/ui/ToggleSwitch.jsx
import React from "react";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded shadow-sm">
      <span>{label}</span>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border border-gray-300"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;