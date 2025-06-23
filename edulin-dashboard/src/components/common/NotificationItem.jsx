// src/components/common/NotificationItem.jsx
import React from "react";

const NotificationItem = ({ notification, onMarkAsRead }) => {
  return (
    <div className={`p-3 border-b hover:bg-gray-50 ${notification.read ? "opacity-70" : ""}`}>
      <h4 className="font-semibold text-sm">{notification.title}</h4>
      <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
      <button
        onClick={onMarkAsRead}
        className="text-xs text-blue-500 mt-1"
      >
        Marcar como leída
      </button>
    </div>
  );
};

export default NotificationItem;