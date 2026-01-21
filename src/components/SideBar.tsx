import { Button } from "./Button";
import { Icons } from "../icons/icons";
import UserProfile from "./UserProfile";
import { useLogout } from "../hooks/useAuth";
import { useNotes } from "../hooks/useNote";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const { mutate: logout } = useLogout();
  const { data } = useNotes();
  const notes = data?.notes || data?.posts || data || [];
  return (
    <aside className="flex flex-col justify-between w-72 h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-900 p-2 rounded-lg shadow-md">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Notes App</h1>
            <p className="text-xs text-gray-500">Organize your thoughts</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-2">
          <li>
              {notes.length > 0 && (
                <Link
                  to="/create-note"
                  className=" flex items-center mb-6 gap-4 text-sm text-gray-500  hover:border-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Icons.Plus />
                  New Note
                </Link>
              )}
          </li>
          {notes.map((note: any) => (
            <p className="text-xs bg-gray-100 p-2 rounded-md mt-1 text-gray-900">
              {note.title}
            </p>
          ))}
        </ul>
      </div>

      <UserProfile>
        {(user) => (
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.username}`}
                  alt={user.username}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user.username}
                </p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => logout()} variant="danger" size="md">
                Logout
              </Button>
            </div>
          </div>
        )}
      </UserProfile>
    </aside>
  );
};
