// src/pages/teacher/CoursesPage.jsx
import React, { useEffect, useState } from "react";
import CardCourse from "../../components/ui/CardTask";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga desde API
    setTimeout(() => {
      const mockCourses = [
        { id: 1, name: "Matemáticas", grade: 3, studentsCount: 25 },
        { id: 2, name: "Ciencias", grade: 2, studentsCount: 20 },
        { id: 3, name: "Lenguaje", grade: 3, studentsCount: 22 },
      ];
      setCourses(mockCourses);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando cursos...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Mis Cursos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CardCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;