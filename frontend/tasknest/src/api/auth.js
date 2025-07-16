import api from "./axios";

export const login = async (username, password) => {
  const res = await api.post("/token/", { username, password });
  return res.data;
};

export const register = async (username, password) => {
  const res = await api.post("/register/", { username, password });
  return res.data;
}; 