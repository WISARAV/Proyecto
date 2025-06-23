// src/components/layouts/TeacherLayout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";

const TeacherLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="teacher" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default TeacherLayout;