// src/components/ui/ChatMessageItem.jsx
import React from "react";

const ChatMessageItem = ({ message, isSender }) => {
  return (
    <div className={`mb-4 ${isSender ? "text-right" : ""}`}>
      <div
        className={`inline-block max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
          isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p>{message.text}</p>
        <small className="opacity-75 mt-1 block">{message.time}</small>
      </div>
    </div>
  );
};

export default ChatMessageItem;