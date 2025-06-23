// src/components/layouts/Sidebar.jsx
const Sidebar = ({ role }) => {
  const links = {
    admin: [
      { name: "Usuarios", path: "/admin/users" },
      { name: "Estadísticas", path: "/admin/stats" },
    ],
    teacher: [
      { name: "Cursos", path: "/teacher/courses" },
      { name: "Tareas", path: "/teacher/tasks" },
    ],
    // ...otros roles
  };

  return (
    <aside className="w-64 bg-blue-700 text-white">
      <h2 className="p-4 text-xl font-bold">EDULIN</h2>
      <nav className="mt-4">
        {links[role]?.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className="block p-3 hover:bg-blue-800"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;