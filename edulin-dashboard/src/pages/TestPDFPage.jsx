import React from "react";
import PDFGenerator from "@/components/ui/PDFGenerator";

const TestPDFPage = () => {
  return (
    <div className="p-6">
      <h1 id="pdf-content" className="mb-4 text-xl font-bold">
        Este contenido se convertirá en PDF
      </h1>
      <p id="pdf-content">
        Aquí puedes poner cualquier contenido que quieras exportar.
      </p>

      {/* El botón le pasamos el id del contenedor a exportar */}
      <PDFGenerator elementId="pdf-content" filename="mi_reporte" />
    </div>
  );
};

export default TestPDFPage;
