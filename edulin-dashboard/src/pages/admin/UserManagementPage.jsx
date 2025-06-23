import React, { useEffect, useState } from "react";
import userApi from "../../services/user.service";
import UserCard from "../../components/ui/UserCard";
import SearchBar from "../../components/ui/SearchBar";
import Pagination from "../../components/ui/Pagination";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
        alert("No se pudieron cargar los usuarios.");
      }
    };
    const handleCreateUser = async (userData) => {
  try {
    const response = await userApi.createUser(userData);
    setUsers([...users, response.data]);
    alert("Usuario creado correctamente");
  } catch (error) {
    console.error("Error al crear usuario:", error);
    alert("No se pudo crear el usuario.");
  }
};

    fetchUsers();
  }, []);

  // Filtrar usuarios localmente (opcional)
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;

    try {
      await userApi.deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
      alert("Usuario eliminado correctamente.");
    } catch (error) {
      alert("Error al eliminar el usuario.");
      console.error("Error al eliminar:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const roles = ["all", "Administrador", "Director", "Profesor", "Alumno", "Padre", "Auxiliar"];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Nuevo Usuario
        </button>
      </div>

      {/* Filtros */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar placeholder="Buscar usuario..." onSearch={handleSearch} />
        <select
          value={roleFilter}
          onChange={(e) => {
            setRoleFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          {roles.map(role => (
            <option key={role} value={role}>
              {role === "all" ? "Todos los Roles" : role}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de usuarios */}
      <div className="bg-white rounded shadow overflow-hidden">
        {currentUsers.length > 0 ? (
          currentUsers.map(user => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <p className="p-6 text-center text-gray-500">No se encontraron usuarios.</p>
        )}
      </div>

      {/* Paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserManagementPage;