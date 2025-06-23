// src/components/ui/MessageCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MessageCard = ({ conversation }) => {
  return (
    <Link to={`/messages/chat/${conversation.id}`}>
      <div className="flex items-center p-3 hover:bg-gray-100 border-b">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          {conversation.contact.charAt(0)}
        </div>
        <div className="ml-3 flex-1">
          <h3 className="font-semibold">{conversation.contact}</h3>
          <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
        </div>
        <div className="text-xs text-gray-400">{conversation.time}</div>
      </div>
    </Link>
  );
};

export default MessageCard;