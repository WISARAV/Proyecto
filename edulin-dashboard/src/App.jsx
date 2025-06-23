import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/Home";
// Importa los layouts
import AdminLayout from "./components/layouts/AdminLayout";
import TeacherLayout from "./components/layouts/TeacherLayout";
import DirectorLayout from "./components/layouts/DirectorLayout";
import StudentLayout from "./components/layouts/StudentLayout";
import ParentLayout from "./components/layouts/ParentLayout";

// Importa páginas comunes
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Importa páginas por rol - Administrador
import AdminHome from "./pages/Home";
import UserManagementPage from "./pages/admin/UserManagementPage";
import SystemSettingsPage from "./pages/admin/SystemSettingsPage";
import SystemLogsPage from "./pages/admin/SystemLogsPage";
import CreateUserPage from "./pages/admin/CreateUserPage"; // ✓ Correcto

// Importa páginas del director
import DirectorHome from "./pages/director/Home";
import AcademicReportPage from "./pages/director/AcademicReportPage";
import ManageAnnouncementsPage from "./pages/director/ManageAnnouncementsPage";

// Importa páginas del profesor
import CoursesPage from "./pages/teacher/CoursesPage";
import CourseDetailPage from "./pages/teacher/CourseDetailPage";
import TasksPage from "./pages/teacher/TasksPage";
import TaskDetailPage from "./pages/teacher/TaskDetailPage";
import CreateTaskPage from "./pages/teacher/CreateTaskPage";
import AttendancePage from "./pages/teacher/AttendancePage";
import TakeAttendancePage from "./pages/teacher/TakeAttendancePage";

// Importa páginas de mensajes internos
// App.jsx - Importaciones
import MessagesPage from "./pages/messages/MessagesPage"; 
import ChatPage from "./pages/messages/ChatPage";        

// Importa páginas del alumno
import AttendanceReportPage from "./pages/student/AttendanceReportPage";
import BehaviorReportPage from "./pages/student/BehaviorReportPage";
import SubmitTaskPage from "./pages/student/SubmitTaskPage"; // ✓ Correcto

// Importa páginas del padre
import ChildAttendancePage from "./pages/parent/ChildAttendancePage";
import ChildBehaviorPage from "./pages/parent/ChildBehaviorPage";

// Importa páginas de notificaciones
import NotificationsPage from "./pages/notifications/NotificationsPage";

// Importa páginas de reportes
import GenerateReportPage from "./pages/reports/GenerateReportPage";
import ReportPreviewPage from "./pages/reports/ReportPreviewPage";

// Importa páginas de comunicados
import AnnouncementsFeedPage from "./pages/announcements/AnnouncementsFeedPage";

// Importa páginas de alertas
import AlertsFeedPage from "./pages/alerts/AlertsFeedPage";
import AlertDetailPage from "./pages/alerts/AlertDetailPage";

// Importa página de perfil
import ProfilePage from "./pages/profile/ProfilePage"; // ✓ Ruta desde `src/App.jsx`

import TestPDFPage from "@/pages/TestPDFPage";





function App() {
  return (
    
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas protegidas: Administrador */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin/users" element={<UserManagementPage />} />
              <Route path="/admin/users/create" element={<CreateUserPage />} />
              <Route path="/admin/settings" element={<SystemSettingsPage />} />
              <Route path="/admin/logs" element={<SystemLogsPage />} />
            </Route>
          </Route>

          {/* Rutas protegidas: Director */}
          <Route element={<ProtectedRoute allowedRoles={["director"]} />}>
            <Route element={<DirectorLayout />}>
              <Route path="/director" element={<DirectorHome />} />
              <Route path="/director/report" element={<AcademicReportPage />} />
              <Route path="/director/announcements" element={<ManageAnnouncementsPage />} />
            </Route>
          </Route>

          {/* Rutas protegidas: Profesor */}
          <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
            <Route element={<TeacherLayout />}>
              <Route path="/teacher/courses" element={<CoursesPage />} />
              <Route path="/teacher/course/:id" element={<CourseDetailPage />} />
              <Route path="/teacher/tasks" element={<TasksPage />} />
              <Route path="/teacher/task/:id" element={<TaskDetailPage />} />
              <Route path="/teacher/tasks/create" element={<CreateTaskPage />} />
              <Route path="/teacher/attendance" element={<AttendancePage />} />
              <Route path="/teacher/attendance/:id" element={<TakeAttendancePage />} />
            </Route>
          </Route>

          {/* Rutas protegidas: Mensajes (Profesor, Padre, Director) */}
                    <Route element={<ProtectedRoute allowedRoles={["teacher", "parent", "director"]} />}>
            <Route element={<TeacherLayout />}>
              <Route path="/messages" element={<MessagesPage />} /> 
              <Route path="/messages/chat/:id" element={<ChatPage />} />
            </Route>
          </Route>

          {/* Rutas protegidas: Alumno */}
          <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
            <Route element={<StudentLayout />}>
              <Route path="/student/attendance" element={<AttendanceReportPage />} />
              <Route path="/student/behavior" element={<BehaviorReportPage />} />
              <Route path="/student/task/submit" element={<SubmitTaskPage />} />
            </Route>
          </Route>

          {/* Rutas protegidas: Padre */}
          <Route element={<ProtectedRoute allowedRoles={["parent"]} />}>
            <Route element={<ParentLayout />}>
              <Route path="/parent/child/attendance" element={<ChildAttendancePage />} />
              <Route path="/parent/child/behavior" element={<ChildBehaviorPage />} />
            </Route>
          </Route>

          {/* Rutas protegidas: Notificaciones globales */}
          <Route element={<ProtectedRoute allowedRoles={["admin", "teacher", "parent", "student"]} />}>
            <Route path="/notifications" element={<NotificationsPage />} />
          </Route>

          {/* Rutas protegidas: Perfil del usuario */}
          <Route element={<ProtectedRoute allowedRoles={["admin", "teacher", "parent", "student", "assistant", "director"]} />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Rutas protegidas: Reportes */}
          <Route element={<ProtectedRoute allowedRoles={["teacher", "parent", "director"]} />}>
            <Route path="/reports/generate" element={<GenerateReportPage />} />
            <Route path="/reports/preview" element={<ReportPreviewPage />} />
          </Route>

          {/* Rutas protegidas: Comunicados oficiales */}
          <Route element={<ProtectedRoute allowedRoles={["teacher", "parent", "student"]} />}>
            <Route path="/announcements" element={<AnnouncementsFeedPage />} />
          </Route>

          {/* Rutas protegidas: Alertas */}
          <Route element={<ProtectedRoute allowedRoles={["teacher", "parent", "director"]} />}>
            <Route path="/alerts" element={<AlertsFeedPage />} />
            <Route path="/alerts/:id" element={<AlertDetailPage />} />
          </Route>
          {/* Ruta protegida: Entregar Tarea */}
          <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
            <Route element={<StudentLayout />}>
              <Route path="/student/task/submit" element={<SubmitTaskPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;