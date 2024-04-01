import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Index from "./pages/index";
import EmployeeList from "./pages/employee-list";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Index />} path="/" exact />
          <Route element={<EmployeeList />} path="/employee-list" exact />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
