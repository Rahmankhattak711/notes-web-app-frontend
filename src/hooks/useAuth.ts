import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import { setTokens, clearTokens } from "../auth/auth.store";
import { userProfileApi } from "../api/auth.api";

export const useLogin = () =>
  useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      api.post("/auth/login", data),

    onSuccess: (res) => {
      setTokens(res.data.accessToken);
      window.dispatchEvent(new Event("storage"));
    },
  });

export const useSignup = () =>
  useMutation({
    mutationFn: (data: { email: string; password: string; username: string }) =>
      api.post("/auth/signup", data),
  });

export const useLogout = () =>
  useMutation({
    mutationFn: async () => {
      clearTokens();
      window.dispatchEvent(new Event("storage"));
    },
  });

export const useUserProfile = (userId: string | null) =>
  useQuery({
    queryKey: ["user-profile", userId],
    queryFn: async () => {
      const res = await userProfileApi(userId!);
      return res.data.user;
    },
    enabled: !!userId,
  });
