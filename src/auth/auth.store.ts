 import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = 'accessToken';

export const setTokens = (access: string) => {
  localStorage.setItem(TOKEN_KEY, access);
   window.dispatchEvent(new Event('storage'));
};

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.dispatchEvent(new Event('storage'));
};

export const getUserIdFromToken = () => {
  const accessToken = getAccessToken();
  if (!accessToken) return null;

  try {
    const decoded: any = jwtDecode(accessToken);
    return decoded.sub || decoded.id;
  } catch {
    return null;
  }
};
