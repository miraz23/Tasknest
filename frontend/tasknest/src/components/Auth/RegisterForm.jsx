import { useState } from "react";
import { register } from "../../api/auth";
import { Input } from "../Layout/Inputs";
import { Button } from "../Layout/Buttons";

export default function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(username, password);
      onRegister();
    } catch {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
      <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button className="w-full" type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</Button>
    </form>
  );
} 