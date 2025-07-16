import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Adjust if your backend uses a different URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; 