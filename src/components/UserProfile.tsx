import Login from "../pages/Login";
import { useAuth } from "./AuthContext";

interface UserProfileProps {
  children: (userData: {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }) => React.ReactNode;
  fallback?: React.ReactNode;
}

const UserProfile = ({ children, fallback }: UserProfileProps) => {
  const { userId, userData } = useAuth();

  if (!userId) {
    return (
      fallback || (
        <div className="absolute h-screen w-full ">
          <Login />
        </div>
      )
    );
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">No profile data available</p>
      </div>
    );
  }

  return <>{children(userData)}</>;
};

export default UserProfile;
