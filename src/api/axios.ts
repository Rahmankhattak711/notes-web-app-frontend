import axios from "axios";
import { getAccessToken, clearTokens } from "../auth/auth.store";

export const api = axios.create({
  baseURL: "https://notes-web-app-production.up.railway.app",
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      clearTokens();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
