import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import Navbar from "./components/Layout/Navbar";
import PrivateRoute from "./components/Layout/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto py-8">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<PrivateRoute><TasksPage /></PrivateRoute>} />
          <Route path="/tasks/:id" element={<PrivateRoute><TaskDetailPage /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </div>
    </Router>
  );
}
