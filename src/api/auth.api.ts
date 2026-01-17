import { api } from "./axios";

export const loginApi = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const signupApi = (data: {
  email: string;
  password: string;
  username: string;
}) => api.post("/auth/signup", data);

export const userProfileApi = (userId: string) => {
  return api.get(`/auth/profile/${userId}`);
};


