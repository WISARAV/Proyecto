// src/pages/director/ManageAnnouncementsPage.jsx
import React, { useState } from "react";
import CreateAnnouncementForm from "../../components/ui/CreateAnnouncementForm";
import AnnouncementCard from "../../components/ui/AnnouncementCard";

const ManageAnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([
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
  ]);

  const handleCreate = (newAnnouncement) => {
    const announcementWithId = {
      ...newAnnouncement,
      id: announcements.length + 1,
    };
    setAnnouncements([announcementWithId, ...announcements]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gestión de Comunicados</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Nuevo Comunicado</h2>
        <CreateAnnouncementForm onSubmit={handleCreate} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Comunicados Existentes</h2>
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} announcement={a} />
        ))}
      </div>
    </div>
  );
};

export default ManageAnnouncementsPage;