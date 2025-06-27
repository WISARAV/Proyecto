// frontend/src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5173/api', // URL del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;