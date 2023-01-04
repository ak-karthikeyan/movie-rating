import { Routes, Route } from "react-router-dom";
import AdminLogin from "../AdminLogin";
import AdminPage from "../AdminPage";
import MoviesList from "../MoviesList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/AdminPage" element={<AdminPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
