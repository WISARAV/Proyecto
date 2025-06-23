// src/services/attendance.service.js
import apiClient from "./api";

const getAttendanceByStudent = (studentId) => {
  return apiClient.get(`/attendance/student/${studentId}`);
};

const takeAttendance = (data) => {
  return apiClient.post("/attendance", data);
};

const updateAttendance = (id, data) => {
  return apiClient.put(`/attendance/${id}`, data);
};

export default {
  getAttendanceByStudent,
  takeAttendance,
  updateAttendance,
};