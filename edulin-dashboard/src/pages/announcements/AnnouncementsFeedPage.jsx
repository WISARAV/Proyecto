// src/pages/announcements/AnnouncementsFeedPage.jsx
import React from "react";
import AnnouncementCard from "../../components/ui/AnnouncementCard";

const AnnouncementsFeedPage = () => {
  const announcements = [
    {
      id: 1,
      title: "Reunión de Padres",
      summary: "La reunión se realizará el viernes a las 4 PM.",
      date: "2025-04-05",
    },
    {
      id: 2,
      title: "Feriado Académico",
      summary: "El lunes 7 de abril no habrá clases.",
      date: "2025-04-02",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Comunicados del Colegio</h1>

      <div>
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} announcement={a} />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsFeedPage;
