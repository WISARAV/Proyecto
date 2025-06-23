// src/pages/notifications/NotificationsPage.jsx
import React from "react";
import NotificationItem from "../../components/common/NotificationItem";

const NotificationsPage = () => {
  // Datos simulados
  const notifications = [
    { id: 1, title: "Nueva Tarea", message: "Tienes una nueva tarea en Matemáticas.", read: false },
    { id: 2, title: "Calificación Publicada", message: "Tu nota en Ciencias está disponible.", read: false },
    { id: 3, title: "Ausencia Registrada", message: "Faltaste a clase de Lenguaje.", read: true },
    { id: 4, title: "Comunicado Oficial", message: "Reunión de padres programada para el viernes.", read: false },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mis Notificaciones</h1>

      <div className="bg-white rounded shadow p-6">
        {notifications.map((notif) => (
          <NotificationItem key={notif.id} notification={notif} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;