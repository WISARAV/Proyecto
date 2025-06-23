// src/components/common/NotificationBell.jsx
import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Datos simulados
  const notifications = [
    { id: 1, title: "Nueva Tarea", message: "Tienes una nueva tarea en Matemáticas.", read: false },
    { id: 2, title: "Calificación Publicada", message: "Tu nota en Ciencias está disponible.", read: false },
    { id: 3, title: "Ausencia Registrada", message: "Faltaste a clase de Lenguaje.", read: true },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    // Aquí puedes conectar con tu API para marcar como leído
    console.log(`Marcar notificación ${id} como leída`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded shadow-lg z-10 max-h-96 overflow-y-auto">
          <div className="p-3 border-b font-bold">Notificaciones</div>
          {notifications.length === 0 ? (
            <div className="p-3 text-sm text-gray-500">No hay notificaciones.</div>
          ) : (
            notifications.map((notif) => (
              <NotificationItem
                key={notif.id}
                notification={notif}
                onMarkAsRead={() => markAsRead(notif.id)}
              />
            ))
          )}
          <div className="p-2 text-center">
            <a href="/notifications" className="text-sm text-blue-500 hover:underline">
              Ver todas
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
