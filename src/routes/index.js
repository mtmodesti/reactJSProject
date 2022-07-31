import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../pages/admin";
import Dashboard from "../pages/register";
import Main from "../components/main";
import { DashboardUser } from "../pages/dashboardUser";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          {" "}
        </Route>
        <Route path="/register" element={<Dashboard />}>
          {" "}
        </Route>
        <Route path="/dashboard" element={<DashboardUser />}>
          {" "}
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesApp;
