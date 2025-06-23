// src/services/auth.service.js
import apiClient from "./api";

const login = (credentials) => {
  return apiClient.post("/auth/login", credentials);
};

const register = (userData) => {
  return apiClient.post("/users", userData);
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export default {
  login,
  register,
  logout
};