// AuthWrapper.tsx
import { useEffect, useState } from "react";
import { getUserIdFromToken } from "../auth/auth.store";
import { useUserProfile } from "../hooks/useAuth";
import Login from "../pages/Login";

interface AuthWrapperProps {
  children: (data: any) => React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const [userId, setUserId] = useState(getUserIdFromToken());

  // Listen for auth changes
  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(getUserIdFromToken());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const { data, isLoading, error } = useUserProfile(userId);

  if (!userId) {
    return <Login />;
  }

  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">Error loading profile</p>;
  }

  return <>{children(data)}</>;
};

export default AuthWrapper;
