import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <Link to="/tasks" className="font-bold text-lg">TaskNest</Link>
      <div className="flex gap-4 items-center">
        {isAuth ? (
          <>
            <Link to="/tasks" className="hover:underline">Tasks</Link>
            <button className="bg-white text-blue-600 px-3 py-1 rounded ml-2" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
} 