import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Setting from "./components/setting/Setting";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}
