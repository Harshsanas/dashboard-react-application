import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Setting from "./setting/Setting";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="setting" element={<Setting />} />
    </Routes>
  );
}
