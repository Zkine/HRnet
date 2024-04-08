import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { exportDefaultStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Index from "./pages/index";
import EmployeeList from "./pages/employee-list";
import "./styles/main.scss";

const { store, persistor } = exportDefaultStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route element={<Index />} path="/" exact />
            <Route element={<EmployeeList />} path="/employee-list" exact />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
