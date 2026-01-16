import { api } from "./axios";

export const loginApi = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const signupApi = (data: {
  email: string;
  password: string;
  username: string;
}) => api.post("/auth/signup", data);

export const refreshApi = () => api.post("/auth/refresh");
