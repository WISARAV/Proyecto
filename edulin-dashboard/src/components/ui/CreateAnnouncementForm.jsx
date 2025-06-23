// src/components/ui/CreateAnnouncementForm.jsx
import React, { useState } from "react";

const CreateAnnouncementForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      summary,
      content,
      date: date || new Date().toISOString().split("T")[0],
    });
    setTitle("");
    setSummary("");
    setContent("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Resumen</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contenido completo</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha de publicación</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Publicar Comunicado
      </button>
    </form>
  );
};

export default CreateAnnouncementForm;