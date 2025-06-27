// frontend/src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5173/api', // Asegúrate de que sea el puerto correcto
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;