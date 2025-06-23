// src/components/common/FileUpload.jsx
import React, { useState } from "react";

const FileUpload = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Adjuntar Archivo</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />
      {fileName && <p className="mt-2 text-sm text-gray-600">Archivo seleccionado: {fileName}</p>}
    </div>
  );
};

export default FileUpload;
