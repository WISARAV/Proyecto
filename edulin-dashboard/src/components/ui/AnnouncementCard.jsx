// src/components/ui/AnnouncementCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h2 className="text-lg font-bold">{announcement.title}</h2>
      <p className="text-sm text-gray-500">Publicado el {announcement.date}</p>
      <p className="mt-2">{announcement.summary}</p>
      <Link to={`/announcements/${announcement.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
        Leer más →
      </Link>
    </div>
  );
};

export default AnnouncementCard;