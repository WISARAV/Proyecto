// src/services/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tu-backend-en-render.com/api",  // Cambia esto por tu backend real
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor opcional para JWT
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiClient;
