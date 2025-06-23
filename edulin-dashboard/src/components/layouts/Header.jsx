// src/components/layouts/Header.jsx
import React from "react";
import NotificationBell from "@/components/common/NotificationBell";
import LogoutButton from "@/components/common/LogoutButton";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">EDULIN</h1>
      <div className="flex space-x-4 items-center">
        <NotificationBell />
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;