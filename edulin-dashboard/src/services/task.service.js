// src/services/task.service.js
import apiClient from "./api";

const getTasks = () => {
  return apiClient.get("/tasks");
};

const getTaskById = (id) => {
  return apiClient.get(`/tasks/${id}`);
};

const createTask = (data) => {
  return apiClient.post("/tasks", data);
};

const updateTask = (id, data) => {
  return apiClient.put(`/tasks/${id}`, data);
};

const deleteTask = (id) => {
  return apiClient.delete(`/tasks/${id}`);
};
const submitTask = (formData) => {
  return apiClient.post("/tasks/submit", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export default {
  submitTask,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
// src/services/task.service.js

