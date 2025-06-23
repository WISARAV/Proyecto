// src/pages/messages/ChatPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conversación #{id}</h1>
      <p>Estás viendo la conversación con ID: {id}</p>
    </div>
  );
};

export default ChatPage;