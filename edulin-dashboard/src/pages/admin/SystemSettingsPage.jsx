// src/pages/admin/SystemSettingsPage.jsx
import React, { useState } from "react";
import SettingsCard from "../../components/ui/SettingsCard";
import ToggleSwitch from "../../components/ui/ToggleSwitch";

const SystemSettingsPage = () => {
  const [settings, setSettings] = useState({
    allowStudentLogin: true,
    enableNotifications: true,
    enableMessaging: true,
    autoGenerateReports: false,
  });

  const handleChange = (key) => (e) => {
    setSettings({
      ...settings,
      [key]: e.target.checked,
    });
  };

  const handleSave = () => {
    // Aquí iría la llamada al backend
    alert("Configuración guardada.");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Configuración del Sistema</h1>

      {/* Configuración general */}
      <SettingsCard title="General">
        <ToggleSwitch
          label="Permitir inicio de sesión a alumnos"
          checked={settings.allowStudentLogin}
          onChange={handleChange("allowStudentLogin")}
        />
        <ToggleSwitch
          label="Habilitar notificaciones globales"
          checked={settings.enableNotifications}
          onChange={handleChange("enableNotifications")}
        />
        <ToggleSwitch
          label="Habilitar mensajería interna"
          checked={settings.enableMessaging}
          onChange={handleChange("enableMessaging")}
        />
      </SettingsCard>

      {/* Configuración académica */}
      <SettingsCard title="Ajustes Académicos">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Año Escolar
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>2025 - 2026</option>
            <option>2024 - 2025</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Inicio
            </label>
            <input
              type="date"
              defaultValue="2025-03-01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Fin
            </label>
            <input
              type="date"
              defaultValue="2025-12-15"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </SettingsCard>

      {/* Notificaciones automáticas */}
      <SettingsCard title="Notificaciones Automáticas">
        <ToggleSwitch
          label="Enviar reporte semanal de asistencia"
          checked={settings.autoGenerateReports}
          onChange={handleChange("autoGenerateReports")}
        />

        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Frecuencia de reportes
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Semanal</option>
            <option>Quincenal</option>
            <option>Mensual</option>
          </select>
        </div>
      </SettingsCard>

      {/* Botón guardar */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default SystemSettingsPage;