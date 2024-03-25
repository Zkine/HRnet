import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import EmployeeList from "./pages/employee-list";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Index />} path="/" exact />
        <Route element={<EmployeeList />} path="/employee-list" exact />
      </Routes>
    </Router>
  </React.StrictMode>
);
