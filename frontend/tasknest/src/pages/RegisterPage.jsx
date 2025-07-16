import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Auth/RegisterForm";

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <RegisterForm onRegister={() => navigate("/login")} />
    </div>
  );
} 