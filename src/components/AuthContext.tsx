// AuthContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getUserIdFromToken } from "../auth/auth.store";
import { useUserProfile } from "../hooks/useAuth";

interface AuthContextType {
  userId: string | null;
  userData: any;
  isLoading: boolean;
  error: any;
  refreshAuth: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState(getUserIdFromToken());

  const refreshAuth = () => {
    setUserId(getUserIdFromToken());
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(getUserIdFromToken());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const { data, isLoading, error } = useUserProfile(userId);

  return (
    <AuthContext.Provider
      value={{ userId, userData: data, isLoading, error, refreshAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
