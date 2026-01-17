import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useLogout } from "../hooks/useAuth";

export const Header = () => {
  const [showUserCard, setShowUserCard] = useState(false);
  const { userData } = useAuth();
  const { mutate: logout, isPending } = useLogout();

  if (!userData) return null;

  return (
    <header className="flex items-center justify-between w-full h-20 px-6">
       <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full rounded-md bg-gray-100 px-4 py-2 outline-none "
        />
      </div>

       <button
        onClick={() => setShowUserCard(!showUserCard)}
        className="relative"
      >
        <img
          src={`https://ui-avatars.com/api/?name=${userData.username}`}
          alt={userData.username}
          className="w-10 h-10 rounded-full transition"
        />
      </button>

       {showUserCard && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowUserCard(false)}
          />
          <div className="absolute right-6 top-16 z-50 w-72 bg-gray-100 rounded-lg shadow-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${userData.username}`}
                alt={userData.username}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {userData.username}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {userData.email}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => logout()}
                disabled={isPending}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition disabled:opacity-50"
              >
                {isPending ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
