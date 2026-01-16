import { useMutation } from "@tanstack/react-query";
import { api } from "../api/axios";
import { setTokens, clearTokens } from "../auth/auth.store";

export const useLogin = () =>
  useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      api.post("/auth/login", data),

    onSuccess: (res) => {
      setTokens(res.data.accessToken, res.data.refreshToken);
    },
  });

export const useSignup = () =>
  useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      username: string;
    }) => api.post("/auth/signup", data),
  });

export const useLogout = () =>
  useMutation({
    mutationFn: async () => {
      clearTokens();
    },
  });
