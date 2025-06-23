// src/components/ui/PDFGenerator.jsx
import React from "react";
import generatePDF from "@/utils/generatePDF";



const PDFGenerator = ({ elementId, filename }) => {
  return (
    <button
      onClick={() => generatePDF(elementId, filename)}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      📄 Descargar PDF
    </button>
  );
};

export default PDFGenerator;