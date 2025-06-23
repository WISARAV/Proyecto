// src/services/course.service.js
import apiClient from "./api";

const getCourses = () => {
  return apiClient.get("/courses");
};

const getCourseById = (id) => {
  return apiClient.get(`/courses/${id}`);
};

const createCourse = (data) => {
  return apiClient.post("/courses", data);
};

const updateCourse = (id, data) => {
  return apiClient.put(`/courses/${id}`, data);
};

const deleteCourse = (id) => {
  return apiClient.delete(`/courses/${id}`);
};

export default {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};