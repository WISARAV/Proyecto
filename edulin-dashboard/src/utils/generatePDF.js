// src/utils/generatePDF.js
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = (elementId, filename = "reporte") => {
  const input = document.getElementById(elementId);
  if (!input) {
    alert("Elemento no encontrado: " + elementId);
    return;
  }
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${filename}.pdf`);
  });
};

export default generatePDF;
