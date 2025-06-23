// src/services/user.service.js
import apiClient from "./api";

const createUser = (data) => {
  return apiClient.post("/users", data); // Asegúrate de que tu backend responda aquí
};

export default {
  createUser
};