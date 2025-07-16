import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <LoginForm onLogin={() => navigate("/tasks")} />
    </div>
  );
} 